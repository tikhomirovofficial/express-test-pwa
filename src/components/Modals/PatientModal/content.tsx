import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleOrderInfoModal, handlePatientOrderInfoModal, handlePatientsModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { HeartIcon } from '../../../icons'
import { YellowButton } from '../../YellowButton'
import { OrderCard } from '../../OrderCard'
import Skeleton from 'react-loading-skeleton'
import { getOrdersByPatientId, incrementPatientOrdersPart, resetPatientInfo, resetPatientOrders } from '../../../features/current-data/currentData'
import { usePagination } from '../../../hooks/usePagination'
import { normalizeDate } from '../../../utils/normalizeDate'
import { formatPhoneNumber } from '../../../utils/formatePhone'
import { getAgeByDob } from '../../../utils/getAgeByDob'
import { clearCart } from '../../../features/cart/cartSlice'
import { setPatient, resetOrderBonusesTotal } from '../../../features/order/orderSlice'
import { useNavigate } from 'react-router-dom'
const loading = false;

export const PatientModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { patientInfoModal, patientOrderInfoModal, patientsModal } = useAppSelector(state => state.modals)
    const { patientInfo, loadings, parts, can_next } = useAppSelector(state => state.currentData)

    const handleToOrder = () => {
        dispatch(setPatient({
            id: 1,
            first_name: patientInfo.data.first_name,
            last_name: patientInfo.data.last_name
        }))

        dispatch(clearCart())
        if (handleModal) {
            handleModal()
        }
        dispatch(resetOrderBonusesTotal())
        if (patientsModal) {
            dispatch(handlePatientsModal())
        }
        setTimeout(() => {
            navigate("order/category")
        }, 50)
    }

    const [loadOrders, loadMore] = usePagination(
        () => {
            dispatch(getOrdersByPatientId({
                pacient: patientInfo.data.id,
                part: parts.patients_orders
            }))
        },
        () => { dispatch(incrementPatientOrdersPart()) },
        {
            part: parts.patients_orders,
            can_more: can_next.patients_orders,
            items: patientInfo.orders,
            loading: loadings.patient_orders_pagination
        },
        [patientInfo.data.id]
    )

    useEffect(() => {
        if (patientInfo.data.id) {
            loadOrders()
        }

    }, [parts.patients_orders, patientInfo.data.id])

    useEffect(() => {
        return () => {
            dispatch(resetPatientInfo())
            dispatch(resetPatientOrders())
        }
    }, [])

    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Пациент</p>
                <div className='f-03'></div>
            </div>
            <div className="f-column gap-15">
                {

                    loadings.patient_info ? <div className="f-column gap-5 al-center">
                        <Skeleton height={20} width={150} borderRadius={6} />
                        <Skeleton height={20} width={240} borderRadius={6} />

                    </div> :
                        <div className="f-column gap-15">
                            <h2 className="title txt-center">{patientInfo.data.last_name} <br />{patientInfo.data.first_name} {patientInfo.data.subname}</h2>
                        </div>
                }
                <YellowButton onClick={handleToOrder}>Заказать анализы</YellowButton>
            </div>
            <div className="f-column gap-15">
                {
                    loadings.patient_info ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                        <h2 className="title">Личная информация</h2>
                }
                {
                    loadings.patient_info ?
                        <Skeleton borderRadius={6} height={73} width={"70%"} /> :
                        <div style={{ maxWidth: 230 }} className="f-column gap-10">
                            <div className="f-row-betw">
                                <p className={`fz-m c-lg`}>Возраст</p>
                                <p className={`fz-m c-dark`}>{patientInfo.data?.dob ? getAgeByDob(patientInfo.data?.dob || "") : "Не указан"}</p>
                            </div>
                            <div className="f-row-betw">
                                <p className={`fz-m c-lg`}>Пол</p>
                                <p className={`fz-m c-dark`}>{patientInfo.data.sex ? "Мужской" : "Женский"}</p>
                            </div>
                            <div className="f-row-betw">
                                <p className={`fz-m c-lg`}>Телефон</p>
                                <p className={`fz-m c-dark`}>{formatPhoneNumber(patientInfo.data.phone)}</p>
                            </div>
                        </div>
                }

            </div>
            <div className={`f-column gap-15`}>
                <h2 className="title">Анализы</h2>
                <div className="f-column gap-15">
                    {
                        loadings.patient_orders ?
                            <>
                                <Skeleton height={140} borderRadius={6} />
                                <Skeleton height={140} borderRadius={6} />
                            </> :
                            patientInfo.orders.length ?
                                patientInfo.orders.map(item => (
                                    <OrderCard status={item.status}
                                        handlePress={() => {
                                            dispatch(handlePatientOrderInfoModal())
                                        }}
                                        key={item.id}
                                        paid={true}
                                        date={normalizeDate(item.date)}
                                        customer={""}
                                        id={item.id}
                                        customerHide
                                        analysisList={[]} />
                                )) :
                                <div style={{ padding: "10px 0" }} className=''>
                                    <p className='fz-m c-dark'>Здесь пока пусто.</p>
                                </div>

                    }
                    {
                        can_next.patients_orders ?
                            <div className="f-c-col">
                                <YellowButton className='fz-s mini-btn' onClick={loadMore} loading={loadings.patient_orders_pagination}>Загрузить еще</YellowButton>
                            </div>
                            : null
                    }
                </div>
            </div>

        </BorderedPageLayout>
    )
}

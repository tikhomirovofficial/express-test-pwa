import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { OrderItem } from '../../OrderItem'
import Skeleton from 'react-loading-skeleton'
import { getOrdersByPatientId, incrementPatientOrdersPart, resetPatientOrders } from '../../../features/current-data/currentData'
import { usePagination } from '../../../hooks/usePagination'
import { normalizeDate } from '../../../utils/normalizeDate'
import { YellowButton } from '../../YellowButton'

export const BonusesPatientModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch()
    const { patientInfo, loadings, parts, can_next } = useAppSelector(state => state.currentData)

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
        }
    )
    useEffect(loadOrders, [parts.patients_orders])

    useEffect(() => {
        return () => {
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
                <p className='c-dark fw-5 fz-l fw-6'>{patientInfo.data.first_name} {patientInfo.data.last_name}</p>
                <div className='f-025'></div>
            </div>
            <div className="f-column gap-15 f-1">
                <div className="f-row-betw">
                    <h2 className="title">Всего</h2>
                    <h2 className="title">{patientInfo.bonuses_data.total}</h2>
                </div>
                <div className="f-1 p-rel h-100p">
                    <div className="list p-abs w-100p f-column scrollableItemsList">
                        {
                            !loadings.patient_orders ?
                                patientInfo.orders.map(item => (
                                    <OrderItem
                                        id={item.id}
                                        codeText={String(item.id)}
                                        leftBottomText={`От ${normalizeDate(item.date)}`}
                                        rightBottomText={item.status}
                                        rightTopText={String(item.bonus)}
                                    />
                                ))
                                :
                                <div className="f-column gap-5">
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                </div>
                        }
                        {
                            can_next.patients_orders && !loadings.patient_orders ?
                                <div style={{ marginTop: 15 }} className="f-c-col">
                                    <YellowButton className='fz-s mini-btn' onClick={loadMore} loading={loadings.patient_orders_pagination}>Загрузить еще</YellowButton>
                                </div>
                                : null
                        }
                    </div>
                </div>

            </div>
        </BorderedPageLayout>
    )
}

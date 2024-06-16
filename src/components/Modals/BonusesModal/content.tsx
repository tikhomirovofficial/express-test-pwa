import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleBonusesBottomSheet, handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { InputField } from '../../InputField'
import { YellowButton } from '../../YellowButton'
import { HeartIcon } from '../../../icons'
import { OrderItem } from '../../OrderItem'
import BarChart from '../../BarChart'
import Skeleton from 'react-loading-skeleton'
import { getOrdersByPatientId, setPatientData } from '../../../features/current-data/currentData'
import { getAllPatients, incrementPatientsPart, resetAllPatients } from '../../../features/patients/patientsSlice'
import { usePagination } from '../../../hooks/usePagination'
import { PatientApi } from '../../../types/entities/patients.types'
import { getChartBonusesData } from '../../../features/bonuses/bonusesSlice'

export const BonusesModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch()
    const patients = useAppSelector(state => state.patients)
    const bonuses = useAppSelector(state => state.bonuses)

    const [loadOrders, loadMore] = usePagination(
        () => { dispatch(getAllPatients({ part: patients.part })) },
        () => { dispatch(incrementPatientsPart()) },
        {
            part: patients.part,
            can_more: patients.can_next,
            items: patients.list,
            loading: patients.loadings.patients_pagination
        }
    )

    const handleOpenPatientInfo = (patient: PatientApi) => {
        dispatch(setPatientData(patient))
        // dispatch(getOrdersByPatientId({
        //     pacient: patient.id,
        //     part: 1
        // }))
        dispatch(handleBonusesBottomSheet())
    }

    useEffect(loadOrders, [patients.part])

    useEffect(() => {
        dispatch(getChartBonusesData())
        return () => {
            dispatch(resetAllPatients())
        }
    }, [])


    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Бонусы</p>
                <div className='f-025'></div>
            </div>
            <div className="f-column gap-15 f-1">
                {
                    !bonuses.loadings.chart ?
                        <BarChart /> :
                        <Skeleton height={160} borderRadius={6} width={"100%"} />
                }

                <div className="f-1 p-rel h-100p">
                    <div className="list p-abs w-100p f-column scrollableItemsList">
                        {
                            patients.loadings.patients ?
                                <div className="f-column gap-5">
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                </div>
                                :
                                patients.list.length ?
                                    patients.list.map((item, index) => (
                                        <PatientItem
                                            {...item}
                                            handlePress={() => handleOpenPatientInfo(item)}
                                            bottomText={item.phone}
                                            neededBottomBorder={index < patients.list.length - 1}
                                        />
                                    )) :
                                    <div style={{ padding: "10px 0" }} className=''>
                                        <p className='fz-m c-dark'>Здесь пока пусто.</p>
                                    </div>
                        }
                        {
                            patients.can_next ?
                                <div className="f-c-col">
                                    <YellowButton className='fz-s mini-btn' onClick={loadMore} loading={patients.loadings.patients_pagination}>Загрузить еще</YellowButton>
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>


        </BorderedPageLayout>
    )
}

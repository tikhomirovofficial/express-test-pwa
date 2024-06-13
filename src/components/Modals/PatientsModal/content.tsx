import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleOrderInfoModal, handlePatientInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { InputField } from '../../InputField'
import { YellowButton } from '../../YellowButton'
import { HeartIcon } from '../../../icons'
import { OrderItem } from '../../OrderItem'
import Skeleton from 'react-loading-skeleton'
import { getPatientById } from '../../../features/current-data/currentData'
import { getAllPatients, incrementPatientsPart, resetAllPatients } from '../../../features/patients/patientsSlice'
import { usePagination } from '../../../hooks/usePagination'
const loading = false

export const PatientsModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch()
    const { patientsModal, patientInfoModal } = useAppSelector(state => state.modals)
    const patients = useAppSelector(state => state.patients)
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

    const toInviting = () => {
        if (handleModal) {
            handleModal()
        }
        //navigation.navigate('inviting_exists')
    }

    const handlePatientInfo = (id: number) => {
        dispatch(handlePatientInfoModal())
        dispatch(getPatientById({ id }))
    }

    useEffect(loadOrders, [patients.part])

    useEffect(() => {
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
                <p className='c-dark fw-5 fz-l fw-6'>Пациенты</p>
                <div className='f-03'></div>
            </div>
            <div className="f-1 p-rel h-100p">
                {
                    !patients.loadings.patients ?
                        <div className="list p-abs w-100p f-column scrollableItemsList">
                            {
                                patients.list.map((item, index) => (
                                    <PatientItem
                                        handlePress={() => handlePatientInfo(item.id)}
                                        {...item}
                                        bottomText={item.phone}
                                        neededBottomBorder={index < patients.list.length - 1}
                                    />
                                ))
                            }
                            {
                                patients.can_next ?
                                    <div style={{ marginTop: 15 }} className="f-c-col">
                                        <YellowButton className='fz-s mini-btn' onClick={loadMore} loading={patients.loadings.patients_pagination}>Загрузить еще</YellowButton>
                                    </div>
                                    : null
                            }
                        </div> :
                        <>
                            <div className="f-column gap-5">
                                <Skeleton borderRadius={6} height={50} />
                                <Skeleton borderRadius={6} height={50} />
                                <Skeleton borderRadius={6} height={50} />
                                <Skeleton borderRadius={6} height={50} />
                            </div>
                        </>
                }

            </div>
            <YellowButton onClick={toInviting}>Пригласить пациентов</YellowButton>
        </BorderedPageLayout>
    )
}

import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { InputField } from '../../InputField'
import { YellowButton } from '../../YellowButton'
import { HeartIcon } from '../../../icons'
import { OrderItem } from '../../OrderItem'
import Skeleton from 'react-loading-skeleton'
const loading = false

export const PatientsModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
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
                    !loading ?
                        <div className="list p-abs w-100p f-column scrollableItemsList">
                            {
                                [1, 2, 3, 4, 5].map(item => (
                                    <PatientItem />
                                ))
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
            <YellowButton>Пригласить пациентов</YellowButton>
        </BorderedPageLayout>
    )
}

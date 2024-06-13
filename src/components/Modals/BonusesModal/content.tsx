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
import BarChart from '../../BarChart'
import Skeleton from 'react-loading-skeleton'


type DailyStars = {
    date: Date,
    stars: number,
}
type Series = {
    label: string,
    data: { date: Date, stars: number }[]
}
const loading = false
export const BonusesModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {


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
                    !loading ?
                        <BarChart /> :
                        <Skeleton height={160} borderRadius={6} width={"100%"} />
                }

                <div className="f-1 p-rel h-100p">
                    <div className="list p-abs w-100p f-column scrollableItemsList">
                        {
                            loading ?
                                <div className="f-column gap-5">
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                </div>
                                :
                                [1, 2, 3, 4, 5, 1, 1, 1, 1, 1].map(item => (
                                    // <PatientItem />
                                    <></>
                                ))
                        }
                    </div>
                </div>
            </div>


        </BorderedPageLayout>
    )
}

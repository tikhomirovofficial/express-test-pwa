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


type DailyStars = {
    date: Date,
    stars: number,
}
type Series = {
    label: string,
    data: { date: Date, stars: number }[]
}

export const BonusesPatientModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {


    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Ахмет Ахматович</p>
                <div className='f-025'></div>
            </div>
            <div className="f-column gap-15 f-1">
                <div className="f-row-betw">
                    <h2 className="title">Всего</h2>
                    <h2 className="title">7 865</h2>
                </div>
                <div className="f-1 p-rel h-100p">
                    <div className="list p-abs w-100p f-column scrollableItemsList">
                        {
                            [1, 2, 3, 4, 5, 1, 1, 1,].map(item => (
                                <OrderItem
                                    id={1}
                                    leftBottomText={"Владислав Тузов"}
                                    rightBottomText={"Ожидание"}
                                    rightTopText={"100"}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>


        </BorderedPageLayout>
    )
}

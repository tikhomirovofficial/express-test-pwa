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


type DailyStars = {
    date: Date,
    stars: number,
}
type Series = {
    label: string,
    data: { date: Date, stars: number }[]
}

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
            <div className="f-column gap-30">
               
                <div className="f-column gap-30">
                    <div className="f-column gap-5">
                        <h2 className="title">01.10.2023</h2>
                        <div className="f-column">
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                        </div>
                    </div>
                </div>
                <div className="f-column gap-30">
                    <div className="f-column gap-5">
                        <h2 className="title">01.10.2023</h2>
                        <div className="f-column">
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                        </div>
                    </div>
                </div>
                <div className="f-column gap-30">
                    <div className="f-column gap-5">
                        <h2 className="title">01.10.2023</h2>
                        <div className="f-column">
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                        </div>
                    </div>
                </div>
                <div className="f-column gap-30">
                    <div className="f-column gap-5">
                        <h2 className="title">01.10.2023</h2>
                        <div className="f-column">
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                            <OrderItem
                                id={1}
                                leftBottomText={"Владислав Тузов"}
                                rightBottomText={"Ожидание"}
                                rightTopText={"100"}
                            />
                        </div>
                    </div>
                </div>

            </div>


        </BorderedPageLayout>
    )
}

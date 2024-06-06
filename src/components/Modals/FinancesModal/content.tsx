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

export const FinancesModalContent: FC<ModalContentProps> = ({ handleModal }) => {
    return (
        <BorderedPageLayout
            modal={{ level: 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Финансы</p>
                <div className='f-025'></div>
            </div>
            <div className="f-column gap-30">
                <div className="whiteBorderedBlock pd-20 f-column gap-15">
                    <div className="f-column gap-10">
                        <div className="d-f al-center gap-10">
                            <div className="d-f al-center gap-5">
                                <HeartIcon stroke={"#414141"} />
                                <p className={"fz-l fw-6 c-dark"}>Бонусы</p>
                            </div>
                            <p>1 ед. = 1 ₽</p>
                        </div>
                        <h3 className='fz-l'>Бонусов: 45</h3>
                    </div>
                    <p className="c-lg fz-s">Мин. сумма для вывода 500 бонусов</p>
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

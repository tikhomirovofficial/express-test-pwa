import React from 'react'
import { Link } from 'react-router-dom'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { InfoPageLayout } from '../../InfoPageLayout'


export const OrderSent = () => {
    return <InfoPageLayout
        title={"Заказ отправлен пациенту"}
        image={'images/info/order_sent.jpg'}
        content={<div className="f-1 f-column wrapper f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>После подтверждения заказа будет начислено <span className='c-blue'>до 1000 бонусов</span></p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Пациент может сдать часть анализов по своему выбору, либо отказаться от заказа полностью</p>
                </div>
                <Link to={'/'} className={`textButton`}>Как узнать результаты?</Link>

            </div>
            <div className="f-column gap-30 al-center">
                <Link to={"/"} className={"w-100p"}>
                    <YellowButton>Закрыть</YellowButton>
                </Link>
            </div>
        </div>}
    />
}

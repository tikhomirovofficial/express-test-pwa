import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { InfoPageLayout } from '../../InfoPageLayout'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { formatBonus } from '../../../utils/formatBonusesString'
import { resetOrderSuccess, resetPatient, setCurrentCategory } from '../../../features/order/orderSlice'


export const OrderSent = () => {
    const dispatch = useAppDispatch()
    const { order_total } = useAppSelector(state => state.order.bonuses)

    useEffect(() => {
        dispatch(setCurrentCategory(-1))
        dispatch(resetPatient())
        return () => {
            dispatch(resetOrderSuccess())
        }
    }, [])

    return <InfoPageLayout
        title={"Заказ отправлен пациенту"}
        image={'images/info/order_sent.jpg'}
        content={<div className="f-1 f-column AppContainer f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>После подтверждения заказа будет начислено <span className='c-blue'>до {formatBonus(order_total)}</span></p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Пациент может сдать часть анализов по своему выбору, либо отказаться от заказа полностью</p>
                </div>
                <Link to={'/how-get-results'} className={`textButton`}>Как узнать результаты?</Link>

            </div>
            <div className="f-column gap-30 al-center">
                <Link to={"/"} className={"w-100p"}>
                    <YellowButton>Закрыть</YellowButton>
                </Link>
            </div>
        </div>}
    />
}

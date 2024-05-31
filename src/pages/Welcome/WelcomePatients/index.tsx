import React from 'react'
import { InfoPageLayout } from '../../InfoPageLayout'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { Link } from 'react-router-dom'

export const WelcomePatients = () => {
    return <InfoPageLayout
        title={"Работа с пациентами"}
        image={'images/welcome/1.jpg'}
        topContent={<Link to={'/'} className={`textButton`}>Пропустить</Link>}
        content={<div className="f-1 f-column AppContainer f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Приглашайте своих пациентов по номеру телефона</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Назначайте им необходимые анализы</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Отслеживайте статус заказ</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Просматривайте результаты, назначенных анализов</p>
                </div>

            </div>
            <div className="f-column gap-40 al-center">
                <div className="al-center gap-5 d-f">
                    <div className="dot-active dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <Link to={"/welcome-conditions"} className={"w-100p"}>
                    <YellowButton>Далее</YellowButton>
                </Link>
            </div>
        </div>}
    />
}

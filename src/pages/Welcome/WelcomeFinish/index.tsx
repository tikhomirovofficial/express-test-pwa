import React from 'react'
import { InfoPageLayout } from '../../InfoPageLayout'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { Link } from 'react-router-dom'

export const WelcomeFinish = () => {
    return <InfoPageLayout
        title={"Ваше сотрудничество с нашей лабораторией"}
        image={'images/welcome/3.jpg'}
        content={<div className="f-1 f-column AppContainer f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Бонусная программа для вас и выгодные условия для ваших клиентов</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Сдача анализов происходит в нашей лабораторной службе</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Подходит для врачей, тренеров и блогеров</p>
                </div>
            </div>
            <div className="f-column gap-40 al-center">
                <div className="al-center gap-5 d-f">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot-active dot"></div>

                </div>
                <div className="f-row-betw w-100p">
                    <Link to={"/welcome-conditions"} className={"w-100p f-c-col"}>
                        <p className='transparent-btn'>Назад</p>
                    </Link>
                    <Link to={"/"} className={"w-100p"}>
                        <YellowButton className={"w-100p"}>Начать</YellowButton>
                    </Link>
                </div>
            </div>
        </div>}
    />
}

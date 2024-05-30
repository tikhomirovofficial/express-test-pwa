import React from 'react'
import { InfoPageLayout } from '../../InfoPageLayout'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { Link } from 'react-router-dom'

export const WelcomeConditions = () => {
    return <InfoPageLayout
        title={"Комфортные условия вашей работы"}
        image={'images/welcome/2.jpg'}
        topContent={<Link to={'/'} className={`textButton`}>Пропустить</Link>}
        content={<div className="f-1 f-column wrapper f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Конфиденциальность ваших контактных данных</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Соответствие всем требованиям к персональным данным</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Приглашение новых пациентов за два шага</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Удобный и понятный интерфейс приложения</p>
                </div>

            </div>
            <div className="f-column gap-40 al-center">
                <div className="al-center gap-5 d-f">
                    <div className="dot"></div>
                    <div className="dot-active dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="f-row-betw w-100p">
                    <Link to={"/welcome-patients"} className={"w-100p f-c-col"}>
                        <p className='transparent-btn'>Назад</p>
                    </Link>
                    <Link to={"/welcome-finish"} className={"w-100p"}>
                        <YellowButton>Далее</YellowButton>
                    </Link>
                </div>

            </div>

        </div>}
    />
}

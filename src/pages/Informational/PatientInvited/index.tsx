import React from 'react'
import { Link } from 'react-router-dom'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { InfoPageLayout } from '../../InfoPageLayout'


export const PatientInvited = () => {
    return <InfoPageLayout
        title={"Пациент успешно приглашен"}
        image={'images/info/info_inviting_sent.jpg'}
        content={<div className="f-1 f-column wrapper f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>После перехода по ссылке и регистрации, пациент появится в разделе  <Link className={"c-yellow"} to={"/"}>«Мои пациенты»</Link> в вашем профиле</p>
                </div>
            </div>
            <div className="f-column gap-30 al-center">
                <Link to={"/"} className={"w-100p"}>
                    <YellowButton>Закрыть</YellowButton>
                </Link>
                <div className="d-f jc-center">
                    <Link to={'/'} className={`textButton`}>Пригласить других пациентов</Link>
                </div>
            </div>
        </div>}
    />
}

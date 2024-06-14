import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { InfoPageLayout } from '../../InfoPageLayout'
import { useAppDispatch } from '../../../app/hooks'
import { resetCreateInvitingForm } from '../../../features/inviting/invitingSlice'
import { handlePatientsModal } from '../../../features/modals/modalsSlice'

export const PatientPinned = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const toMyPatients = () => {
        navigate("/profile")
        dispatch(handlePatientsModal())
    }

    useEffect(() => {
        return () => {
            dispatch(resetCreateInvitingForm())
        }
    }, [])

    return <InfoPageLayout
        title={"Пациент успешно привязан"}
        image={'images/info/info_inviting_sent.jpg'}
        content={<div className="f-1 f-column AppContainer f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Пациент успешно привязан, его можно найти в разделе <span onClick={toMyPatients} className={"c-yellow"}>«Мои пациенты»</span> в вашем профиле</p>
                </div>
            </div>
            <div className="f-column gap-30 al-center">
                <Link to={"/"} className={"w-100p"}>
                    <YellowButton>Закрыть</YellowButton>
                </Link>
                <div className="d-f jc-center">
                    <Link to={"/inviting/phone"} className={`textButton`}>Пригласить других пациентов</Link>
                </div>
            </div>
        </div>}
    />
}

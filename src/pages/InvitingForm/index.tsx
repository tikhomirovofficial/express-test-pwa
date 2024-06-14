import React, { useEffect } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { DATE_MASK } from '../../config/masks'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createInviting, handleCreateInvitingForm, handleCreateInvitingGender, resetCreateInvitingForm } from '../../features/inviting/invitingSlice'
import { InvitingCreateReq } from '../../types/api/patients.api.types'
import { extractDigits } from '../../utils/normalizePhone'

export const InvitingForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { text_fields, gender, disabled, sending, success, err } = useAppSelector(state => state.inviting.form)

    const toBackScreen = () => {
        alert("go back")
    }

    const handleCreateInviting = () => {
        const data: InvitingCreateReq = {
            first_name: text_fields.first_name,
            last_name: text_fields.last_name,
            subname: text_fields.subname,
            phone: extractDigits(text_fields.phone),
            dob: text_fields.dob,
            email: text_fields.email,
            gender: gender,
        }
        dispatch(createInviting(data))
    }

    useEffect(() => {
        if (success) {
            navigate("/patient-invited")
        }
    }, [success])

    useEffect(() => {
        return () => {
            dispatch(resetCreateInvitingForm())
        }
    }, [])

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Приглашение пациента</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-40">
                <div className="f-column gap-15">
                    <h2 className="title">Данные пациента</h2>
                    <p className="text c-lg fz-m">
                        Заполните данные ниже, чтобы пригласить пациента в приложение
                    </p>
                </div>

                <div className="f-column gap-30">
                    <InputField
                        value={text_fields.last_name}
                        onChange={e => dispatch(handleCreateInvitingForm({ key: "last_name", val: e.target.value }))}
                        placeholder={"Иванов"}
                        label='Фамилия'
                    />
                    <InputField
                        value={text_fields.first_name}
                        onChange={e => dispatch(handleCreateInvitingForm({ key: "first_name", val: e.target.value }))}
                        placeholder='Иван'
                        label='Имя' />
                    <InputField
                        value={text_fields.subname}
                        onChange={e => dispatch(handleCreateInvitingForm({ key: "subname", val: e.target.value }))}
                        placeholder='Иванович'
                        label='Отчество' />
                    <InputField
                        value={text_fields.dob}
                        onChange={e => dispatch(handleCreateInvitingForm({ key: "dob", val: e.target.value }))}
                        mask={DATE_MASK}
                        maskPlaceholder={"ДД.ММ.ГГГГ"}
                        placeholder={"ДД.ММ.ГГГГ"}
                        label='Дата рождения' />
                    <div className="f-column gap-15">
                        <p className='fz-m fw-5'>Пол</p>
                        <div className="f-row-betw gap-15">
                            <YellowButton onClick={() => dispatch(handleCreateInvitingGender(1))} isFilled={gender === 1} className={"f-1"}>Мужчина</YellowButton>
                            <YellowButton onClick={() => dispatch(handleCreateInvitingGender(0))} isFilled={gender === 0} className={"f-1"}>Женщина</YellowButton>
                        </div>
                    </div>
                    <InputField
                        value={text_fields.email}
                        onChange={e => dispatch(handleCreateInvitingForm({ key: "email", val: e.target.value }))}
                        placeholder='E-mail'
                        label='E-mail' />
                </div>
                <div className="f-column gap-5">
                    <YellowButton onClick={handleCreateInviting} disabled={disabled} loading={sending}>Далее</YellowButton>
                    {
                        err ? <p className='fz-m c-error'>{err}</p> : null
                    }
                </div>

            </div>
        </BorderedPageLayout>
    )
}

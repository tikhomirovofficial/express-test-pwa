import React, { useEffect } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { DATE_MASK, PASSPORT_MASK } from '../../config/masks'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { createProfile, handleCreateProfileForm, handleCreateProfileGender, resetCreateProfileForm } from '../../features/profile/profileSlice'
import { ProfileCreateReq } from '../../types/api/user.api.types'

export const ProfileCreate = () => {
    const dispatch = useAppDispatch();
    const { text_fields, gender, disabled, sending, err } = useAppSelector(state => state.profile.creating_form)

    const handleCreateProfile = () => {
        const data: ProfileCreateReq = {
            first_name: text_fields.first_name,
            last_name: text_fields.last_name,
            subname: text_fields.subname,
            dob: text_fields.dob,
            pob: text_fields.pob,
            passport_issue_date: text_fields.passport_issue_date,
            passport_issued_by: text_fields.passport_issued_by,
            passport_series: text_fields.passport_numbers.split(" ")[0],
            passport_id: text_fields.passport_numbers.split(" ")[1],
            email: text_fields.email,
            gender

        }
        dispatch(createProfile(data));
    }

    useEffect(() => {
        return () => {
            dispatch(resetCreateProfileForm())
        }
    }, [])

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Настройки</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-40">
                <h2 className="title">Укажите информацию о себе для пациентов</h2>
                <div className="f-column gap-30">
                    <InputField
                        value={text_fields.last_name}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "last_name", val: e.target.value }))}
                        placeholder='Иванов'
                        label='Фамилия' />
                    <InputField
                        value={text_fields.first_name}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "first_name", val: e.target.value }))}
                        placeholder='Иван'
                        label='Имя' />
                    <InputField
                        value={text_fields.subname}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "subname", val: e.target.value }))}
                        placeholder='Иванович'
                        label='Отчество' />
                    <div className="f-column gap-15">
                        <p className='fz-m fw-5'>Ваш пол</p>
                        <div className="f-row-betw gap-15">
                            <YellowButton isFilled={gender} onClick={() => dispatch(handleCreateProfileGender(true))} className={"f-1"}>Мужской</YellowButton>
                            <YellowButton isFilled={!gender} onClick={() => dispatch(handleCreateProfileGender(!true))} className={"f-1"}>Женский</YellowButton>
                        </div>
                    </div>
                    <InputField
                        value={text_fields.dob}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "dob", val: e.target.value }))}
                        maskPlaceholder={"ДД.ММ.ГГГГ"}
                        mask={DATE_MASK}
                        placeholder={"ДД.ММ.ГГГГ"}
                        label='Дата рождения' />
                    <InputField
                        value={text_fields.pob}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "pob", val: e.target.value }))}
                        placeholder='Место рождения'
                        label='Место рождения' />
                    <InputField
                        value={text_fields.passport_numbers}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "passport_numbers", val: e.target.value }))}
                        maskPlaceholder={"СССС НННННН"}
                        mask={PASSPORT_MASK}
                        placeholder='СССС НННННН'
                        label='Серия и номер паспорта' />
                    <InputField
                        value={text_fields.passport_issue_date}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "passport_issue_date", val: e.target.value }))}
                        maskPlaceholder={"ДД.ММ.ГГГГ"}
                        mask={DATE_MASK}
                        placeholder={"ДД.ММ.ГГГГ"}
                        label='Когда выдан' />
                    <InputField
                        value={text_fields.passport_issued_by}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "passport_issued_by", val: e.target.value }))}
                        placeholder='Кем выдан паспорт'
                        label='Кем выдан' />
                    <InputField
                        value={text_fields.email}
                        onChange={e => dispatch(handleCreateProfileForm({ key: "email", val: e.target.value }))}
                        placeholder='E-mail'
                        label='E-mail' />
                </div>
                <div className="f-column gap-5">
                    <YellowButton disabled={disabled} onClick={handleCreateProfile} loading={sending}>Сохранить</YellowButton>
                    {
                        err ? <p className='fz-m c-error'>{err}</p> : null
                    }

                </div>

            </div>
        </BorderedPageLayout>
    )
}

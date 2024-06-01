import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'

export const InvitingForm = () => {
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
                    <InputField placeholder='Иванов' label='Фамилия' />
                    <InputField placeholder='Иван' label='Имя' />
                    <InputField placeholder='Иванович' label='Отчество' />
                    <InputField placeholder={"ДД.ММ.ГГГГ"} label='Дата рождения' />
                    <div className="f-column gap-15">
                        <p className='fz-m fw-5'>Пол</p>
                        <div className="f-row-betw gap-15">
                            <YellowButton className={"f-1"}>Мужчина</YellowButton>
                            <YellowButton isFilled={false} className={"f-1"}>Женщина</YellowButton>
                        </div>
                    </div>
                    <InputField placeholder='E-mail' label='E-mail' />
                </div>
                <YellowButton>Далее</YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

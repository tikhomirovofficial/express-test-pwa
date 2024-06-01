import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'

export const ProfileCreate = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title">Настройки</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-40">
                <h2 className="title">Укажите информацию о себе для пациентов</h2>
                <div className="f-column gap-30">
                    <InputField placeholder='Иванов' label='Фамилия' />
                    <InputField placeholder='Иван' label='Имя' />
                    <InputField placeholder='Иванович' label='Отчество' />
                    <InputField placeholder={"ДД.ММ.ГГГГ"} label='Дата рождения' />
                    <InputField placeholder='Место рождения' label='Место рождения' />
                    <div className="f-column gap-15">
                        <p className='fz-m fw-5'>Ваш пол</p>
                        <div className="f-row-betw gap-15">
                            <YellowButton className={"f-1"}>Мужчина</YellowButton>
                            <YellowButton isFilled={false} className={"f-1"}>Женщина</YellowButton>

                        </div>
                    </div>

                    <InputField placeholder='СССС НННННН' label='Серия и номер паспорта' />
                    <InputField placeholder={"ДД.ММ.ГГГГ"} label='Когда выдан' />
                    <InputField placeholder='Кем выдан паспорт' label='Кем выдан' />
                    <InputField placeholder='E-mail' label='E-mail' />
                </div>
                <YellowButton>Сохранить</YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

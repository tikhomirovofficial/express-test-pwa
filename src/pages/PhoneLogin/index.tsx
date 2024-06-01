import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'

export const PhoneLogin = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Вход</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-15">
                <InputField />
                <YellowButton>Продолжить</YellowButton>
            </div>
            <div>
                <p className={`fz-s`}>
                    Нажимая кнопку «Далее», вы соглашаетесь с <Link to={""} className={"c-yellow"}>пользовательским соглашением</Link>, подтверждаете, что ознакомились с политикой  <Link to={""} className={"c-yellow"}>конфиденциальности</Link>, а также даёте согласие на  <Link to={""} className={"c-yellow"}>обработку персональных данных</Link>
                </p>
            </div>
        </BorderedPageLayout>
    )
}

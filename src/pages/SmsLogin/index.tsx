import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'

export const SmsLogin = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title">Код из СМС</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-15">
                <div className="f-column gap-10">
                    <p className='fz-m fw-5'>Введите код из СМС +7 951 735-89-45</p>
                    <div className="f-row-betw gap-10">
                        <InputField className='txt-center' label={''} />
                        <InputField className='txt-center' label={''} />
                        <InputField className='txt-center' label={''} />
                        <InputField className='txt-center' label={''} />
                    </div>
                </div>

                <YellowButton>Отправить код еще раз</YellowButton>
            </div>
            <div>
                <p className={`fz-s`}>
                    Нажимая кнопку «Далее», вы соглашаетесь с <Link to={""} className={"c-yellow"}>пользовательским соглашением</Link>, подтверждаете, что ознакомились с политикой  <Link to={""} className={"c-yellow"}>конфиденциальности</Link>, а также даёте согласие на  <Link to={""} className={"c-yellow"}>обработку персональных данных</Link>
                </p>
            </div>
        </BorderedPageLayout>
    )
}

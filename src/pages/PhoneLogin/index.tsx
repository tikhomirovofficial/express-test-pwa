import React, { useEffect } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setAlreadyBeen } from '../../features/access/accessSlice'
import { sendAuthPhone, resetLoginPhoneStatus, setCodeIsFreezed, setCodeFreezedSecs, handleLoginForm } from '../../features/login/loginSlice'
import { extractDigits } from '../../utils/normalizePhone'

export const PhoneLogin = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { auth } = useAppSelector(state => state.login)
    const disabledBtn = auth.form.phone.length < 11

    const handleSendPhone = () => {
        dispatch(sendAuthPhone({ username: auth.form.phone }))
    }

    useEffect(() => {
        if (auth.success.phone) {
            navigate("/login/sms")
            dispatch(resetLoginPhoneStatus())
            dispatch(setCodeIsFreezed(true))
            dispatch(setCodeFreezedSecs(5))
        }
    }, [auth.success.phone])

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
                <InputField
                    onChange={(e) => {
                        const maskedVal = e.target.value
                        dispatch(handleLoginForm({ key: "maskedPhone", val: maskedVal }))
                        dispatch(handleLoginForm({ key: "phone", val: extractDigits(maskedVal) }))
                    }}
                    value={auth.form.maskedPhone}
                    error={auth.errors.phone}
                    mask='+7(999)999-99-99'
                    label='Введите номер телефона, чтобы войти'
                />
                <YellowButton
                    loading={auth.loading}
                    onClick={handleSendPhone}
                    disabled={disabledBtn}>Продолжить</YellowButton>
            </div>
            <div>
                <p className={`fz-s`}>
                    Нажимая кнопку «Далее», вы соглашаетесь с <Link to={""} className={"c-yellow"}>пользовательским соглашением</Link>, подтверждаете, что ознакомились с политикой  <Link to={""} className={"c-yellow"}>конфиденциальности</Link>, а также даёте согласие на  <Link to={""} className={"c-yellow"}>обработку персональных данных</Link>
                </p>
            </div>
        </BorderedPageLayout>
    )
}

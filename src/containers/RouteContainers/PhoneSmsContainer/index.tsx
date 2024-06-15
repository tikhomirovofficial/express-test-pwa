import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { Orders } from '../../../pages/Orders'
import { DocumentAccept } from '../../../pages/DocumentAccept'
import { PhoneLogin } from '../../../pages/PhoneLogin'
import { SmsLogin } from '../../../pages/SmsLogin'

export const PhoneSmsContainer = () => {
    const { phone } = useAppSelector(state => state.login.auth.form)
    return (
        <ConditionContainer
            val={phone.length === 11}
            FirstComponent={SmsLogin}
            SecondComponent={() => (
                <Navigate to={"/login/phone"} />
            )}
        />
    )
}

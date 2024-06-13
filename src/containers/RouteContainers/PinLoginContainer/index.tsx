import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { PinLogin } from '../../../pages/Pin/PinLogin'

export const PinLoginContainer = () => {
    const { pin } = useAppSelector(state => state.access)
    return (
        <ConditionContainer
            val={pin.exists}
            FirstComponent={PinLogin}
            SecondComponent={() => (
                <Navigate to={"/login/pin/create"} />
            )}
        />
    )
}

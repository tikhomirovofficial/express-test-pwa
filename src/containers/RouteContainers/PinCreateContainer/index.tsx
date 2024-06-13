import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'

export const PinCreateContainer = () => {
    const { pin } = useAppSelector(state => state.access)
    return (
        <ConditionContainer
            val={!pin.exists}
            FirstComponent={PinCreate}
            SecondComponent={() => (
                <Navigate to={"/login/pin/login"} />
            )}
        />
    )
}

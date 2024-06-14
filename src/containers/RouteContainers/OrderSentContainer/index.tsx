import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { OrderSent } from '../../../pages/Informational/OrderSent'

export const OrderSentContainer = () => {
    const { success } = useAppSelector(state => state.order)
    return (
        <ConditionContainer
            val={success}
            FirstComponent={OrderSent}
            SecondComponent={() => (
                <Navigate to={"/"} />
            )}
        />
    )
}

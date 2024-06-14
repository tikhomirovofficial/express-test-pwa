import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { Orders } from '../../../pages/Orders'
import { InvitingForm } from '../../../pages/InvitingForm'

export const InvitingCreateContainer = () => {
    const { val } = useAppSelector(state => state.inviting.already_exists)
    return (
        <ConditionContainer
            val={val === false}
            FirstComponent={InvitingForm}
            SecondComponent={() => (
                <Navigate to={"/inviting/phone"} />
            )}
        />
    )
}

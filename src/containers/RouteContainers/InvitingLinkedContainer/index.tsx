import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { Orders } from '../../../pages/Orders'
import { InvitingForm } from '../../../pages/InvitingForm'
import { PatientPinned } from '../../../pages/Informational/PatientPinned'

export const InvitingLinkedContainer = () => {
    const { val } = useAppSelector(state => state.inviting.already_exists)
    return (
        <ConditionContainer
            val={val}
            FirstComponent={PatientPinned}
            SecondComponent={() => (
                <Navigate to={"/inviting/phone"} />
            )}
        />
    )
}

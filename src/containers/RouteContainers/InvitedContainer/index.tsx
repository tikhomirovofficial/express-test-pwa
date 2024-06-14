import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { Orders } from '../../../pages/Orders'
import { InvitingForm } from '../../../pages/InvitingForm'
import { PatientPinned } from '../../../pages/Informational/PatientPinned'
import { PatientInvited } from '../../../pages/Informational/PatientInvited'

export const InvitedContainer = () => {
    const { success } = useAppSelector(state => state.inviting.form)
    return (
        <ConditionContainer
            val={success}
            FirstComponent={PatientInvited}
            SecondComponent={() => (
                <Navigate to={"/inviting/phone"} />
            )}
        />
    )
}

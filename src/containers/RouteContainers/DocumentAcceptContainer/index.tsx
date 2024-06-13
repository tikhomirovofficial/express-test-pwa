import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { Orders } from '../../../pages/Orders'
import { DocumentAccept } from '../../../pages/DocumentAccept'

export const DocumentAcceptContainer = () => {
    const { has_docs } = useAppSelector(state => state.profile)
    return (
        <ConditionContainer
            val={!has_docs}
            FirstComponent={DocumentAccept}
            SecondComponent={() => (
                <Navigate to={"/"} />
            )}
        />
    )
}

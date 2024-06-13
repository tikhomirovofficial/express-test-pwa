import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { Orders } from '../../../pages/Orders'

export const ProfileContainer = () => {
    const { has_docs } = useAppSelector(state => state.profile)
    return (
        <ConditionContainer
            val={has_docs}
            FirstComponent={Orders}
            SecondComponent={() => (
                <Navigate to={"/register/docs"} />
            )}
        />
    )
}

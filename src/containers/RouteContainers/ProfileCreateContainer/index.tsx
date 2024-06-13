import React from 'react'
import { ConditionContainer } from '../../ConditionContainer'
import { useAppSelector } from '../../../app/hooks'
import { PinCreate } from '../../../pages/Pin/PinCreate'
import { Navigate } from 'react-router-dom'
import { PinLogin } from '../../../pages/Pin/PinLogin'
import { ProfileCreate } from '../../../pages/ProfileCreate'

export const ProfileCreateContainer = () => {
    const { has_profile } = useAppSelector(state => state.profile)
    return (
        <ConditionContainer
            val={has_profile === false}
            FirstComponent={ProfileCreate}
            SecondComponent={() => (
                <Navigate to={"/"} />
            )}
        />
    )
}

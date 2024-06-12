import React, { FC } from 'react'
import { HasNodeChildren } from '../../types/common.types'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'

export const FirstConnectContainer: FC<HasNodeChildren> = ({ children }) => {
    const { alreadyBeen } = useAppSelector(state => state.access)

    if (!alreadyBeen.valid) {
        return <Navigate to={"/welcome-patients"} />
    }
    return <>{children}</>
}

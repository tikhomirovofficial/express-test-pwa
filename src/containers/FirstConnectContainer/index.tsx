import React, { FC } from 'react'
import { HasNodeChildren } from '../../types/common.types'
import { Navigate } from 'react-router-dom'

export const FirstConnectContainer: FC<HasNodeChildren> = ({ children }) => {
    const isFirstConnect = false
    if (isFirstConnect) {
        return <Navigate to={"/welcome-patients"} />
    }
    return <>{children}</>
}

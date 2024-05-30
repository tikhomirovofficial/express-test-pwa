import React, { FC } from 'react'
import { HasNodeChildren } from '../../types/common.types'

export const AppContainer: FC<HasNodeChildren> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

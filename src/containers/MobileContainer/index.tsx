import React, { FC } from 'react'
import { MIN_MOBILE_SCREEN_WIDTH } from '../../config/main'
import { HasNodeChildren } from '../../types/common.types'

const screenWidth = window.screen.width

export const MobileContainer: FC<HasNodeChildren> = ({ children }) => {
    if (screenWidth > MIN_MOBILE_SCREEN_WIDTH) {
        return <div className={"h-100v w-100w f-c-col pd-20 txt-center"}>
            Приложение работает только на мобильных устройствах.
        </div>
    }
    return <>
        {children}
    </>
}

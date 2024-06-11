import React, { FC, useState } from 'react'
import { BorderedPageLayout } from '../../pages/BorderedPageLayout'
import styles from './modal.module.scss'
import { PatientItem } from '../ListItems/PatientItem'
import { useTransition, animated } from '@react-spring/web'
import { HasNodeChildren } from '../../types/common.types'

export type ModalProps = {
    opened: boolean,
    level?: number
}
export type ModalContentProps = {
    handleModal?: () => any,
    level?: number
}
export const Modal: FC<HasNodeChildren & ModalProps & ModalContentProps> = ({ children, opened, handleModal }) => {
    const modalTransitions = useTransition(opened, {
        from: { y: 1000, x: 0 },
        enter: { y: 0, x: 0 },
        leave: { y: 1000, x: 0 }
    })
    const bgShadowTransitions = useTransition(opened, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    })
    return (
        <>
            {
                bgShadowTransitions((style, opened) => (
                    opened ?
                        <animated.div style={style} className={`h-100p w-100p   ${styles.bgShadow} ${styles.bgShadowVisible}`}></animated.div>
                        : null
                ))
            }
            {
                modalTransitions((style, opened) => (
                    opened ?
                        <animated.div style={style} onClick={handleModal} className={`h-100p w-100v p-abs  ${styles.modal}`}>
                            {children}
                        </animated.div> : null
                ))
            }
        </>
    )
}

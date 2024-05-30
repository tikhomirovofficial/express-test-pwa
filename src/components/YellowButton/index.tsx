import React, { FC } from 'react'
import { HasClassName, HasNodeChildren } from '../../types/common.types'
import styles from './yellowButton.module.scss'

export const YellowButton: FC<HasNodeChildren & HasClassName> = ({children, className}) => {
  return (
    <button className={`w-100p pd-15 f-c-col ${styles.button} ${className || ""}`}>{children}</button>
  )
}

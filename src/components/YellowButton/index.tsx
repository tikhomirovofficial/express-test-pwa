import React, { FC } from 'react'
import { HasClassName, HasNodeChildren } from '../../types/common.types'
import styles from './yellowButton.module.scss'

type YellowButtonProps = {
  isFilled?: boolean
} & HasNodeChildren & HasClassName

export const YellowButton: FC<YellowButtonProps> = ({ children, className, isFilled = true }) => {

  return (
    <button className={`w-100p f-c-col ${isFilled ? styles.buttonYellow : styles.buttonUnfilled} ${styles.button} ${className || ""}`}>{children}</button>
  )
}

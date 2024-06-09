import React, { FC } from 'react'
import { HasClassName, HasNodeChildren } from '../../types/common.types'
import styles from './yellowButton.module.scss'

type YellowButtonProps = {
  isFilled?: boolean,
  onClick?: () => any
} & HasNodeChildren & HasClassName

export const YellowButton: FC<YellowButtonProps> = ({ children, className, isFilled = true, onClick }) => {

  return (
    <button onClick={onClick} className={`w-100p f-c-col ${isFilled ? styles.buttonYellow : styles.buttonUnfilled} ${styles.button} ${className || ""}`}>{children}</button>
  )
}

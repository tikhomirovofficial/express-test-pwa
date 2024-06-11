import React, { FC } from 'react'
import { HasClassName, HasNodeChildren } from '../../types/common.types'
import styles from './yellowButton.module.scss'
import Loader from '../Preloader'

type YellowButtonProps = {
  isFilled?: boolean,
  loading?: boolean,
  disabled?: boolean,
  onClick?: () => any
} & HasNodeChildren & HasClassName

export const YellowButton: FC<YellowButtonProps> = ({ children, className, isFilled = true, onClick, loading = false, disabled = false }) => {

  return (
    <button disabled={disabled || loading} onClick={onClick} className={`w-100p f-c-col ${isFilled ? styles.buttonYellow : styles.buttonUnfilled} ${styles.button} ${className || ""}`}>
      {
        !loading ?
          children :
          <Loader fill='black' height={19} />
      }
    </button>
  )
}

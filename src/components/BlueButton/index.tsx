import React, { FC } from 'react'
import { HasClassName, HasNodeChildren } from '../../types/common.types'
import styles from './blueButton.module.scss'
import Loader from '../Preloader'

type BlueButtonProps = {
  loading?: boolean,
  disabled?: boolean,
  onClick?: () => any
} & HasNodeChildren & HasClassName

export const BlueButton: FC<BlueButtonProps> = ({ children, className, onClick, loading = false, disabled = false }) => {

  return (
    <button disabled={disabled || loading} onClick={onClick} className={`w-100p f-c-col ${styles.buttonBlue} ${styles.button} ${className || ""}`}>
      {
        !loading ?
          children :
          <Loader fill='black' height={19} />
      }
    </button>
  )
}

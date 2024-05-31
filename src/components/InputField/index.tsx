import React, { FC } from 'react'
import styles from './inputField.module.scss'
import { HasClassName } from '../../types/common.types'

type InputField = {
    label?: string
}
export const InputField: FC<InputField & HasClassName> = ({ label, className }) => {
    return (
        <div className={`f-column gap-10`}>
            {
                label ? <label htmlFor="" className='fz-m fw-5'>Введите номер телефона, чтобы войти</label> : null
            }
            <div className={`pd-20 ${styles.block}`}>
                <input className={`w-100p ${className || ""}`} type="text" placeholder='+7' />
            </div>
        </div>
    )
}

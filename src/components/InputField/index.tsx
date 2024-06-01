import React, { FC } from 'react'
import styles from './inputField.module.scss'
import { HasClassName } from '../../types/common.types'

type InputField = {
    label?: string,
    placeholder?: string
}
export const InputField: FC<InputField & HasClassName> = ({ label, className, placeholder }) => {
    return (
        <div className={`f-column gap-10`}>
            {
                label ? <label htmlFor="" className='fz-m fw-5'>{label}</label> : null
            }
            <div className={`pd-20 ${styles.block}`}>
                <input className={`w-100p fz-l ${className || ""}`} type="text" placeholder={placeholder} />
            </div>
        </div>
    )
}

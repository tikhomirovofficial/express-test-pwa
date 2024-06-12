import React, { FC, useState } from 'react'
import styles from './inputField.module.scss'
import { HasClassName } from '../../types/common.types'
import InputMask from 'react-input-mask';

type InputField = {
    label?: string,
    mask?: string,
    maskPlaceholder?: string,
    placeholder?: string
}
export const InputField: FC<InputField & HasClassName> = ({ label, className, placeholder, mask, maskPlaceholder }) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className={`f-column gap-10`}>
            {
                label ? <label htmlFor="" className='fz-m fw-5'>{label}</label> : null
            }
            <div className={`pd-20 ${styles.block} ${focused ? styles.blockFocused : ""}`}>
                {
                    mask ? <InputMask maskPlaceholder={maskPlaceholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={`w-100p fz-l ${className || ""}`} type="text" placeholder={placeholder} mask={mask} onChange={() => { }} />
                        : <input onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className={`w-100p fz-l ${className || ""}`} type="text" placeholder={placeholder} />
                }

            </div>
        </div>
    )
}

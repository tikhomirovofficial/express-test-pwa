import React, { ChangeEvent, FC, HTMLInputTypeAttribute, KeyboardEventHandler, useState } from 'react'
import styles from './inputField.module.scss'
import { HasClassName } from '../../types/common.types'
import InputMask from 'react-input-mask';

type InputField = {
    label?: string,
    mask?: string,

    error?: string
    refInput?: (el: HTMLInputElement | null) => void; // Тип функции для передачи ref
    value?: string,
    maxLength?: number,
    maskPlaceholder?: string,
    inputType?: HTMLInputTypeAttribute,
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    placeholder?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any
}
export const InputField: FC<InputField & HasClassName> = ({ label, className, placeholder, inputType, mask, maskPlaceholder, error, onChange, value, maxLength, onKeyPress, refInput }) => {
    const [focused, setFocused] = useState(false)

    return (
        <div className={`f-column gap-10`}>
            {
                label ?
                    <label
                        htmlFor=""
                        className={`fz-m fw-5 ${error ? "c-error" : ""}`}>{error || label}</label> : null
            }
            <div className={`pd-20 ${styles.block} ${focused ? styles.blockFocused : ""} ${error ? styles.blockError : ""}`}>
                {
                    mask ?
                        <InputMask
                            maskPlaceholder={maskPlaceholder}
                            value={value}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            className={`w-100p fz-l ${className || ""} ${error ? "c-error" : ""}`}
                            type={inputType}
                            placeholder={placeholder}
                            mask={mask}
                            onChange={onChange} />
                        :
                        <input
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            value={value}
                            ref={refInput}
                            onKeyDown={onKeyPress}
                            maxLength={maxLength}
                            onChange={onChange}
                            className={`w-100p fz-l ${className || ""} ${error ? "c-error" : ""}`}
                            type={inputType}
                            placeholder={placeholder} />
                }

            </div>
        </div>
    )
}

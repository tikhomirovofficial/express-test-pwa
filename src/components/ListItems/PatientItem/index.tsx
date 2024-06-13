import React, { FC, useCallback } from 'react'
import { AvatarIcon, CheckedCircle, UncheckedCircle } from '../../../icons'
import { PatientApi } from '../../../types/entities/patients.types'

type PatientItemProps = {
    selected?: boolean,
    isRadio?: boolean,
    neededBottomBorder?: boolean
    bottomText?: string,
    handlePress?: () => any,
} & PatientApi

export const PatientItem: FC<PatientItemProps> = (props) => {
    const GetSelectedIcon = useCallback(() => {
        if (props.selected !== undefined) {
            if (!props.selected) {
                return <UncheckedCircle />
            }
            return <CheckedCircle />
        }
        return null
    }, [props.selected])
    return (
        <div onClick={props.handlePress} className={`patient-item pd-10-0 ${props.neededBottomBorder ? "border-bottom" : ""} f-row-betw gap-15`}>
            <AvatarIcon />
            <div className="f-column f-1">
                <p className='c-dark fz-m fw-6'>{props.first_name} {props.last_name}</p>
                <p className='c-lg fz-s'>{props.bottomText}</p>
            </div>
            {

            }
            <div className="f-c-col">
                <GetSelectedIcon />
            </div>
        </div>
    )
}

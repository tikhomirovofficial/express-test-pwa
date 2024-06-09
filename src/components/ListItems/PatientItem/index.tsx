import React, { FC, useCallback } from 'react'
import { AvatarIcon, CheckedCircle, UncheckedCircle } from '../../../icons'

type PatientItemProps = {
    selected?: boolean,
    isRadio?: boolean,
    neededBottomBorder?: boolean
    bottomText?: string,
    handlePress?: () => any,
}

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
        <div className="patient-item pd-10-0 border-bottom f-row-betw gap-15">
            <AvatarIcon />
            <div className="f-column f-1">
                <p className='c-dark fz-m fw-6'>Ахмет Ахматович</p>
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

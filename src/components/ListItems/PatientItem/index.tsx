import React from 'react'
import { AvatarIcon, CheckedCircle } from '../../../icons'


export const PatientItem = () => {
    return (
        <div className="patient-item pd-10-0 border-bottom f-row-betw gap-15">
            <AvatarIcon />
            <div className="f-column f-1">
                <p className='c-dark fz-m fw-6'>Ахмет Ахматович</p>
                <p className='c-lg fz-s'>+7 (951) 735-89-45</p>
            </div>
            <div className="f-c-col">
                <CheckedCircle />
            </div>
        </div>
    )
}

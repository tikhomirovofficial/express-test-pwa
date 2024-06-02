import React from 'react'
import { AddIcon, AvatarIcon, CheckedCircle } from '../../../icons'


export const AnalysisItem = () => {
    return (
        <div className="analysis-item pd-10-0 border-bottom f-row-betw gap-15">
            <div className="f-column f-1">
                <p className='c-dark fz-m fw-4'>Индекс ROMA (включает исследования СА 125 и НЕ-4) (П)</p>
                <p className='c-dark fz-m fw-7'>773 ₽</p>
            </div>
            <div className="f-c-col">
                <AddIcon />
            </div>
        </div>
    )
}

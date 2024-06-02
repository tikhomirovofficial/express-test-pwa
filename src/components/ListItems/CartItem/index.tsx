import React from 'react'
import { AddIcon, AvatarIcon, CheckedCircle, RemoveIcon } from '../../../icons'


export const CartItem = () => {
    return (
        <div className="analysis-item pd-10-0 border-bottom f-row-betw gap-15">
            <div className="f-column f-1">
                <p className='c-dark fz-m fw-4'>Индекс ROMA (включает исследования СА 125 и НЕ-4) (П)</p>
            </div>
            <div className="f-c-col">
                <RemoveIcon />
            </div>
        </div>
    )
}

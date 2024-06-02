import React from 'react'
import { AddIcon, ArrowRight, AvatarIcon, CheckedCircle } from '../../../icons'


export const CategoryItem = () => {
    return (
        <div className="category-item f-row-betw gap-15">
            <div className="d-f gap-5">
                <p className='c-dark fz-m fw-5'>Анализ на микроэлементы, витамины, кислоты, аминокислоты</p>
                <p className='c-lg fz-m fw-5'>
                    156
                </p>
            </div>
            <div className="f-c-col">
                <ArrowRight />
            </div>
        </div>
    )
}

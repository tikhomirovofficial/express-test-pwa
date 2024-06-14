import React, { FC } from 'react'
import { AddIcon, ArrowRight, AvatarIcon, CheckedCircle } from '../../../icons'
import { CategoryApi } from '../../../types/entities/categories.types'
import { setCurrentCategory } from '../../../features/order/orderSlice'
import { useAppDispatch } from '../../../app/hooks'

type CategoryItemProps = {
    category: CategoryApi,
    clickHandle: () => void
}
export const CategoryItem: FC<CategoryItemProps> = ({ category, clickHandle }) => {
    const dispatch = useAppDispatch()

    const toProducts = (categoryId: number) => {
        dispatch(setCurrentCategory(categoryId))
        clickHandle()
    }
    return (
        <div key={category.id} onClick={() => toProducts(category.id)} className="category-item f-row-betw gap-15">
            <div className="d-f gap-5">
                <p className='c-dark fz-m fw-5'>{category.name}</p>
                {/* <p className='c-lg fz-m fw-5'>
                    156
                </p> */}
            </div>
            <div className="f-c-col">
                <ArrowRight />
            </div>
        </div>
    )
}

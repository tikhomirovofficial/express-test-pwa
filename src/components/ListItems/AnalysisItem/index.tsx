import React, { FC, useCallback } from 'react'
import { AddIcon, AvatarIcon, CheckedCircle, RemoveIcon } from '../../../icons'
import { AnalysisApi } from '../../../types/entities/analysis.types'
import { useAppDispatch } from '../../../app/hooks'
import { addToCart, CartItemType, removeProduct } from '../../../features/cart/cartSlice'

type AnalysisItemProps = {
    product: AnalysisApi,
    index: number,
    isInCart: boolean,
    clickHandle?: () => void
}
export const AnalysisItem: FC<AnalysisItemProps> = ({ product, index, isInCart, clickHandle }) => {
    const dispatch = useAppDispatch()

    const addProduct = useCallback(() => {
        dispatch(addToCart({ ...product as CartItemType }))
    }, [dispatch, product]);

    const removeItem = useCallback(() => {
        dispatch(removeProduct(product.id))
    }, [dispatch, product]);

    return (
        <div onClick={clickHandle} key={product.id} className="analysis-item pd-10-0 border-bottom f-row-betw gap-15">
            <div className="f-column f-1">
                <p className='c-dark fz-m fw-4'>{product.name}</p>
                <p className='c-dark fz-m fw-7'>{product.cost} ₽</p>
            </div>
            <div onClick={e => e.stopPropagation()}>
                <div onClick={!isInCart ? addProduct : removeItem} className="f-c-col">
                    {isInCart ? <RemoveIcon /> : <AddIcon />}
                </div>
            </div>

        </div>
    )
}

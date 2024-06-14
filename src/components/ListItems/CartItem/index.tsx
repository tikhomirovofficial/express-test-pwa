import React, { FC } from 'react'
import { AddIcon, AvatarIcon, CheckedCircle, RemoveIcon } from '../../../icons'
import { CartItemType } from '../../../features/cart/cartSlice'

type CartItemProps = {
    item: CartItemType,
    removeItem?: () => void
}

export const CartItem: FC<CartItemProps> = ({ item, removeItem }) => {
    return (
        <div className="analysis-item pd-10-0 border-bottom f-row-betw gap-15">
            <div className="f-column f-1">
                <p className='c-dark fz-m fw-4'>{item.name}</p>
                <p className='c-dark fz-m fw-7'>{item.cost} ₽</p>
            </div>
            <div onClick={removeItem} className="f-c-col">
                <RemoveIcon />
            </div>
        </div>
    )
}

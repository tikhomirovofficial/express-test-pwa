import React, { FC } from 'react'
import styles from './orderItem.module.scss'
import { HasId } from '../../types/common.types'

type OrderItemProps = {
    rightTopText: string,
    leftBottomText: string,
    rightBottomText: string
} & HasId
export const OrderItem: FC<OrderItemProps> = ({ rightBottomText, rightTopText, leftBottomText, id }) => {
    return (
        <div className={`f-column gap-10 ${styles.orderItem} border-bottom`}>
            <div className="f-row-betw">
                <div className="d-f al-center gap-10">
                    <p className='fz-m c-dark fw-5'>Заказ №</p>
                    <div className="grayInfo fz-s">{id}</div>
                </div>
                <p className='fz-m c-dark fw-6'>{rightTopText}</p>
            </div>
            <div className="f-row-betw">
                <p className='fz-s c-lg'>{leftBottomText}</p>
                <p className='fz-s c-lg'>{rightBottomText}</p>
            </div>
        </div>
    )
}

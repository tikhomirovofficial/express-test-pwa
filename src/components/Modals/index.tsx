import React from 'react'
import { OrderModal } from './OrderModal'
import { useAppSelector } from '../../app/hooks'

export const Modals = () => {
    const {
        orderInfoModal
    } = useAppSelector(state => state.modals)
    return (
        <>
            <OrderModal opened={orderInfoModal} />
        </>
    )
}

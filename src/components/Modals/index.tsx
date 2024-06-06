import React from 'react'
import { OrderModal } from './OrderModal'
import { useAppSelector } from '../../app/hooks'
import { ProfileModal } from './ProfileModal'
import { FinancesModal } from './FinancesModal'

export const Modals = () => {
    const {
        orderInfoModal,
        profileEditModal,
        ordersFinancesModal
    } = useAppSelector(state => state.modals)
    return (
        <>
            <OrderModal opened={orderInfoModal} />
            <ProfileModal opened={profileEditModal} />
            <FinancesModal opened={ordersFinancesModal} />
        </>
    )
}

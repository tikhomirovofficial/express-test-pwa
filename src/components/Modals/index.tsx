import React from 'react'
import { OrderModal } from './OrderModal'
import { useAppSelector } from '../../app/hooks'
import { ProfileModal } from './ProfileModal'
import { FinancesModal } from './FinancesModal'
import { PatientsModal } from './PatientsModal'
import { PatientModal } from './PatientModal'
import { AboutAppModal } from './AboutAppModal'
import { ProductModal } from './ProductModal'
import { BonusesModal } from './BonusesModal'

export const Modals = () => {
    const {
        orderInfoModal,
        patientsModal,
        profileEditModal,
        patientInfoModal,
        ordersFinancesModal,
        aboutAppModal,
        analysisInfoModal,
        patientOrderInfoModal,
        bonusesModal
    } = useAppSelector(state => state.modals)
    return (
        <>
            <OrderModal level={orderInfoModal.level} opened={orderInfoModal.opened} />
            <ProfileModal level={profileEditModal.level} opened={profileEditModal.opened} />
            <FinancesModal level={ordersFinancesModal.level} opened={ordersFinancesModal.opened} />
            <PatientsModal level={patientsModal.level} opened={patientsModal.opened} />
            <PatientModal level={patientInfoModal.level} opened={patientInfoModal.opened} />
            <AboutAppModal level={aboutAppModal.level} opened={aboutAppModal.opened} />
            <ProductModal level={analysisInfoModal.level} opened={analysisInfoModal.opened} />
            <OrderModal level={patientOrderInfoModal.level} opened={patientOrderInfoModal.opened} />
            <BonusesModal level={bonusesModal.level} opened={bonusesModal.opened} />
        </>
    )
}

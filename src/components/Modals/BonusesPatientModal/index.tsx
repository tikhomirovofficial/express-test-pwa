import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { BonusesPatientModalContent } from './content'
import { useAppDispatch } from '../../../app/hooks'
import { handleBonusesBottomSheet, handleBonusesModal, handleOrderInfoModal, handleOrdersFinancesModal, handleProfileEditModal } from '../../../features/modals/modalsSlice'


export const BonusesPatientModal: FC<ModalProps> = ({ opened, level }) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handleBonusesBottomSheet())
    }
    return (
        <Modal opened={opened}>
            <BonusesPatientModalContent level={level} handleModal={handleModal} />
        </Modal>
    )
}

import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { BonusesModalContent } from './content'
import { useAppDispatch } from '../../../app/hooks'
import { handleBonusesModal, handleOrderInfoModal, handleOrdersFinancesModal, handleProfileEditModal } from '../../../features/modals/modalsSlice'


export const BonusesModal: FC<ModalProps> = ({ opened, level }) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handleBonusesModal())
    }
    return (
        <Modal opened={opened}>
            <BonusesModalContent level={level} handleModal={handleModal} />
        </Modal>
    )
}

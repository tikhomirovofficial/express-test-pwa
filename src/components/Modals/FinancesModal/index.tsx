import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { FinancesModalContent } from './content'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal, handleOrdersFinancesModal, handleProfileEditModal } from '../../../features/modals/modalsSlice'


export const FinancesModal: FC<ModalProps> = ({ opened, level}) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handleOrdersFinancesModal())
    }
    return (
        <Modal opened={opened}>
            <FinancesModalContent  level={level} handleModal={handleModal} />
        </Modal>
    )
}

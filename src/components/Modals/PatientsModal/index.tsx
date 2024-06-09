import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { PatientsModalContent } from './content'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal, handleOrdersFinancesModal, handlePatientsModal, handleProfileEditModal } from '../../../features/modals/modalsSlice'


export const PatientsModal: FC<ModalProps> = ({ opened, level}) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handlePatientsModal())
    }
    return (
        <Modal opened={opened}>
            <PatientsModalContent  level={level} handleModal={handleModal} />
        </Modal>
    )
}

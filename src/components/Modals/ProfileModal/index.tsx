import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { ProfileModalContent } from './content'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal, handleProfileEditModal } from '../../../features/modals/modalsSlice'


export const ProfileModal: FC<ModalProps> = ({ opened }) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handleProfileEditModal())
    }
    return (
        <Modal opened={opened}>
            <ProfileModalContent handleModal={handleModal} />
        </Modal>
    )
}
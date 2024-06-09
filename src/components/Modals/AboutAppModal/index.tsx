import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { useAppDispatch } from '../../../app/hooks'
import { handleAboutModal, handleOrderInfoModal, handlePatientInfoModal } from '../../../features/modals/modalsSlice'
import { PatientsModalContent } from '../PatientsModal/content'
import { AboutAppModalContent } from './content'


export const AboutAppModal: FC<ModalProps> = ({ opened, level }) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handleAboutModal())
    }
    return (
        <Modal  opened={opened}>
            <AboutAppModalContent level={level} handleModal={handleModal} />
        </Modal>
    )
}

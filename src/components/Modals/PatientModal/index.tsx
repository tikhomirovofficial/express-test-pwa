import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal, handlePatientInfoModal } from '../../../features/modals/modalsSlice'
import { PatientsModalContent } from '../PatientsModal/content'
import { PatientModalContent } from './content'


export const PatientModal: FC<ModalProps> = ({ opened, level}) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handlePatientInfoModal())
    }
    return (
        <Modal  opened={opened}>
            <PatientModalContent level={level} handleModal={handleModal} />
        </Modal>
    )
}

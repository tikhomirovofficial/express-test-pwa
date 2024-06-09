import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { useAppDispatch } from '../../../app/hooks'
import { handleAboutModal, handleAnalysisInfoModal, handleOrderInfoModal, handlePatientInfoModal } from '../../../features/modals/modalsSlice'
import { PatientsModalContent } from '../PatientsModal/content'
import { ProductModalContent } from './content'


export const ProductModal: FC<ModalProps> = ({ opened, level }) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handleAnalysisInfoModal())
    }
    return (
        <Modal  opened={opened}>
            <ProductModalContent level={level} handleModal={handleModal} />
        </Modal>
    )
}

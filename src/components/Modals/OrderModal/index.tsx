import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { OrderModalContent } from './content'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal, handlePatientOrderInfoModal } from '../../../features/modals/modalsSlice'


export const OrderModal: FC<ModalProps> = ({ opened, level }) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        level === 3 ? dispatch(handlePatientOrderInfoModal()) : dispatch(handleOrderInfoModal())
    }
    return (
        <Modal opened={opened}>
            <OrderModalContent level={level} handleModal={handleModal} />
        </Modal>
    )
}

import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { OrderModalContent } from './content'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'


export const OrderModal: FC<ModalProps> = ({ opened }) => {
    const dispatch = useAppDispatch()

    const handleModal = () => {
        dispatch(handleOrderInfoModal())
    }
    return (
        <Modal opened={opened}>
            <OrderModalContent handleModal={handleModal} />
        </Modal>
    )
}

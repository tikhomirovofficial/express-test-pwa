import React, { FC } from 'react'
import { Modal, ModalProps } from '../../Modal'
import { OrderModalContent } from './content'


export const OrderModal: FC<ModalProps> = ({ opened }) => {
    return (
        <Modal opened={opened}>
            <OrderModalContent />
        </Modal>
    )
}

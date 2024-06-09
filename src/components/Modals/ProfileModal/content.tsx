import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { InputField } from '../../InputField'
import { YellowButton } from '../../YellowButton'

export const ProfileModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Личные данные</p>
                <div className='f-025'></div>
            </div>
            <div className="f-column gap-30">
                <InputField placeholder='Иванов' label='Фамилия' />
                <InputField placeholder='Иван' label='Имя' />
                <InputField placeholder='Иванович' label='Отчество' />
                <div className="f-column gap-15">
                    <p className='fz-m fw-5'>Ваш пол</p>
                    <div className="f-row-betw gap-15">
                        <YellowButton className={"f-1"}>Мужчина</YellowButton>
                        <YellowButton isFilled={false} className={"f-1"}>Женщина</YellowButton>

                    </div>
                </div>
            </div>
            <YellowButton>Сохранить</YellowButton>

        </BorderedPageLayout>
    )
}

import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleOrderInfoModal, handleProfileEditModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { InputField } from '../../InputField'
import { YellowButton } from '../../YellowButton'
import { handleEditProfileGender, handleProfileForm, setDefaultProfileForm } from '../../../features/profile/profileSlice'
import { ProfileEditTextFields, ProfileData } from '../../../types/entities/user.types'

export const ProfileModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch()
    const { form, data } = useAppSelector(state => state.profile)

    const formAndDataEqual = Object.keys(form).every((key) => form[key as keyof ProfileEditTextFields] === data[key as keyof ProfileData])

    useEffect(() => {
        return () => {
            dispatch(setDefaultProfileForm())
        }
    }, [])

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
                <InputField
                    error={""}
                    value={form.last_name}
                    onChange={e => dispatch(handleProfileForm({ key: "last_name", val: e.target.value }))}
                    placeholder='Иванов'
                    label='Фамилия' />
                <InputField
                    error={""}
                    value={form.first_name}
                    onChange={e => dispatch(handleProfileForm({ key: "first_name", val: e.target.value }))}
                    placeholder='Иван'
                    label='Имя' />
                <InputField
                    value={form.subname}
                    onChange={e => dispatch(handleProfileForm({ key: "subname", val: e.target.value }))}
                    placeholder='Иванович'
                    label='Отчество' />
                <div className="f-column gap-15">
                    <p className='fz-m fw-5'>Ваш пол</p>
                    <div className="f-row-betw gap-15">
                        <YellowButton onClick={() => dispatch(handleEditProfileGender(true))} isFilled={form.gender} className={"f-1"}>Мужчина</YellowButton>
                        <YellowButton onClick={() => dispatch(handleEditProfileGender(false))} isFilled={!form.gender} className={"f-1"}>Женщина</YellowButton>
                    </div>
                </div>
            </div>
            {/* <YellowButton>Сохранить</YellowButton> */}

        </BorderedPageLayout>
    )
}

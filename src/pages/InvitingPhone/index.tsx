import React, { useEffect } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { checkPatientExists, handleCreateInvitingForm } from '../../features/inviting/invitingSlice'
import { extractDigits } from '../../utils/normalizePhone'

export const InvitingPhone = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { already_exists, form } = useAppSelector(state => state.inviting)
    const disabledBtn = form.text_fields.phone.includes("_") || form.text_fields.phone.length < 10

    const toBackScreen = () => {
        alert("go back")
    }

    const handleCheckExistsPatient = () => {
        dispatch(checkPatientExists({ phone: extractDigits(form.text_fields.phone) }))
    }

    useEffect(() => {
        if (already_exists.val === false) {
            navigate("/inviting/form")
            return
        }
        if (already_exists.val === true) {
            navigate("/patient-pinned")
        }
    }, [already_exists.val])


    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div>

                    </div>
                    <h2 className="title fw-6">Приглашение пациента</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-15">
                <InputField
                    error={already_exists.err}
                    value={form.text_fields.phone}
                    onChange={e => dispatch(handleCreateInvitingForm({ key: "phone", val: e.target.value }))}
                    mask='+7(999)999-99-99'
                    placeholder='+7'
                    label='Введите номер телефона пациента' />
                <YellowButton loading={already_exists.sending} onClick={handleCheckExistsPatient} disabled={disabledBtn}>Продолжить</YellowButton>
            </div>
            <div>
                <p className={`fz-s`}>
                    Нажимая кнопку «Далее», вы соглашаетесь с <Link to={""} className={"c-yellow"}>пользовательским соглашением</Link>, подтверждаете, что ознакомились с политикой  <Link to={""} className={"c-yellow"}>конфиденциальности</Link>, а также даёте согласие на  <Link to={""} className={"c-yellow"}>обработку персональных данных</Link>
                </p>
            </div>
        </BorderedPageLayout>
    )
}

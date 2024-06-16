import React, { useEffect, useState } from 'react'
import { YellowButton } from '../../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../../BorderedPageLayout'
import { InputField } from '../../../components/InputField'
import styles from '../pinCode.module.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { resetAcceptedErr, setAcceptedErr, setPinCodeAccepted } from '../../../features/access/accessSlice'
import { getPinCode } from '../../../utils/storePinCode'
import { ClearCloseIcon, BackSpaceIcon } from '../../../icons'
import { useLogout } from '../../../hooks/useLogout'

export const PinLogin = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const [pin, setPin] = useState<string[]>(["", "", "", ""])
    const { accepted: { error } } = useAppSelector(state => state.access)
    const logout = useLogout()

    const handlePin = (digit: string) => {
        setPin((prev) => {
            if (digit === "reset") {
                return ["", "", "", ""]
            }
            const filledCount = pin.filter(item => item !== "").length

            if (digit === "clear") {
                if (filledCount) {
                    prev[filledCount - 1] = ""
                    return [...prev]
                }
                return [...prev]
            }

            if (filledCount < pin.length) {
                prev[filledCount] = digit
                return [...prev]
            }
            return [...prev]
        })
    }

    useEffect(() => {
        if (pin.filter(item => item !== "").length === 4) {
            if (!error) {
                const pinStr = pin.join("")
                if (pinStr === getPinCode()) {
                    dispatch(setPinCodeAccepted(true))
                    navigate("/")
                    return
                }
                dispatch(setAcceptedErr("Неверный код!"))
            }
            return
        }
        if (error) {
            dispatch(resetAcceptedErr())
        }
    }, [pin, error])

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw gap-20"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Подтверждение входа</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-80">
                <div className="f-column gap-20">
                    <p className={`fz-m fw-5 txt-center ${error ? "c-error" : null}`}>{error || "Чтобы войти, введите пин-код"}</p>
                    <div className={`d-f al-center gap-15 jc-center ${error ? "pin-incorrect" : ""}`}>
                        {
                            pin.map(item => (
                                <div className={`pin-item ${item !== "" ? "pin-item-filled" : ""} `}></div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className={`${styles.btnsPanel} pd-0-50 f-column gap-30`}>
                <div className="f-column f-row-betw">
                    <div onClick={() => handlePin("1")} className="pin-btn f-c-col txt-center c-yellow">1</div>
                    <div onClick={() => handlePin("2")} className="pin-btn f-c-col txt-center c-yellow">2</div>
                    <div onClick={() => handlePin("3")} className="pin-btn f-c-col txt-center c-yellow">3</div>
                </div>
                <div className="f-column f-row-betw">
                    <div onClick={() => handlePin("4")} className="pin-btn f-c-col txt-center c-yellow">4</div>
                    <div onClick={() => handlePin("5")} className="pin-btn f-c-col txt-center c-yellow">5</div>
                    <div onClick={() => handlePin("6")} className="pin-btn f-c-col txt-center c-yellow">6</div>
                </div>
                <div className="f-column f-row-betw">
                    <div onClick={() => handlePin("7")} className="pin-btn f-c-col txt-center c-yellow">7</div>
                    <div onClick={() => handlePin("8")} className="pin-btn f-c-col txt-center c-yellow">8</div>
                    <div onClick={() => handlePin("9")} className="pin-btn f-c-col txt-center c-yellow">9</div>
                </div>
                <div className="f-column f-row-betw">
                    <div onClick={() => handlePin("reset")} className="pin-btn f-c-col txt-center c-yellow f-c-col">
                        <ClearCloseIcon />
                    </div>
                    <div onClick={() => handlePin("0")} className="pin-btn f-c-col txt-center c-yellow">0</div>
                    <div onClick={() => handlePin("clear")} className="pin-btn f-c-col txt-center c-yellow">
                        <BackSpaceIcon height={20} />
                    </div>
                </div>
                <div style={{ marginTop: 20 }} className="d-f jc-center">
                    <p onClick={logout} className="c-error fz-s">Выйти из аккаунта</p>
                </div>

            </div>
        </BorderedPageLayout>
    )
}

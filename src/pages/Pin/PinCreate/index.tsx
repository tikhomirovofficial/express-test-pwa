import React, { useEffect, useState } from 'react'
import { YellowButton } from '../../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../../BorderedPageLayout'
import { InputField } from '../../../components/InputField'
import styles from '../pinCode.module.scss'
import { BackSpaceIcon, ClearCloseIcon } from '../../../icons'
import { storePinCode } from '../../../utils/storePinCode'
import { useAppDispatch } from '../../../app/hooks'
import { setPinCodeAccepted, setPinCodeExists } from '../../../features/access/accessSlice'

export const PinCreate = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [pin, setPin] = useState<string[]>(["", "", "", ""])
    const [acceptPin, setAcceptPin] = useState<string[]>(["", "", "", ""])
    const [isAccepting, setIsAccepting] = useState(false)
    const [incorrectAccept, setIncorrectAccept] = useState("")

    const handlePin = (digit: string) => {
        if (isAccepting) {
            setAcceptPin((prev) => {
                const filledCount = acceptPin.filter(item => item !== "").length
                if (digit === "reset") {
                    if (filledCount) {
                        return ["", "", "", ""]
                    }
                    if (isAccepting) {
                        setIsAccepting(false)
                    }
                    return [...prev]
                }
                if (digit === "clear") {
                    if (filledCount) {
                        prev[filledCount - 1] = ""
                        return [...prev]
                    }
                    if (isAccepting) {
                        setIsAccepting(false)
                    }
                    return [...prev]
                }
                if (filledCount < pin.length) {
                    prev[filledCount] = digit
                    return [...prev]
                }
                return [...prev]
            })
            return;
        }
        setPin((prev) => {
            const filledCount = pin.filter(item => item !== "").length
            if (digit === "reset") {
                if (filledCount) {
                    return ["", "", "", ""]
                }
                if (isAccepting) {
                    setIsAccepting(false)
                }
                return [...prev]
            }
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
        if (pin.every(item => item !== "")) {
            setIsAccepting(true)
        }
    }, [pin])

    useEffect(() => {
        const lengthsEquals = pin.filter(item => item !== "").length === acceptPin.filter(item => item !== "").length && acceptPin.filter(item => item !== "").length === 4
        if (lengthsEquals) {
            const pinsEquals = pin.join(",") === acceptPin.join(",")
            if (!pinsEquals) {
                setIncorrectAccept("Пин-код не совпадает!")
                return;
            }
            storePinCode(pin.join(""))
            dispatch(setPinCodeExists(true))
            dispatch(setPinCodeAccepted(true))
            return;
        }
        setIncorrectAccept("")
    }, [acceptPin])

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw gap-20"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Придумайте пин-код</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-80">
                <div className="f-column gap-20">
                    <p className='fz-m fw-5 txt-center'>Для безопасного входа <br /> необходимо придумать код</p>
                    <div className="d-f al-center gap-15 jc-center">
                        {
                            pin.map(item => (
                                <div className={`pin-item ${item !== "" ? "pin-item-filled" : ""} `}></div>
                            ))
                        }
                    </div>
                </div>
                {
                    isAccepting ?
                        <div className="f-column gap-20">
                            <p className={`fz-m fw-5 txt-center ${incorrectAccept ? "c-error" : null}`}>{incorrectAccept || "Повторите код доступа"}</p>
                            <div className={`d-f al-center gap-15 jc-center ${incorrectAccept ? "pin-incorrect" : ""}`}>
                                {
                                    acceptPin.map(item => (
                                        <div className={`pin-item ${item !== "" ? "pin-item-filled" : ""}`}></div>
                                    ))
                                }
                            </div>
                        </div> : null
                }


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

            </div>
        </BorderedPageLayout>
    )
}

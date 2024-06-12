import React, { useEffect, useRef, useState } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { sendAuthPhone, setCodeIsFreezed, setCodeFreezedSecs, sendAuthCode, resetLoginCodeStatus } from '../../features/login/loginSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useInterval } from '../../hooks/useInterval'

export const SmsLogin = () => {
    const dispatch = useAppDispatch()
    const { auth } = useAppSelector(state => state.login)
    const [code, setCode] = useState<string[]>(["", "", "", ""])
    const [sended, setSended] = useState(false);
    const inputRefs = useRef<HTMLInputElement[] | null[]>([]);

    const handleNewCode = () => {
        if (!auth.code_options.is_freezed) {
            dispatch(sendAuthPhone({ username: auth.form.phone }))
            dispatch(setCodeIsFreezed(true))
            dispatch(setCodeFreezedSecs(5))
            setCode(["", "", "", ""])
            return;
        }
    }

    const handleBackspace = (index: number) => {
        if (index > 0 && code[index] === '') {
            const prevInput = inputRefs.current[index - 1];
            prevInput?.focus();
        }

        setCode(prevCode => {
            const newCode = [...prevCode];
            newCode[index] = '';
            return newCode;
        });
    };

    const handleSendCode = () => {
        dispatch(sendAuthCode({
            username: auth.form.phone,
            password: code.join("")
        }))
    }

    const handleCodeInput = (text: string, index: number) => {
        if (/^\d*$/.test(text) && text.length <= 1) {
            setCode(prevCode => {
                const newCode = [...prevCode];
                newCode[index] = text;
                console.log(inputRefs.current);

                if (text !== '' && index < inputRefs.current.length - 1) {
                    const nextInput = inputRefs.current[index + 1];


                    nextInput?.focus();
                } else if (text === '' && index > 0) {
                    const prevInput = inputRefs.current[index - 1];
                    prevInput?.focus();
                }

                return newCode;
            });
        }
    };

    useInterval(() => {
        if (auth.code_options.is_freezed && auth.code_options.freezed_sec > 0) {
            dispatch(setCodeFreezedSecs(auth.code_options.freezed_sec - 1))
        } else {
            dispatch(setCodeIsFreezed(false))
            dispatch(setCodeFreezedSecs(0))
        }
    }, 1000);

    useEffect(() => {
        console.log(code);

        if (code.filter(item => item !== "").length === 4) {
            if (!sended && auth.success.code === null) {
                setSended(true)
                handleSendCode()
            }
            return
        }
        if (auth.success.code === false) {
            dispatch(resetLoginCodeStatus())
        } else if (auth.success.code) {
            alert("Отправляемся в профиль")
        }
        setSended(false)
    }, [code, sended, auth.success.code])

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Код из СМС</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-15">
                <div className="f-column gap-10">
                    <p className={`fz-m fw-5 ${auth.success.code === false ? "c-error" : null}`}> {
                        auth.success.code === false ? auth.errors.code : ` Введите код из СМС ${auth.form.maskedPhone}`
                    }</p>
                    <div className="f-row-betw gap-10">
                        {
                            code.map((item, index) => (
                                <InputField
                                    inputType={"number"}
                                    value={item}
                                    onChange={(e) => handleCodeInput(e.target.value, index)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Backspace') {
                                            handleBackspace(index);
                                        }
                                    }}
                                    refInput={(el) => (inputRefs.current[index] = el)}
                                    maxLength={1}
                                    className='txt-center code-input'
                                    label={''} />
                            ))
                        }


                    </div>
                </div>
                <YellowButton disabled={auth.code_options.is_freezed} onClick={handleNewCode}>Отправить код еще раз {auth.code_options.is_freezed ? `(${auth.code_options.freezed_sec} сек)` : null}</YellowButton>
            </div>
            <div>
                <p className={`fz-s`}>
                    Нажимая кнопку «Далее», вы соглашаетесь с <Link to={""} className={"c-yellow"}>пользовательским соглашением</Link>, подтверждаете, что ознакомились с политикой  <Link to={""} className={"c-yellow"}>конфиденциальности</Link>, а также даёте согласие на  <Link to={""} className={"c-yellow"}>обработку персональных данных</Link>
                </p>
            </div>
        </BorderedPageLayout>
    )
}

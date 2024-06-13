import React, { useEffect } from 'react'
import { InputField } from '../../components/InputField'
import { YellowButton } from '../../components/YellowButton'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { DocumentIcon } from '../../icons'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setHasDocs } from '../../features/profile/profileSlice'
import { useNavigate } from 'react-router-dom'

export const DocumentAccept = () => {
    const dispatch = useAppDispatch()
    const { docs_url } = useAppSelector(state => state.profile)

    const acceptDocs = () => {
        dispatch(setHasDocs(true))
    }

    useEffect(() => {
        console.log(docs_url);
    }, [])

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}>
            <div className="f-column gap-40">
                <h2 className="title fw-6">Подпишите договор</h2>
                <p className='fz-m c-lg text'>
                    Нажмите кнопку <span className={"c-dg fw-6"}>Подписать</span>, чтобы подписать договор. Нажмите <span className={"c-dg fw-6"}>Скачать</span>, чтобы сохранить документ на ваше устройство.
                </p>
                <div className="f-column gap-25">
                    <a href={docs_url || "#"} target={"_blank"} className="d-f al-center gap-15">
                        <DocumentIcon />
                        <p className='text fw-5'>Агентский договор</p>
                    </a>
                    <div className="f-column gap-15">
                        <YellowButton onClick={acceptDocs}>Подписать</YellowButton>
                        <div className="w-100p d-f jc-center">
                            <a href={docs_url || "#"} target={"_blank"} download={true} className='c-yellow fz-l fw-5'>Скачать</a>
                        </div>
                    </div>
                </div>
            </div>
        </BorderedPageLayout >
    )
}
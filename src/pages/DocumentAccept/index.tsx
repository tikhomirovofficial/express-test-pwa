import React from 'react'
import { InputField } from '../../components/InputField'
import { YellowButton } from '../../components/YellowButton'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { DocumentIcon } from '../../icons'

export const DocumentAccept = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}>
            <div className="f-column gap-40">
                <h2 className="title">Подпишите договор</h2>
                <p className='fz-m c-lg text'>
                    Нажмите кнопку <span className={"c-dg fw-6"}>Подписать</span>, чтобы подписать договор. Нажмите <span className={"c-dg fw-6"}>Скачать</span>, чтобы сохранить документ на ваше устройство.
                </p>
                <div className="f-column gap-25">
                    <div className="d-f al-center gap-15">
                        <DocumentIcon />
                        <p className='text fw-5'>Агентский договор</p>
                    </div>
                    <div className="f-column gap-15">
                        <YellowButton>Сохранить</YellowButton>
                        <div className="w-100p d-f jc-center">
                            <a href="" className='c-yellow fz-l fw-5'>Скачать</a>
                        </div>
                    </div>

                </div>

            </div>
        </BorderedPageLayout>
    )
}
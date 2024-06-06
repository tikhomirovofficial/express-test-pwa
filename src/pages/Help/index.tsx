import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AddIcon, AnalysisIcon, ArrowRight, AvatarIcon, CheckedCircle, DownloadIcon, HeartIcon, LogoIcon, SearchIcon, TelegramIcon, TrashIcon, UncheckedCircle, WhatsAppIcon } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import { CartItem } from '../../components/ListItems/CartItem'
import styles from './help.module.scss'
import { BottomNav } from '../../components/BottomNav'

export const Help = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column gap-25"}>
            <BottomNav current={2} />
            <div className="f-column gap-15">
                <h2 className="title">Поддержка</h2>
                <p className={`fz-m c-lg`}>Если у вас возникли вопросы или вам нужна помощь в работе приложения, то вы можете связаться с нами удобным способом</p>
            </div>
            <div className="f-row-betw gap-10">
                <a href='' className={`big-btn ${styles.linkBlock} ${styles.linkBlockTelegram} f-c-col bg-dark gap-15 w-100p`}>
                    <TelegramIcon />
                    <p className='c-white txt-center fw-5 fz-m'>Связаться в Telegram</p>
                </a>
                <a href='' className={`big-btn ${styles.linkBlock} ${styles.linkBlockWhatsapp} f-c-col gap-15 w-100p`}>
                    <WhatsAppIcon />
                    <p className='c-white txt-center fw-5 fz-m'>Связаться в WhatsApp</p>
                </a>
            </div>
        </BorderedPageLayout>
    )
}

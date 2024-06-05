import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AddIcon, AnalysisIcon, ArrowRight, AvatarIcon, CheckedCircle, DownloadIcon, HeartIcon, LogoIcon, SearchIcon, TrashIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import { CartItem } from '../../components/ListItems/CartItem'
import styles from './cart.module.scss'
import { OrderItem } from '../../components/OrderItem'

export const Orders = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column gap-50"}>
            <div className="f-column gap-25">
                <h2 className="title">Вячеслав, добрый день!</h2>
                <div className="f-row-betw gap-10">
                    <div className="big-btn whiteBorderedBlock f-c-col bg-dark gap-15 w-100p">
                        <LogoIcon />
                        <p className='c-white txt-center fw-5 fz-m'>Пригласить в Экспресс Тест</p>
                    </div>
                    <div className="big-btn whiteBorderedBlock f-c-col gap-15 w-100p">
                        <AnalysisIcon />
                        <p className='c-black txt-center fw-5 fz-m'>Назначить анализы</p>
                    </div>
                </div>
            </div>
            <div className="f-column gap-25">
                <h2 className="title">Заказы анализов</h2>
                <div className="f-column gap-15">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </BorderedPageLayout>
    )
}

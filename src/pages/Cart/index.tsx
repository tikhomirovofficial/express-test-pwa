import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AddIcon, ArrowRight, AvatarIcon, CheckedCircle, HeartIcon, SearchIcon, TrashIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import { CartItem } from '../../components/ListItems/CartItem'
import styles from './cart.module.scss'

export const OrderCart = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6 titleTopOverflowed">Корзина</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column-betw f-1 gap-15">
                <div className="f-column gap-10">
                    <div className="f-row-betw">
                        <h2 className="title">Всего анализов: 8</h2>
                        <div className={`${styles.bonuses} gap-10 d-f`}>
                            <HeartIcon />
                            <p className='c-white fz-l fw-6'>54</p>
                        </div>
                    </div>
                    <div className="d-f gap-5 al-center">
                        <TrashIcon />
                        <p className='fw-5 fz-l c-error'>Очистить</p>
                    </div>

                </div>
                <div className="f-1 p-rel">
                    <div className="list p-abs w-100p f-column scrollableItemsList gap-10">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
                <YellowButton>Отправить заказ</YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

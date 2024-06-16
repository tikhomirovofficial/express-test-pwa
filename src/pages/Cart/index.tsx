import React, { useEffect, useMemo, useState } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AddIcon, ArrowRight, AvatarIcon, CheckedCircle, HeartIcon, SearchIcon, TrashIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import { CartItem } from '../../components/ListItems/CartItem'
import styles from './cart.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { clearCart, removeProduct } from '../../features/cart/cartSlice'
import { createOrder, setOrderBonusesTotal, setCurrentCategory, resetPatient, resetOrderErr } from '../../features/order/orderSlice'
import { CreateOrderReq } from '../../types/api/orders.api.types'
import { BackButton } from '../../components/BackButton'

export const OrderCart = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const cartProducts = useAppSelector(state => state.cart.items)
    const { patientData, sending, success, err, bonuses } = useAppSelector(state => state.order)

    const orderTotalSum = useMemo(() => {
        return cartProducts.reduce((a, b) => {
            return a + b.cost
        }, 0)
    }, [cartProducts])

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    const handleOrder = () => {
        const data: CreateOrderReq = {
            user_id: patientData.id,
            analiz: cartProducts.map(item => item.id)
        }
        dispatch(createOrder(data))

    }

    const handleToSelectingCategory = () => {
        navigate("/order/category")
    }

    useEffect(() => {
        if (success) {
            dispatch(setOrderBonusesTotal((orderTotalSum / 100) * bonuses.percent))
            navigate("/order-sent")
            handleClearCart()
        }
    }, [success])

    useEffect(() => {
        return () => {
            dispatch(resetOrderErr())
        };
    }, []);

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <BackButton onClick={handleToSelectingCategory} />
                    <h2 className="title fw-6 titleTopOverflowed">Корзина</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column-betw f-1 gap-15">
                <div className="f-column gap-10">
                    <div className="f-row-betw">
                        <h2 className="title">Всего анализов: {cartProducts.length}</h2>
                        <div className={`${styles.bonuses} gap-10 d-f`}>
                            <HeartIcon />
                            <p className='c-white fz-l fw-6'>{~~((orderTotalSum / 100) * bonuses.percent)}</p>
                        </div>
                    </div>
                    <div onClick={handleClearCart} className="d-f gap-5 al-center">
                        <TrashIcon />
                        <p className='fw-5 fz-l c-error'>Очистить</p>
                    </div>

                </div>
                <div className="f-1 p-rel">
                    <div className="list p-abs w-100p f-column scrollableItemsList gap-10">
                        {
                            cartProducts.map(item => (
                                <CartItem
                                    removeItem={() => dispatch(removeProduct(item.id))}
                                    item={item} />
                            ))
                        }
                    </div>
                </div>
                <div className="f-column gap-5">
                    <YellowButton onClick={handleOrder} loading={sending} disabled={cartProducts.length === 0}>Отправить заказ</YellowButton>
                    {
                        err ? <p className='fz-m c-error'>{err}</p> : null
                    }
                </div>

            </div>
        </BorderedPageLayout>
    )
}

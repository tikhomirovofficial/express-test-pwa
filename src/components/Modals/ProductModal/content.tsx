import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleAnalysisInfoModal, handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { HeartIcon, LogoLongIcon } from '../../../icons'
import { YellowButton } from '../../YellowButton'
import { OrderCard } from '../../OrderCard'
import { DocumentItem } from '../../ListItems/DocumentItem'
import Skeleton from 'react-loading-skeleton'
import { addToCart, CartItemType, removeProduct } from '../../../features/cart/cartSlice'
import { resetProductInfo } from '../../../features/current-data/currentData'
import { useNavigate } from 'react-router-dom'
import { BlueButton } from '../../BlueButton'


export const ProductModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { productInfo, loadings } = useAppSelector(state => state.currentData)
    const cartProducts = useAppSelector(state => state.cart.items)
    const isInCart = cartProducts.some(item => item.id === productInfo.id)

    const toCart = () => {
        navigate("/order/cart")
        if (handleModal) {
            handleModal()
        }

    }

    const addProduct = () => {
        dispatch(addToCart({ ...productInfo as CartItemType }))
    }

    const removeItem = () => {
        dispatch(removeProduct(productInfo.id))
    }

    useEffect(() => {
        return () => {
            dispatch(resetProductInfo())
        }
    }, [])

    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Подробнее</p>
                <div className='f-03'></div>
            </div>

            <div className="gap-35 f-column f-1">
                <div className="f-column gap-15">
                    {
                        loadings.product_info ? <Skeleton borderRadius={6} height={60} /> : <h2 className="title">
                            {productInfo.name}
                        </h2>
                    }

                </div>
                <div className={`f-column gap-15`}>
                    <h2 className="fw-7 fz-m">Описание</h2>
                    {
                        loadings.product_info ? <Skeleton borderRadius={6} height={100} /> : <p className="text c-lg fz-m">
                            {productInfo.info || "Описание отсутствует."}
                        </p>
                    }

                </div>

            </div>
            <div className="f-row-betw gap-10">
                {
                    !isInCart ? <YellowButton className='f-c-row gap-10' onClick={addProduct}>
                        + Добавить в корзину

                    </YellowButton> :
                        <>
                            <YellowButton className='f-c-row gap-10' onClick={toCart}>
                                В корзине
                                <div className="countYellowWhite fz-s">{cartProducts.length}</div>
                            </YellowButton>
                            <BlueButton className='f-c-row gap-10' onClick={removeItem}>
                                - Убрать
                            </BlueButton>
                        </>
                }

            </div>
        </BorderedPageLayout>
    )
}

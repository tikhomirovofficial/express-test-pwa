import React, { useEffect, useState } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import Skeleton from 'react-loading-skeleton'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProductById } from '../../features/current-data/currentData'
import { handleAnalysisInfoModal } from '../../features/modals/modalsSlice'
import { useDeferred } from '../../hooks/useDeffered'
import { usePagination } from '../../hooks/usePagination'
import { getProducts, incrementProductsPart, resetProducts } from '../../features/products/productSlice'
import { SearchIcon } from '../../icons'
import { BackButton } from '../../components/BackButton'

export const OrderAnalysis = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const cart = useAppSelector(state => state.cart)
    const categories = useAppSelector(state => state.categories.categories)
    const cartProducts = useAppSelector(state => state.cart.items)
    const { items, part, loadings, can_next } = useAppSelector(state => state.products)

    const [searchVal, setSearchVal] = useState("")
    const defferedSearchVal = useDeferred(searchVal, 500)

    const currentCategoryId = useAppSelector(state => state.order.currentCategorySelected)
    const currentCategory = categories.filter(ctg => ctg.id === currentCategoryId)[0]

    const [loadProducts, loadMore] = usePagination(
        () => dispatch(getProducts({ part, title: searchVal, id: currentCategoryId })),
        () => dispatch(incrementProductsPart()),
        {
            part,
            can_more: can_next,
            items,
            loading: loadings.pagination
        },
        [currentCategoryId]
    )

    const toCart = () => {
        navigate("/order/cart")
    }

    const handleToSelectingCategory = () => {
        navigate("/order/category")
    }

    const handleOpenProductInfo = (product_id: number) => {
        dispatch(handleAnalysisInfoModal())
        dispatch(getProductById({ id: product_id }))
    }

    useEffect(() => {
        dispatch(resetProducts())
    }, [defferedSearchVal])

    useEffect(loadProducts, [part])

    useEffect(() => {
        return () => {
            dispatch(resetProducts())
        };
    }, []);

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <BackButton onClick={handleToSelectingCategory} />
                    <h2 className="title fw-6 titleTopOverflowed">{currentCategory !== undefined ? currentCategory.name.slice(0, 17) : ""} {currentCategory.name.length >= 16 ? "..." : ""}</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column-betw f-1 gap-30">
                <div className="f-column gap-25">
                    <div className="f-row-betw">
                        <h2 className="title">Выберите анализы</h2>
                        <div className="al-center gap-5 d-f">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot-active dot"></div>
                        </div>
                    </div>
                    <div className="f-column gap-15">
                        <div className="d-f pd-10 al-center gap-5 search-block w-100p">
                            <SearchIcon />
                            <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='w-100p fz-m' type="text" placeholder='Найти по названию анализа' />
                        </div>
                    </div>
                </div>
                <div className="f-1 p-rel">
                    {
                        !loadings.products ?
                            <div className="list p-abs w-100p f-column scrollableItemsList gap-10">
                                {
                                    items.map((item, index) => (
                                        <AnalysisItem
                                            clickHandle={() => handleOpenProductInfo(item.id)}
                                            product={item}
                                            isInCart={cartProducts.some(cartProduct => cartProduct.id === item.id)}
                                            index={index}
                                        />
                                    ))
                                }
                                {
                                    can_next ?
                                        <div style={{ marginTop: 15 }} className="f-c-col">
                                            <YellowButton className='fz-s mini-btn' onClick={loadMore} loading={loadings.pagination}>Загрузить еще</YellowButton>
                                        </div>
                                        : null
                                }
                            </div> :
                            <>
                                <div className="f-column gap-5">
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                </div>
                            </>
                    }
                </div>
                <YellowButton disabled={cart.items.length === 0} className='f-c-row gap-10' onClick={toCart}>
                    Корзина
                    <div className="countYellowWhite fz-s">{cart.items.length}</div>
                </YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

import React, { useEffect, useState } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AddIcon, ArrowRight, AvatarIcon, CheckedCircle, SearchIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import { CategoryItem } from '../../components/ListItems/CategoryItem'
import Skeleton from 'react-loading-skeleton'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProductById } from '../../features/current-data/currentData'
import { handleAnalysisInfoModal } from '../../features/modals/modalsSlice'
import { useDeferred } from '../../hooks/useDeffered'
import { usePagination } from '../../hooks/usePagination'
import { getCategories, incrementCategoriesProductsPart, resetCategoriesProducts } from '../../features/categories/categoriesSlice'
import { AnalysisApi } from '../../types/entities/analysis.types'
import { CategoryApi } from '../../types/entities/categories.types'
import { CategoryOrProductItem } from '../../components/ListItems/CategoryOrProductItem'
import { BackButton } from '../../components/BackButton'


export const OrderCategory = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { can_next, part, categories, analisys } = useAppSelector(state => state.categories)
    const cart = useAppSelector(state => state.cart)
    const patient = useAppSelector(state => state.order.patientData)
    const cartProducts = useAppSelector(state => state.cart.items)

    const loadings = useAppSelector(state => state.categories.loadings)

    const [searchVal, setSearchVal] = useState("")
    const defferedSearchVal = useDeferred(searchVal, 500)
    const patientFullName = `${patient?.first_name || ""} ${patient?.last_name || ""} ${patient?.first_name === undefined && patient?.last_name === undefined ? "Пациент" : ""}`

    const [loadCategoriesProducts, loadMore] = usePagination(
        () => dispatch(getCategories({ part, title: searchVal, analiz: searchVal })),
        () => dispatch(incrementCategoriesProductsPart()),
        {
            part,
            can_more: can_next,
            items: [...categories, ...analisys],
            loading: loadings.pagination
        },
    )

    const handleToSelectingPatient = () => {
        navigate("/order/patient")
    }

    const toProducts = () => {
        navigate("/order/analysis")
    }

    const toCart = () => {
        navigate("/order/cart")
    }

    const handleOpenProductInfo = (product_id: number) => {
        dispatch(handleAnalysisInfoModal())
        dispatch(getProductById({ id: product_id }))
    }

    useEffect(() => {
        dispatch(resetCategoriesProducts())
    }, [defferedSearchVal])

    useEffect(loadCategoriesProducts, [part])

    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <BackButton onClick={handleToSelectingPatient} />
                    <h2 className="title fw-6">{patientFullName}</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column-betw f-1 gap-30">
                <div className="f-column gap-25">
                    <div className="f-row-betw">
                        <h2 className="title">Выберите категорию</h2>
                        <div className="al-center gap-5 d-f">
                            <div className="dot"></div>
                            <div className="dot-active dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="f-column gap-15">
                        <div className="d-f pd-10 al-center gap-5 search-block w-100p">
                            <SearchIcon />
                            <input value={searchVal} onChange={e => setSearchVal(e.target.value)} className='w-100p fz-m' type="text" placeholder='Найти по категории или названию анализа' />
                        </div>
                    </div>
                </div>
                <div className="f-1 p-rel">
                    {
                        !loadings.categories ?
                            <div className="list p-abs w-100p f-column scrollableItemsList gap-10">
                                {
                                    [...[...categories, ...analisys] as (CategoryApi | AnalysisApi)[]].length ?
                                        [...[...categories, ...analisys] as (CategoryApi | AnalysisApi)[]].map(item => (
                                            <CategoryOrProductItem
                                                openAnalysisInfo={() => handleOpenProductInfo(item.id)}
                                                item={item}
                                                toProducts={toProducts}
                                                cartProducts={cartProducts}
                                            />
                                        )) :
                                        <div style={{ padding: "10px 0" }} className=''>
                                            <p className='fz-m c-dark'>Ничего не найдено.</p>
                                        </div>
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

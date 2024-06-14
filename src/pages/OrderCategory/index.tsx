import React, { useEffect, useState } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
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
const loading = !false

export const OrderCategory = () => {
    const dispatch = useAppDispatch()

    const { analysisInfoModal } = useAppSelector(state => state.modals)
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
        alert("to patient")
    }

    const toProducts = () => {
        alert("to products")
    }

    const toCart = () => {
        alert("to cart")
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
                    <div></div>
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
                                    [[...categories, ...analisys] as (CategoryApi | AnalysisApi)[]].map(item => (
                                        <CategoryItem />
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
                                    <Skeleton borderRadius={6} height={50} />
                                </div>
                            </>
                    }

                </div>
                <YellowButton>Далее</YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

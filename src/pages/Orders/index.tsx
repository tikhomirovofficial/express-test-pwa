import React, { useEffect } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AddIcon, AnalysisIcon, ArrowRight, AvatarIcon, CheckedCircle, DownloadIcon, HeartIcon, LogoIcon, SearchIcon, TrashIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import { CartItem } from '../../components/ListItems/CartItem'
import styles from '../Profile/profile.module.scss'
import { OrderCard } from '../../components/OrderCard'
import { BottomNav } from '../../components/BottomNav'
import Skeleton from 'react-loading-skeleton'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProfile } from '../../features/profile/profileSlice'
import { getGreeting } from '../../utils/getGreeting'
import { getAllOrders, incrementOrdersPart, resetOrders } from '../../features/orders/ordersSlice'
import { usePagination } from '../../hooks/usePagination'
import { handleOrderInfoModal } from '../../features/modals/modalsSlice'
import { normalizeDate } from '../../utils/normalizeDate'
import { resetPatient } from '../../features/order/orderSlice'
const loading = !true

export const Orders = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
  
    const { all_orders, loadings, can_next, part } = useAppSelector(state => state.orders)
    const profile = useAppSelector(state => state.profile)

    const [loadOrders, loadMore] = usePagination(
        () => {
            dispatch(getAllOrders({ part }
            ))
        },
        () => { dispatch(incrementOrdersPart()) },
        {
            part,
            can_more: can_next,
            items: all_orders,
            loading: loadings.all_orders_pagination
        }
    )

    const handleToOrdering = () => {
        dispatch(resetPatient())
        navigate("/order/patient")
    }

   

    useEffect(loadOrders, [part])

    useEffect(() => {
        return () => {
            dispatch(resetOrders())
        }
    }, [])

    return (
        <BorderedPageLayout
            contentClassName={"f-column gap-50"}>
            <div className="f-column gap-25">
                {
                    profile.loadings.profile ? <Skeleton height={22} borderRadius={6} /> :
                        <h2 className="title">{profile.data.first_name.trim()}, {getGreeting()}!</h2>
                }
                <div className="f-row-betw gap-10">
                    <Link to="/inviting/form" className="big-btn whiteBorderedBlock f-c-col bg-dark gap-15 w-100p">
                        <LogoIcon />
                        <p className='c-white txt-center fw-5 fz-m'>Пригласить в Экспресс Тест</p>
                    </Link>
                    <div onClick={handleToOrdering} className="big-btn whiteBorderedBlock f-c-col gap-15 w-100p">
                        <AnalysisIcon />
                        <p className='c-black txt-center fw-5 fz-m'>Назначить анализы</p>
                    </div>

                </div>
            </div>
            <div className={`f-column gap-25 ${styles.hub}`}>
                {
                    loading ? <Skeleton height={22} borderRadius={6} /> :
                        <h2 className="title">Заказы анализов</h2>
                }
                {
                    !loadings.all_orders ? <div className="f-column gap-15">
                        {
                            all_orders.map(item => (
                                <OrderCard status={item.status}
                                    handlePress={() => {
                                        dispatch(handleOrderInfoModal())
                                    }}
                                    key={item.id}
                                    paid={true}
                                    date={normalizeDate(item.date)}
                                    id={item.id}
                                    customer={item.pacient || "Имя Фамилия"}
                                    analysisList={[]} />
                            ))
                        }
                        {
                            can_next ?
                                <div className="f-c-col">
                                    <YellowButton className='fz-s mini-btn' onClick={loadMore} loading={loadings.all_orders_pagination}>Загрузить еще</YellowButton>
                                </div>
                                : null
                        }
                    </div> : <>
                        <Skeleton height={140} borderRadius={6} />
                        <Skeleton height={140} borderRadius={6} />
                    </>
                }
            </div>
        </BorderedPageLayout>
    )
}

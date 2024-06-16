import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleBonusesModal, handleOrderInfoModal, handleOrdersFinancesModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { InputField } from '../../InputField'
import { YellowButton } from '../../YellowButton'
import { HeartIcon } from '../../../icons'
import { OrderItem } from '../../OrderItem'
import Skeleton from 'react-loading-skeleton'
import { getAllDatedOrders, incrementDatedOrdersPart, resetDatedOrders } from '../../../features/orders/ordersSlice'
import { usePagination } from '../../../hooks/usePagination'
import { OrderByDateApi } from '../../../types/entities/order.types'

type OrdersDateGroupProps = {
    data: OrderByDateApi
}

const OrdersByDateGroup: FC<OrdersDateGroupProps> = ({ data }) => {
    return (
        <div className="f-column gap-5">
            <h2 className="title">{data.date}</h2>
            <div className="f-column">
                {
                    data.orders.map(item => (
                        <OrderItem
                            id={item.id}
                            codeText={String(item.id)}
                            leftBottomText={String(item.pacient)}
                            rightBottomText={item.status}
                            rightTopText={String(item.bonus)}

                        />
                    ))
                }

            </div>
        </div>
    )
}


export const FinancesModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch()
    const { bonus } = useAppSelector(state => state.profile.data)
    const { ordersFinancesModal, bonusesModal } = useAppSelector(state => state.modals)
    const { dated_can_next, dated_part, all_dated_orders, loadings } = useAppSelector(state => state.orders)

    const [loadDatedOrders, loadMore] = usePagination(
        () => { dispatch(getAllDatedOrders({ part: dated_part })) },
        () => { dispatch(incrementDatedOrdersPart()) },
        {
            part: dated_part,
            can_more: dated_can_next,
            items: all_dated_orders,
            loading: loadings.all_dated_orders_pagination
        }
    )

    useEffect(loadDatedOrders, [dated_part])

    useEffect(() => {
        return () => {
            dispatch(resetDatedOrders())
        }
    }, [])
    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Финансы</p>
                <div className='f-025'></div>
            </div>
            <div className="f-column gap-30">
                <div onClick={() => dispatch(handleBonusesModal())} className="whiteBorderedBlock pd-20 f-column gap-15">
                    <div className="f-column gap-10">
                        <div className="d-f al-center gap-10">
                            <div className="d-f al-center gap-5">
                                <HeartIcon stroke={"#414141"} />
                                <p className={"fz-l fw-6 c-dark"}>Бонусы</p>
                            </div>
                            <p>1 ед. = 1 ₽</p>
                        </div>
                        <h3 className='fz-l'>Бонусов: {bonus} </h3>
                    </div>
                    <p className="c-lg fz-s">Мин. сумма для вывода 500 бонусов</p>
                </div>
                {
                    loadings.all_dated_orders ?
                        <div className="f-column gap-30">
                            <div className="f-column gap-5">
                                <Skeleton borderRadius={6} height={22} width={"70%"} />
                                <div className="f-column gap-5">
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                </div>
                            </div>
                        </div> :
                        all_dated_orders.length ?
                            <div className="f-column gap-30">
                                {
                                    all_dated_orders.map(item => (
                                        <OrdersByDateGroup data={item} />
                                    ))
                                }
                            </div> :
                            <div style={{ padding: "10px 0" }} className=''>
                                <p className='fz-m c-dark'>Здесь пока пусто.</p>
                            </div>
                }

            </div>


        </BorderedPageLayout>
    )
}

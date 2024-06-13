import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import Skeleton from 'react-loading-skeleton'
import { normalizeDate } from '../../../utils/normalizeDate'
import { getOrderById, resetOrderInfo } from '../../../features/current-data/currentData'

export const OrderModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    const dispatch = useAppDispatch();
    const { orderInfo: { info_order, analiz_list, results }, loadings } = useAppSelector(state => state.currentData)


    useEffect(() => {
        return () => {
            dispatch(resetOrderInfo())
        }
    }, [])


    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                {
                    loadings.order ? <div className="f-column al-center">
                        <Skeleton borderRadius={6} height={20} width={80} />
                        <Skeleton borderRadius={6} height={23} width={60} />
                    </div> : <div className="f-column al-center">
                        <p className='c-dark fw-5 fz-l'>Заказ №</p>
                        <div className="grayInfo">
                            <p className='fz-m'>{info_order.order_id}</p>
                        </div>
                    </div>
                }
                {
                    loadings.order ? <Skeleton borderRadius={6} height={20} width={82} /> :
                        <p className='fz-l c-lg'>{normalizeDate(info_order.date)}</p>
                }

            </div>
            <div className="f-column gap-35">
                <div className="f-column gap-15">
                    {
                        loadings.order ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                            <h2 className="title">Информация о заказе</h2>
                    }
                    {
                        !loadings.order ?
                            <div style={{ maxWidth: 230 }} className="f-column gap-10">
                                <div className="f-row-betw">
                                    <p className={`fz-m c-lg`}>Статус</p>
                                    <p className={`fz-m c-dark`}>{info_order.status}</p>
                                </div>
                                <div className="f-row-betw">
                                    <p className={`fz-m c-lg`}>Назначил(а)</p>
                                    <p className={`fz-m c-dark`}>{info_order.doctor}</p>
                                </div>
                                <div className="f-row-betw">
                                    <p className={`fz-m c-lg`}>Пациент</p>
                                    <p className={`fz-m c-dark`}>{info_order.pacient}</p>
                                </div>
                            </div> :
                            <Skeleton borderRadius={6} height={100} width={"70%"} />
                    }

                </div>
                <div className="f-column gap-15">
                    {
                        loadings.order ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                            <h2 className="title">Результаты анализов</h2>

                    }
                    {
                        loadings.order ? <Skeleton borderRadius={6} height={100} width={"100%"} /> :
                            <p className={`text c-lg`}>Здесь появится возможность скачать результаты анализов после того, как пациент оплатит и сдаст анализы в нашей лаборатории.</p>
                    }
                </div>
                <div className="f-column gap-15">
                    {
                        loadings.order ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                            <div className="d-f al-center gap-10">
                                <h2 className="title">Список анализов</h2>
                                <div className="countYellowBlack fw-6 fz-s">3</div>
                            </div>
                    }
                    {
                        !loadings.order ? <div className="f-column gap-10">
                            {
                                analiz_list.map((item: any, index: number) => (
                                    <div className='fz-m fw-5 c-dark'>{index + 1}. {item.title}</div>
                                ))
                            }
                        </div> :
                            <Skeleton borderRadius={6} height={100} width={"70%"} />
                    }

                </div>
            </div>

        </BorderedPageLayout>
    )
}

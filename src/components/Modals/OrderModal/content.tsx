import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import Skeleton from 'react-loading-skeleton'
const loading = false

export const OrderModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                {
                    loading ? <div className="f-column al-center">
                        <Skeleton borderRadius={6} height={20} width={80} />
                        <Skeleton borderRadius={6} height={23} width={60} />
                    </div> : <div className="f-column al-center">
                        <p className='c-dark fw-5 fz-l'>Заказ №</p>
                        <div className="grayInfo">
                            <p className='fz-m'>02-014</p>
                        </div>
                    </div>
                }
                {
                    loading ? <Skeleton borderRadius={6} height={20} width={82} /> :
                        <p className='fz-l c-lg'>25.09.2023</p>
                }

            </div>
            <div className="f-column gap-35">
                <div className="f-column gap-15">
                    {
                        loading ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                            <h2 className="title">Информация о заказе</h2>
                    }
                    {
                        !loading ?
                            <div style={{ maxWidth: 230 }} className="f-column gap-10">
                                <div className="f-row-betw">
                                    <p className={`fz-m c-lg`}>Статус</p>
                                    <p className={`fz-m c-dark`}>Отправлен</p>
                                </div>
                                <div className="f-row-betw">
                                    <p className={`fz-m c-lg`}>Назначил(а)</p>
                                    <p className={`fz-m c-dark`}>Отправлен</p>
                                </div>
                                <div className="f-row-betw">
                                    <p className={`fz-m c-lg`}>Пациент</p>
                                    <p className={`fz-m c-dark`}>Отправлен</p>
                                </div>
                            </div> :
                            <Skeleton borderRadius={6} height={100} width={"70%"} />
                    }

                </div>
                <div className="f-column gap-15">
                    {
                        loading ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                            <h2 className="title">Результаты анализов</h2>

                    }
                    {
                        loading ? <Skeleton borderRadius={6} height={100} width={"100%"} /> :
                            <p className={`text c-lg`}>Здесь появится возможность скачать результаты анализов после того, как пациент оплатит и сдаст анализы в нашей лаборатории.</p>
                    }
                </div>
                <div className="f-column gap-15">
                    {
                        loading ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                            <div className="d-f al-center gap-10">
                                <h2 className="title">Список анализов</h2>
                                <div className="countYellowBlack fw-6 fz-s">3</div>
                            </div>
                    }
                    {
                        !loading ? <div className="f-column gap-10">
                            <div className='fz-m fw-5 c-dark'>1. Бактериальная панель (IgE) (П)</div>
                            <div className='fz-m fw-5 c-dark'>1. Бактериальная панель (IgE) (П)</div>
                            <div className='fz-m fw-5 c-dark'>1. Бактериальная панель (IgE) (П)</div>
                        </div> :
                            <Skeleton borderRadius={6} height={100} width={"70%"} />
                    }

                </div>
            </div>

        </BorderedPageLayout>
    )
}

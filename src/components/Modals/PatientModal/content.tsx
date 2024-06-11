import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { HeartIcon } from '../../../icons'
import { YellowButton } from '../../YellowButton'
import { OrderCard } from '../../OrderCard'
import Skeleton from 'react-loading-skeleton'
const loading = false;

export const PatientModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>Пациент</p>
                <div className='f-03'></div>
            </div>
            <div className="f-column gap-15">
                {

                    loading ? <div className="f-column gap-5 al-center">
                        <Skeleton height={20} width={150} borderRadius={6} />
                        <Skeleton height={20} width={240} borderRadius={6} />

                    </div> :
                        <div className="f-column gap-15">
                            <h2 className="title txt-center">Подосёнов <br />Вячеслав Сергеевич</h2>
                        </div>
                }
                <YellowButton>Заказать анализы</YellowButton>
            </div>
            <div className="f-column gap-15">
                {
                    loading ? <Skeleton borderRadius={6} height={22} width={"70%"} /> :
                        <h2 className="title">Личная информация</h2>
                }
                {
                    loading ?
                        <Skeleton borderRadius={6} height={73} width={"70%"} /> :
                        <div style={{ maxWidth: 230 }} className="f-column gap-10">
                            <div className="f-row-betw">
                                <p className={`fz-m c-lg`}>Возраст</p>
                                <p className={`fz-m c-dark`}>27 лет</p>
                            </div>
                            <div className="f-row-betw">
                                <p className={`fz-m c-lg`}>Пол</p>
                                <p className={`fz-m c-dark`}>Мужской</p>
                            </div>
                            <div className="f-row-betw">
                                <p className={`fz-m c-lg`}>Телефон</p>
                                <p className={`fz-m c-dark`}>+7 (951) 735-89-45</p>
                            </div>
                        </div>
                }

            </div>
            <div className={`f-column gap-15`}>
                <h2 className="title">Анализы</h2>
                <div className="f-column gap-15">
                    {
                        loading ?
                            <>
                                <Skeleton height={140} borderRadius={6} />
                                <Skeleton height={140} borderRadius={6} />
                            </> :
                            [1, 2, 4].map(item => (
                                <OrderCard />
                            ))
                    }
                </div>
            </div>

        </BorderedPageLayout>
    )
}

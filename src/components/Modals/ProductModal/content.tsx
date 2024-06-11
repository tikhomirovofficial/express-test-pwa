import React, { FC, useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'
import { useAppDispatch } from '../../../app/hooks'
import { handleOrderInfoModal } from '../../../features/modals/modalsSlice'
import { ModalContentProps } from '../../Modal'
import { HeartIcon, LogoLongIcon } from '../../../icons'
import { YellowButton } from '../../YellowButton'
import { OrderCard } from '../../OrderCard'
import { DocumentItem } from '../../ListItems/DocumentItem'
import Skeleton from 'react-loading-skeleton'
const loading = false

export const ProductModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
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

            <div className="gap-35 f-column">
                <div className="f-column gap-15">
                    {
                        loading ? <Skeleton borderRadius={6} height={60} /> : <h2 className="title">
                            Индекс ROMA (включает исследования СА 125 и НЕ-4) (П)
                        </h2>
                    }

                    {/* <div style={{ maxWidth: 230 }} className="f-column gap-10">
                        <div className="f-row-betw">
                            <p className={`fz-m c-lg`}>Версия</p>
                            <p className={`fz-m c-dark`}>1.4</p>
                        </div>
                    </div> */}
                </div>
                <div className={`f-column gap-15`}>
                    <h2 className="fw-7 fz-m">Описание</h2>
                    {
                        loading ? <Skeleton borderRadius={6} height={100} /> : <p className="text c-lg fz-m">
                            Если у вас возникли вопросы или вам нужна помощь в работе приложения, то вы можете связаться с нами удобным способом
                        </p>
                    }

                </div>

            </div>

        </BorderedPageLayout>
    )
}

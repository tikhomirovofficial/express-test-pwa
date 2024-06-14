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

export const AboutAppModalContent: FC<ModalContentProps> = ({ handleModal, level }) => {
    return (
        <BorderedPageLayout
            modal={{ level: level || 1 }}
            handleModal={handleModal}
            contentClassName='f-column gap-40'>
            <div className="d-f jc-between">
                <div onClick={handleModal} className="textButton fz-l">Закрыть</div>
                <p className='c-dark fw-5 fz-l fw-6'>О приложении</p>
                <div className='f-03'></div>
            </div>

            <div className="gap-35 f-column">
                <div className="f-column gap-15">
                    <LogoLongIcon />
                    <div style={{ maxWidth: 230 }} className="f-column gap-10">
                        <div className="f-row-betw">
                            <p className={`fz-m c-lg`}>Версия</p>
                            <p className={`fz-m c-dark`}>1.0</p>
                        </div>
                    </div>
                </div>
                <div className={`f-column gap-15`}>
                    <h2 className="title">Документы</h2>
                    <div className="f-column">
                        <DocumentItem title={"Пользовательское соглашение"} />
                        <DocumentItem title={"Политика конфиденциальности"} />
                        <DocumentItem title={"Согласие на обработку персональных данных"} />
                    </div>
                </div>

            </div>

        </BorderedPageLayout>
    )
}

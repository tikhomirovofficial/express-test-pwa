import React from 'react'
import { DownloadIcon } from '../../icons'
import styles from './orderCard.module.scss'

export const OrderCard = () => {
    return (
        <div className={`${styles.item} f-column pd-15 whiteBorderedBlock gap-25`}>
            <div className="d-f jc-between">
                <div className="f-column gap-10">
                    <div className="d-f al-center">
                        <p className={`c-dark fz-m fw-5`}>Заказ №</p>
                        <div className="grayInfo">
                            <p className="c-dark fz-s">02-014</p>
                        </div>
                    </div>
                    <p className="fz-s c-lg">Владислав Тузов</p>
                </div>
                <p className="fz-s c-lg">25.09.2023</p>
            </div>
            <div className="f-row-betw">
                <div className="status status-green fz-s">Не оплачен</div>
                <div className={`d-f al-center gap-10 f-07 ${styles.download} jc-end`}>
                    <DownloadIcon />
                    <p className="text-underline fz-xs c-lg">
                        Скачать результаты анализов
                    </p>
                </div>
            </div>
        </div>
    )
}

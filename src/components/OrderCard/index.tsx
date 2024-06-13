import React, { FC, useCallback } from 'react'
import { DownloadIcon } from '../../icons'
import styles from './orderCard.module.scss'
import { OrderAnalysisType } from '../../types/entities/analysis.types'
import { useAppDispatch } from '../../app/hooks'
import { handleOrderInfoModal } from '../../features/modals/modalsSlice'

export const OrderCard: FC<OrderAnalysisType> = ({
    id,
    date,
    customer,
    customerHide = false,
    status,
    paid,
    handlePress,
}) => {
    const dispatch = useAppDispatch()

    const getStatusObj = useCallback(() => {
        const statusObj = {
            statusClassName: "status-gray",
            text: status
        }
        if (status === "Оплачен") {
            statusObj.statusClassName = "status-green"
            return statusObj
        }
        statusObj.statusClassName = "status-gray"
        return statusObj

    }, [status])

    const handleOpenInfo = () => {
        dispatch(handleOrderInfoModal())
        //dispatch(getOrderById({ id }))
    }
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
                <div className={`status ${getStatusObj().statusClassName} fz-s`}>{getStatusObj().text}</div>
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

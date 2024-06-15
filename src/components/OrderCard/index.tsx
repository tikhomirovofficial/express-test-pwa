import React, { FC, useCallback } from 'react'
import { DownloadIcon } from '../../icons'
import styles from './orderCard.module.scss'
import { OrderAnalysisType } from '../../types/entities/analysis.types'
import { useAppDispatch } from '../../app/hooks'
import { handleOrderInfoModal } from '../../features/modals/modalsSlice'
import { getOrderById } from '../../features/current-data/currentData'

export const OrderCard: FC<OrderAnalysisType> = ({
    id,
    date,
    customer,
    handlePress,
    customerHide = false,
    status,
    paid,
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
        dispatch(getOrderById({ id }))
        if(handlePress) {
            handlePress()
        }
    }

    return (
        <div onClick={handleOpenInfo} className={`${styles.item} f-column pd-15 whiteBorderedBlock gap-25`}>
            <div className="d-f jc-between">
                <div className="f-column gap-10">
                    <div className="d-f al-center gap-5">
                        <p className={`c-dark fz-m fw-5`}>Заказ №</p>
                        <div className="grayInfo">
                            <p className="c-dark fz-s">{id}</p>
                        </div>
                    </div>
                    {!customerHide ? <p className="fz-s c-lg">{customer}</p> : null}

                </div>
                <p className="fz-s c-lg">{date}</p>
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

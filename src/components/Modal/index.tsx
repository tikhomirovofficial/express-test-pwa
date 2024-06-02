import React from 'react'
import { BorderedPageLayout } from '../../pages/BorderedPageLayout'
import styles from './modal.module.scss'
import { PatientItem } from '../ListItems/PatientItem'

export const Modal = () => {
    return (
        <>
            {
                <div className={`h-100p w-100p t-opacity-visible-3 ${styles.bgShadow} ${styles.bgShadowVisible}`}></div>
            }
            <div className={`h-100p w-100v p-abs ${styles.modal} ${styles.modalOpened}`}>
                <BorderedPageLayout modal={{ level: 1 }}>
                    <h2 className="title">Информация о заказе</h2>
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                    <PatientItem />
                </BorderedPageLayout>
            </div>
        </>

    )
}

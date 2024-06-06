import React, { useEffect } from 'react'
import { BorderedPageLayout } from '../../../pages/BorderedPageLayout'
import { PatientItem } from '../../ListItems/PatientItem'

export const OrderModalContent = () => {
    useEffect(() => {
        alert("query")
        return () => {
            alert("clear data")
        }
    }, [])
    return (
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
    )
}

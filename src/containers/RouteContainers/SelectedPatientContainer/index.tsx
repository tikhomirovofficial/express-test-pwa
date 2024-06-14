import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { ConditionContainer } from '../../ConditionContainer'

type SelectedPatientContainerProps = {
    Component: FC
}
export const SelectedPatientContainer: FC<SelectedPatientContainerProps> = ({ Component }) => {
    const { patientData } = useAppSelector(state => state.order)

    return (
        <ConditionContainer
            val={(patientData.id > 0)}
            FirstComponent={Component}
            SecondComponent={() => (
                <Navigate to={"/order/patient"} />
            )}
        />
    )
}

import React, { FC, ReactNode } from 'react'

type ConditionContainerProps = {
    val: boolean | null,
    FirstComponent: FC
    SecondComponent: FC
}
export const ConditionContainer: FC<ConditionContainerProps> = ({ val, FirstComponent, SecondComponent }) => {
    if (!val) {
        return <>
            <SecondComponent />
        </>
    }
    return <FirstComponent />
}

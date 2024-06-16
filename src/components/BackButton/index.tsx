import React, { FC } from 'react'
import { BackIcon } from '../../icons'
type BackButtonProps = {
    onClick: () => any
}
export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
    return (
        <div onClick={onClick} style={{ paddingTop: 3, paddingBottom: 3, paddingRight: 5 }} className='f-c-col'>
            <BackIcon />
        </div>
    )
}

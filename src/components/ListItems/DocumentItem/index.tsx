import React, { FC } from 'react'
import { AddIcon, AvatarIcon, CheckedCircle, DocumentIcon, RemoveIcon } from '../../../icons'


type DocumentItemProps = {
    neededBorder?: boolean
    title: string
    to?: string
}

export const DocumentItem: FC<DocumentItemProps> = ({ neededBorder = true, title = "", to = "" }) => {
    return (
        <div className="d-f al-center gap-15 analysis-item pd-10-0 border-bottom">
            <DocumentIcon />
            <p style={{maxWidth: 200}} className='text fw-5'>{title}</p>
        </div>
    )
}

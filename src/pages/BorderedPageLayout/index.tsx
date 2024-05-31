import { FC, ReactNode } from 'react'
import styles from './borderedPageLayout.module.scss'
import { HasNodeChildren } from '../../types/common.types'

type BorderedPageLayoutProps = {
    top?: ReactNode,
    contentClassName?: string
}
export const BorderedPageLayout: FC<BorderedPageLayoutProps & HasNodeChildren> = ({ top, children, contentClassName }) => {
    return (
        <div className={`${styles.borderedPage} gap-15 m-100v f-column`}>
            {
                top ?
                    <div className="wrapper">
                        {top}
                    </div>
                    : null
            }
            <div className={`f-1 ${styles.content} wrapper ${contentClassName || ""}`}>
                {children}
            </div>
        </div>
    )
}

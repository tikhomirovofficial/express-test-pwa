import { FC, ReactNode } from 'react'
import styles from './borderedPageLayout.module.scss'
import { HasNodeChildren } from '../../types/common.types'

type BorderedPageLayoutProps = {
    top?: ReactNode,
    contentClassName?: string
    modal?: {
        level: number
    }
}
export const BorderedPageLayout: FC<BorderedPageLayoutProps & HasNodeChildren> = ({ top, children, contentClassName, modal }) => {
    return (
        <div style={modal !== undefined ? { paddingTop: `${5 + (2 * modal.level)}rem`, zIndex: modal.level * 4 } : undefined} className={`${styles.borderedPage} ${modal !== undefined ? styles.modal : ""} gap-15 m-100v f-column`}>
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

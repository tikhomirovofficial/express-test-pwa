import React, { FC, ReactNode } from 'react'
import styles from './infoPageLayout.module.scss'
import { TickBlueIcon } from '../../icons'
import { YellowButton } from '../../components/YellowButton'

type InfoPageLayoutProps = {
    topContent?: ReactNode,
    image: string,
    title: string
    content: ReactNode
}
export const InfoPageLayout: FC<InfoPageLayoutProps> = ({ image, title, topContent, content }) => {
    return (
        <div className={`m-100v f-c-col puff-in-center`}>
            <div style={{ flex: 1 }} className={`h-100p w-100p ${styles.container} f-column`}>
                <div style={{ backgroundImage: `url(${image})` }} className={`${styles.image} f-column w-100p p-rel`}>
                    <div className={`p-rel h-100p w-100p AppContainer f-column-betw f-1 ${styles.content}`}>
                        {topContent || null}
                        <div className={"f-1 al-end d-f"}>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className={`${styles.gradient} p-abs w-100p`}></div>
                </div>
                {content}
            </div>
        </div >
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { YellowButton } from '../../../components/YellowButton'
import { TickBlueIcon } from '../../../icons'
import { InfoPageLayout } from '../../InfoPageLayout'


export const HowGetResults = () => {
    return <InfoPageLayout
        title={"Как узнать результаты?"}
        image={'images/info/info_get_results.jpg'}
        content={<div className="f-1 f-column wrapper f-column-betw gap-10">
            <div className="list f-column gap-15">
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>По готовности вам придёт уведомление в приложении</p>
                </div>
                <div className={`info-text-item d-f gap-10`}>
                    <TickBlueIcon />
                    <p>Информацию по заказу вы можете найти на главном экране в разделе “Заказы анализов”</p>
                </div>
            </div>
            <div className="f-column gap-30 al-center">
                <Link to={"/"} className={"w-100p"}>
                    <YellowButton>Закрыть</YellowButton>
                </Link>
            </div>
        </div>}
    />
}

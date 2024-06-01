import React from 'react'
import { YellowButton } from '../../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../../BorderedPageLayout'
import { InputField } from '../../../components/InputField'
import styles from '../pinCode.module.scss'

export const PinLogin = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw gap-20"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Подтверждение входа</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column gap-80">
                <div className="f-column gap-20">
                    <p className='fz-m fw-5 txt-center'>Введите код доступа</p>
                    <div className="d-f al-center gap-15 jc-center">
                        <div className="pin-item pin-item-filled"></div>
                        <div className="pin-item"></div>
                        <div className="pin-item"></div>
                        <div className="pin-item"></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.btnsPanel} pd-0-50 f-column gap-30`}>
                <div className="f-column f-row-betw">
                    <div className="pin-btn f-c-col txt-center c-yellow">1</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">2</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">3</div>
                </div>
                <div className="f-column f-row-betw">
                    <div className="pin-btn f-c-col txt-center c-yellow">4</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">5</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">6</div>
                </div>
                <div className="f-column f-row-betw">
                    <div className="pin-btn f-c-col txt-center c-yellow">7</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">8</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">9</div>
                </div>
                <div className="f-column f-row-betw">
                    <div className="pin-btn f-c-col txt-center c-yellow">7</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">0</div>
                    <div className="pin-btn f-c-col txt-center c-yellow">9</div>
                </div>

            </div>
        </BorderedPageLayout>
    )
}

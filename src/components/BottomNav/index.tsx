import React from 'react'
import { AppContainer } from '../../containers/AppContainer'
import styles from './bottomNav.module.scss'
import { HomeIcon, PhoneIcon, ProfileIcon } from '../../icons'
export const BottomNav = () => {
    return (
        <div className={`w-100p ${styles.bottomNav}`}>
            <div className="wrapper">
                <div className="f-row-betw">
                    <div className={`f-column al-center ${styles.navItem} ${styles.navItemCurrent}`}>
                        <HomeIcon />
                        <p className={`c-dark fz-s fw-5`}>Главная</p>
                    </div>
                    <div className={`f-column al-center ${styles.navItem}`}>
                        <PhoneIcon />
                        <p className={`c-dark fz-s fw-5`}>Поддержка</p>
                    </div>
                    <div className={`f-column al-center ${styles.navItem}`}>
                        <ProfileIcon />
                        <p className={`c-dark fz-s fw-5`}>Профиль</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

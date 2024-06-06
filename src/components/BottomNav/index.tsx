import React, { FC } from 'react'
import { AppContainer } from '../../containers/AppContainer'
import styles from './bottomNav.module.scss'
import { HomeIcon, PhoneIcon, ProfileIcon } from '../../icons'
import { Link } from 'react-router-dom'

const navItems = [
    {
        id: 1,
        link: "/orders",
        Icon: HomeIcon,
        name: "Главная"
    },
    {
        id: 2,
        link: "/help",
        Icon: PhoneIcon,
        name: "Поддержка"
    },
    {
        id: 3,
        link: "/profile",
        Icon: ProfileIcon,
        name: "Профиль"
    }
]

type BottomNavProps = {
    current: number
}
export const BottomNav: FC<BottomNavProps> = ({ current }) => {
    return (
        <div className={`w-100p ${styles.bottomNav}`}>
            <div className="wrapper">
                <div className="f-row-betw">
                    {
                        navItems.map(({ id, link, name, Icon }) => (
                            <Link to={link} className={`f-column al-center ${styles.navItem} ${id === current ? styles.navItemCurrent : ""}`}>
                                <Icon />
                                <p className={`c-dark fz-s fw-5`}>{name}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

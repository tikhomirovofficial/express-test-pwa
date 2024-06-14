import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AddIcon, AnalysisIcon, ArrowRight, AvatarIcon, CheckedCircle, DownloadIcon, FinancesIcon, HeartIcon, LogoCircleIcon, LogoIcon, LogoutIcon, PatientsIcon, ProfileCircleIcon, SearchIcon, TelegramIcon, ThemeDarkIcon, TrashIcon, UncheckedCircle, WhatsAppIcon } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import { AnalysisItem } from '../../components/ListItems/AnalysisItem'
import { CartItem } from '../../components/ListItems/CartItem'
import styles from './profile.module.scss'
import { BottomNav } from '../../components/BottomNav'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { handleAboutModal, handleOrdersFinancesModal, handlePatientsModal, handleProfileEditModal } from '../../features/modals/modalsSlice'
import Skeleton from 'react-loading-skeleton'
import { formatBonus } from '../../utils/formatBonusesString'
const loading = !true

export const Profile = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(state => state.profile)
    const { ordersFinancesModal, patientsModal, aboutAppModal, profileEditModal } = useAppSelector(state => state.modals)

    const handleProfileDataModal = () => dispatch(handleProfileEditModal())

    const handlePatients = () => dispatch(handlePatientsModal())

    const handleAbout = () => dispatch(handleAboutModal())

    const handleFinances = () => dispatch(handleOrdersFinancesModal())

    return (
        <BorderedPageLayout
            contentClassName={`f-column gap-50 ${styles.page}`}>
            <div className="f-column gap-15">
                {
                    profile.loadings.profile ? <>
                        <div className="f-column gap-10 al-center">
                            <Skeleton height={24} width={240} borderRadius={6} />
                            <Skeleton height={24} width={150} borderRadius={6} />
                            <Skeleton height={28} width={170} borderRadius={6} />
                        </div>
                    </> : <>
                        <h2 className="title txt-center">{profile.data.last_name} <br />{profile.data.first_name} {profile.data.subname}</h2>
                        <div className={`d-f al-center ${styles.bonuses} gap-5`}>
                            <HeartIcon />
                            <p className={`fz-l c-dark fw-6`}>{formatBonus(profile.data.bonus)}</p>
                        </div>
                    </>
                }
            </div>
            <div className={`f-column gap-15 ${styles.hub}`}>
                <div className="f-row-betw gap-15">
                    <div onClick={handleProfileDataModal} className={`big-btn whiteBorderedBlock f-column-betw al-center gap-15 w-100p ${styles.profileBtn}`}>
                        <ProfileCircleIcon />
                        <div className="f-column f-1 ">
                            <p className='c-black txt-center fw-5 fz-m'>Личные данные</p>
                            <p className='fz-s c-lg txt-center'>ФИО, пол</p>
                        </div>
                    </div>
                    <div onClick={handleFinances} className={`big-btn whiteBorderedBlock f-column-betw al-center gap-15 w-100p ${styles.profileBtn}`}>
                        <FinancesIcon />
                        <div className="f-column f-1 ">
                            <p className='c-black txt-center fw-5 fz-m'>Финансы</p>
                            <p className='fz-s c-lg txt-center'>Бонусы и реквизиты</p>
                        </div>
                    </div>
                </div>
                <div className="f-row-betw gap-15">
                    <div onClick={handlePatients} className={`big-btn whiteBorderedBlock f-column-betw al-center gap-15 w-100p ${styles.profileBtn}`}>
                        <PatientsIcon />
                        <div className="f-column f-1">
                            <p className='c-black txt-center fw-5 fz-m'>Мои пациенты</p>
                            <p className='fz-s c-lg txt-center'>Список ваших пациентов</p>
                        </div>
                    </div>
                    <div onClick={handleAbout} className={`big-btn whiteBorderedBlock f-column-betw al-center gap-15 w-100p ${styles.profileBtn}`}>
                        <LogoCircleIcon />
                        <div className="f-column f-1">
                            <p className='c-black txt-center fw-5 fz-m'>О системе</p>
                            <p className='fz-s c-lg txt-center'>Правовая информации</p>
                        </div>
                    </div>
                </div>
                <div className="f-row-betw gap-15">
                    <div className={`big-btn whiteBorderedBlock f-column-betw al-center gap-15 w-100p ${styles.profileBtn}`}>
                        <ThemeDarkIcon />
                        <div className="f-column f-1">
                            <p className='c-black txt-center fw-6 fz-m'>Включить<br /> тёмную тему</p>
                        </div>
                    </div>
                    <div className={`big-btn whiteBorderedBlock f-column-betw al-center gap-15 w-100p ${styles.profileBtn}`}>
                        <LogoutIcon />
                        <div className="f-column f-1">
                            <p className='c-error txt-center fw-6 fz-m'>Выйти из <br /> приложения</p>
                        </div>
                    </div>
                </div>
            </div>
        </BorderedPageLayout>
    )
}

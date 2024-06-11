import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AvatarIcon, CheckedCircle, SearchIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import Skeleton from 'react-loading-skeleton'

const loading = false

export const OrderPatient = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Назначение анализов</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column-betw f-1 gap-15">
                <div className="f-column gap-25">
                    <div className="f-row-betw">
                        <h2 className="title">Выберите пациента</h2>
                        <div className="al-center gap-5 d-f">
                            <div className="dot-active dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="f-column gap-15">
                        <div className="d-f pd-10 al-center gap-5 search-block w-100p">
                            <SearchIcon />
                            <input className='w-100p fz-m' type="text" placeholder='Найти по номеру телефона' />
                        </div>
                        <div style={{ textDecoration: "underline" }} className='textButton'>Новый номер телефона</div>
                    </div>
                </div>
                <div className="f-1 p-rel">
                    {
                        !loading ?
                            <div className="list p-abs w-100p f-column scrollableItemsList">
                                {
                                    [1, 2, 3, 4, 5].map(item => (
                                        <PatientItem />
                                    ))
                                }
                            </div> :
                            <>
                                <div className="f-column gap-5">
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                    <Skeleton borderRadius={6} height={50} />
                                </div>
                            </>
                    }
                </div>
                <YellowButton>Далее</YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

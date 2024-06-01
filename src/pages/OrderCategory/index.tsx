import React from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { ArrowRight, AvatarIcon, CheckedCircle, SearchIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'

export const OrderCategory = () => {
    return (
        <BorderedPageLayout
            contentClassName={"f-column-betw"}
            top={
                <div className='f-row-betw'>
                    <div></div>
                    <h2 className="title fw-6">Иван Иванович</h2>
                    <div></div>
                </div>
            }>
            <div className="f-column-betw f-1 gap-30">
                <div className="f-column gap-25">
                    <div className="f-row-betw">
                        <h2 className="title">Выберите категорию</h2>
                        <div className="al-center gap-5 d-f">
                            <div className="dot"></div>
                            <div className="dot-active dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                    <div className="f-column gap-15">
                        <div className="d-f pd-10 al-center gap-5 search-block w-100p">
                            <SearchIcon />
                            <input className='w-100p fz-m' type="text" placeholder='Найти по названию' />
                        </div>
                    </div>
                </div>
                <div className="f-1 p-rel">
                    <div className="list p-abs w-100p f-column scrollableItemsList gap-10">
                        <div className="category-item f-row-betw gap-15">
                            <div className="d-f gap-5">
                                <p className='c-dark fz-m fw-5'>Прочее</p>
                                <p className='c-lg fz-m fw-5'>
                                    156
                                </p>
                            </div>
                            <div className="f-c-col">
                                <ArrowRight />
                            </div>
                        </div>
                        <div className="category-item f-row-betw gap-15">
                            <div className="d-f gap-5">
                                <p className='c-dark fz-m fw-5'>Анализ на микроэлементы, витамины, кислоты, аминокислоты</p>
                                <p className='c-lg fz-m fw-5'>
                                    156
                                </p>
                            </div>
                            <div className="f-c-col">
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                <YellowButton>Далее</YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

import React, { useEffect, useState } from 'react'
import { YellowButton } from '../../components/YellowButton'
import { Link, useNavigate } from 'react-router-dom'
import { BorderedPageLayout } from '../BorderedPageLayout'
import { InputField } from '../../components/InputField'
import { AvatarIcon, CheckedCircle, SearchIcon, UncheckedCircle } from '../../icons'
import { PatientItem } from '../../components/ListItems/PatientItem'
import Skeleton from 'react-loading-skeleton'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setPatient, resetOrderBonusesTotal } from '../../features/order/orderSlice'
import { getSearchPatients, incrementSearchedPatientsPart, resetSearchedPatients } from '../../features/patients/patientsSlice'
import { useDeferred } from '../../hooks/useDeffered'
import { usePagination } from '../../hooks/usePagination'
import { clearCart } from '../../features/cart/cartSlice'

export const OrderPatient = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const { patientData } = useAppSelector(state => state.order)
    const { searched_list, loadings, searched_can_next, searched_part } = useAppSelector(state => state.patients)
    const [searchVal, setSearchVal] = useState("")
    const defferedSearchVal = useDeferred(searchVal, 100)

    const [patientSelected, setPatientSelected] = useState<number>(patientData.id > 0 ? patientData.id : -1)

    const [loadSearchedPatients, loadMore] = usePagination(
        () => { dispatch(getSearchPatients({ part: searched_part, pacient: searchVal })) },
        () => { dispatch(incrementSearchedPatientsPart()) },
        {
            part: searched_part,
            can_more: searched_can_next,
            items: searched_list,
            loading: loadings.search_patients_pagination
        }
    )

    const handleToMyPatients = () => {
        alert("to home")
    }

    const handleSelectPatient = (id: number) => {
        if (id) {
            setPatientSelected(id)
            const patientData = searched_list.filter(item => item.id === id)[0]
            dispatch(setPatient({
                id: patientData.id,
                first_name: patientData.first_name || "",
                last_name: patientData.last_name || ""
            }))
            dispatch(clearCart())
        }
    }

    const toSelectCategory = () => {
        navigate("/order/category")
    }

    const openNewPatient = () => {
        navigate("/inviting/phone")
    }

    useEffect(() => {
        dispatch(resetSearchedPatients())
    }, [defferedSearchVal])

    useEffect(loadSearchedPatients, [searched_part])

    useEffect(() => {
        dispatch(resetOrderBonusesTotal())
    }, []);

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
                            <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='w-100p fz-m' type="text" placeholder='Найти по номеру телефона' />
                        </div>
                        <div onClick={openNewPatient} style={{ textDecoration: "underline" }} className='textButton'>Новый номер телефона</div>
                    </div>
                </div>
                <div className="f-1 p-rel">
                    {
                        !loadings.search_patients ?
                            <div className="list p-abs w-100p f-column scrollableItemsList">
                                {
                                    searched_list.map(item => (
                                        <PatientItem
                                            handlePress={() => handleSelectPatient(item.id)}
                                            isRadio={true}
                                            key={item.id}
                                            selected={patientSelected === item.id}
                                            {...item} />
                                    ))
                                }
                                {
                                    searched_can_next ?
                                        <div style={{ marginTop: 15 }} className="f-c-col">
                                            <YellowButton className='fz-s mini-btn' onClick={loadMore} loading={loadings.search_patients_pagination}>Загрузить еще</YellowButton>
                                        </div>
                                        : null
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
                <YellowButton disabled={patientSelected === -1} onClick={toSelectCategory}>Далее</YellowButton>
            </div>
        </BorderedPageLayout>
    )
}

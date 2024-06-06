import React from 'react'
import Loader from '../../components/Preloader'
import { WifiProblemIcon } from '../../icons'
import { YellowButton } from '../../components/YellowButton'

export const WifiProblem = () => {
  return (
    <div className={`f-c-col h-100v w-100v`}>
      <div className="wrapper f-column gap-20 f-c-col">
        <WifiProblemIcon />
        <p className='txt-center fz-m fw-5 c-black'>Отсутствует подключение к интернету. Пожалуйста проверьте настройки сети</p>
        <YellowButton>Обновить</YellowButton>
      </div>

    </div>
  )
}

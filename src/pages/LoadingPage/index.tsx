import React from 'react'
import Loader from '../../components/Preloader'

export const LoadingPage = () => {
  return (
    <div className={`f-c-col h-100v w-100v`}>
        <Loader width={30} height={30}/>
    </div>
  )
}

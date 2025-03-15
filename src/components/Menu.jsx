import React from 'react'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import ResDeatails from './ResDetails'
import RestaurantBanner from './RestaurantBanner'

const Menu = () => {
    const params = useParams()
    const data = useRestaurantMenu(params?.id)

    return (
    <div className='w-[75vw] m-auto'>
      <RestaurantBanner title={data?.title?.name}/>
      <ResDeatails />
    </div>
  )
}

export default Menu
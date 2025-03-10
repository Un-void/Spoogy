import React from 'react'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'

const Menu = () => {
    const params = useParams()
    const url = useRestaurantMenu(params?.id)
    console.log("Params", params)
  return (
    <div>Menu</div>
  )
}

export default Menu
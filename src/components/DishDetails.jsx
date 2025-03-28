import React from 'react'
import { DISH_URL } from '../Constants/config'

const DishDetails = ({imgUrl, isVeg, title, price, avgRating, description}) => {
  return (
    <div className='flex justify-between py-5'>
        <div>
          <div>
              {isVeg ? "🟢" : "🔴"}
          </div>
          <h1 className='font-bold text-gray-600 text-lg'>{title}</h1>
          <h1 className='font-extrabold '>₹{price}</h1>
          <p className='text-green-900 font-extrabold text-sm py-2'>⭐{avgRating}</p>
          <p>{description}</p>
        </div>
        <div>
            <img className="h-[25vh] w-[21vw] object-cover rounded-lg" src={DISH_URL + imgUrl} alt="" />
        </div>
    </div>
  )
}

export default DishDetails
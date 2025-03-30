import React from 'react'
import { DISH_URL } from '../Constants/config'
import { useState } from 'react'

const DishDetails = ({ imgUrl, isVeg, title, price, avgRating, description }) => {
  const [showDescription, setshowDescription] = useState(false)

  return (
    <div className='flex justify-between py-5 border-b-4 my-5'>
      <div className='w-[65%]'>
        <div>
          {isVeg ? "🟢" : "🔴"}
        </div>
        <h1 className='font-bold text-gray-600 text-lg'>{title}</h1>
        <h1 className='font-extrabold '>₹{price}</h1>
        <p className='text-green-900 font-extrabold text-sm py-2'>⭐{avgRating}</p>
        <span className='w-full'>
          {!showDescription ? (description ? description.split(" ").slice(0, 15).join(" ") : "No description available") : description}
          &nbsp;&nbsp;
        </span>
        {
          description && description.length > 125 && (
            <button onClick={() => setshowDescription(!showDescription)}>
              {showDescription ? "...less" : "...more"}
            </button>
          )}
      </div>
      <div className='w-[30%]'>
        <img className="h-[26vh] w-[16vw] object-cover rounded-lg" src={DISH_URL + imgUrl} alt="" />
      </div>
    </div>
  )
}

export default DishDetails
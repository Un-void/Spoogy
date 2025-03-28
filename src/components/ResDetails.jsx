import React from 'react'

const ResDetails = ({avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName}) => {
  return (
    <div className='flex flex-col shadow-2xl rounded-3xl border-gray-400 border-[0.2px] p-6 m-4 mt-10 gap-2'>
        <div className='font-bold text-xl'>⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}</div>
        <div className="text-orange-500 underline font-bold">{Array.isArray(cuisines) ? cuisines.join(",  ") : cuisines}</div>
        <div className='flex p-2 gap-2'>
            <div className='flex flex-col mt-1 items-center'>
                <div className='h-2 w-2 bg-gray-400 rounded-[50%]'></div>
                <div className='h-[23px] w-[1px] bg-gray-400'></div>
                <div className='h-2 w-2 bg-gray-400 rounded-[50%]'></div>
            </div>
            <div className='flex flex-col'>
                <div className='font-bold'>Outlet <span className='text-gray-600 font-normal ms-3'>{areaName}</span></div>
                <div className='font-bold'>25-30 mins</div>
            </div>
        </div>
    </div>
  )
}

export default ResDetails
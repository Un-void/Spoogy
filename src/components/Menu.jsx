import React from 'react'
import { useParams } from 'react-router'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import ResDetails from './ResDetails'
import RestaurantBanner from './RestaurantBanner'
import CategoryContainer from './CategoryContainer'

const Menu = () => {
    const params = useParams()
    const data = useRestaurantMenu(params?.id)
    const {title, normalMenu, nestedMenu} = data
    console.log("MENU", data)

    return (
    <div className='w-[75vw] m-auto'>
      <RestaurantBanner title={title?.name}/>
      <ResDetails {...data?.title}/>
      {
        normalMenu.map(category =>{
          return <CategoryContainer
          key={category?.card?.card?.categoryId}
          title={category?.card?.card?.title} 
          count={category?.card?.card?.itemCards.length}
          collection ={category?.card?.card?.itemCards}
          />
        })
      }
      {
        nestedMenu.map((mainCategory) => (
        <>
          <RestaurantBanner 
          title={mainCategory?.card?.card?.title}
          key={mainCategory?.card?.card?.categoryId}/>
          {mainCategory?.card?.card?.categories.map((subCategory) =>(
            <CategoryContainer 
            key={subCategory?.categoryId}
            title={subCategory?.title} 
            count={subCategory?.itemCards.length}
            collection ={subCategory?.itemCards} 
            />
          ))}
        </>))}
    </div>
  )
}

export default Menu
import React from "react"
import Cards from "./Cards"
import ShimmerCard from "./ShimmerCard"
import { useState, useEffect } from "react"
import { Data, API_URL } from "../Constants/config"

const CardContainer = () =>{

    const [NewData, setNewData] = useState(Data)

    const getRestaurantData = async() =>{
        const response = await fetch(API_URL);
        const data = await response.json()
        console.log("json", data.data.cards[0])
        console.log("json", data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    const handleRating = () =>{
        const filteredList = Data.filter(restaurant =>
         restaurant.rating >= 4.8
     )
      setNewData(filteredList)
      console.log("filteredList", filteredList)
    }

    getRestaurantData();
    return(
        <>  
            <button className="ms-48 mt-5 w-36 py-2 px-5 rounded-md bg-gray-400 hover:bg-gray-500" onClick={handleRating}>Top Rated !</button>
            <div className="m-auto flex gap-6 justify-start w-3/4 mt-16 flex-wrap">
                {
                    NewData.map((restaurant)=>{
                        return <Cards 
                        {...restaurant }
                        />
                    })
                }
            </div>
            {/* <ShimmerCard/> */}
        </>
    )
}

export default CardContainer
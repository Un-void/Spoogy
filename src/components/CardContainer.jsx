import React from "react"
import Cards from "./Cards"
import ShimmerCard from "./ShimmerCard"
import { useState, useEffect } from "react"
import { IMG_URL, API_URL } from "../Constants/config"

const CardContainer = () => {

    const [NewData, setNewData] = useState([])
    const [SearchText, setSearchText] = useState("")
    const [OriginalData, setOriginalData] = useState([]);

    const getRestaurantData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json()
        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setNewData(restaurants)
        setOriginalData(restaurants)
        console.log(restaurants[0])
    }

    const handleSearchText = (val) => {
        setSearchText(val)
    }

    const handleRating = () => {
        const filteredList = OriginalData.filter(restaurant =>
            restaurant.info.avgRating >= 4.5
        )
        setNewData(filteredList)
    }

    useEffect(() => {
        getRestaurantData();
        console.log("UseEffect called !")
    }, [SearchText])

    console.log("Rendered...")
    return (
        <>
            <div className="w-3/6 m-auto flex justify-between items-center pt-5 mt-5">
                <input type="text" className="border w-2/4 shadow-md h-4/5 p-1 rounded-md" onChange={handleSearchText} />
                <button className="w-36 px-5 py-2 rounded-md bg-gray-400 hover:bg-gray-500" onClick={handleRating}>Top Rated !</button>
            </div>
            <div className="m-auto flex gap-6 justify-start w-3/4 mt-16 flex-wrap">
                {NewData.length === 0 ?
                    (<ShimmerCard />)
                    :
                    (NewData.map((restaurant) => {
                        return <Cards
                            {...restaurant?.info}
                        />
                    })
                    )}
            </div>

        </>
    )
}

export default CardContainer
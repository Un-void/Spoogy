import React from "react"
import Cards from "./Cards"
import ShimmerCard from "./ShimmerCard"
import { useState, useEffect } from "react"
import { IMG_URL, API_URL } from "../Constants/config"

const CardContainer = () => {

    const [NewData, setNewData] = useState([])
    const [SearchText, setSearchText] = useState("")
    const [OriginalData, setOriginalData] = useState([]);
    const [errorMessage, seterrorMessage] = useState()

    const handleSearchText = (val) => {
        setSearchText(val)
    }

    const handleRating = () => {
        const filteredList = OriginalData.filter(restaurant =>
            restaurant?.info?.avgRating >= 4.5
        )
        setNewData(filteredList)
    }

    const checkVeg = () => {
        const filteredList = OriginalData.filter(restaurant =>
            restaurant?.info?.veg == true
        )
        setNewData(filteredList)
    }

    const handleSearch = () => {
        const result = OriginalData.filter((restaurant) =>
            restaurant?.info?.name.toLowerCase().includes(SearchText.toLowerCase())
        );
    
        setNewData(result);
        console.log("result: ", result);
    };

    useEffect(() => {
        const getRestaurantData = async () => {
            const response = await fetch(API_URL);
            try{
                if(response.ok){
                const data = await response.json()
                const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                setNewData(restaurants)
                console.log(restaurants)
                setOriginalData(restaurants)
                console.log("USE CALLED !!")
                }
                else{
                    if(response.status==400){
                        throw new Error("Bad request")
                    }
                    if(response.status==401){
                        throw new Error("Unauthorized request")
                    }
                    if(response.status==403){
                        throw new Error("Requested content is forbidden")
                    }
                    if(response.status==404){
                        throw new Error("Requested resource not found!")
                    }
                    else{
                        throw new Error("Kuch to gadbad hai daya !!??")
                    }
                }
            }
            catch (error){
                seterrorMessage(error.message)
                console.log("error", errorMessage);
            }
        };
        getRestaurantData();
    }, []);

    console.log("Rendered...")
    return (
        <div className="px-5 mx-5">
            <div className="w-5/6 flex justify-around items-center pt-5 m-5">
                <button className="w-36 px-5 py-2 rounded-md bg-gray-400 hover:bg-gray-500" onClick={handleRating}>Top Rated !</button>
                <button className="w-36 px-5 py-2 rounded-md bg-gray-400 hover:bg-gray-500" onClick={checkVeg}>Pure Veg</button>
                <div className="flex shadow-lg rounded-lg overflow-hidden">
                    <input type="text" className="p-1 focus:outline-none" 
                    value={SearchText} onChange={(e) => handleSearchText(e.target.value)} />
                    <button className="border align-middle p-1 bg-slate-400  hover:bg-slate-500" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className=" flex gap-6 justify-around mt-16 mx-8 flex-wrap">
                {NewData.length === 0 && !errorMessage?
                    (<ShimmerCard />)
                    :
                    (NewData.map((restaurant) => {
                        return <Cards {...restaurant?.info} key={restaurant?.info.id}/>
                    })
                    )}
            </div>
        </div>
    )
}

export default CardContainer
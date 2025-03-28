import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import ShimmerCard from "./ShimmerCard";
import useRestaurant from "../utils/useRestaurant";
import SearchBar from "./SearchBar";

const CardContainer = () => {
    const [notFound, setNotFound] = useState(false);
    const restaurantData = useRestaurant();
    const {errorMessage, OriginalData, NewData, setNewData} = restaurantData

    const handleRating = () => {
        const filteredList = OriginalData.filter(
            (restaurant) => restaurant?.info?.avgRating >= 4.5
        );
        setNewData(filteredList);
    };

    const checkVeg = () => {
        const filteredList = OriginalData.filter(
            (restaurant) => restaurant?.info?.veg === true
        );
        setNewData(filteredList);
    };

    if(errorMessage){
        return<div className="flex justify-center p-10 font-bold text-2xl ">{errorMessage}</div>
    }
    return (
        <div className="px-5 mx-5">
            <div className="w-5/6 flex justify-around items-center pt-5 m-5">
                <button className="w-36 px-5 py-2 rounded-md bg-gray-400 hover:bg-gray-500" onClick={handleRating}>
                    Top Rated !
                </button>
                <button className="w-36 px-5 py-2 rounded-md bg-gray-400 hover:bg-gray-500" onClick={checkVeg}>
                    Pure Veg
                </button>
                <SearchBar MasterData={OriginalData} updater={setNewData} setnotFound={setNotFound}/>
            </div>
            <div className="flex gap-4 justify-around mt-16 m-auto flex-wrap">
                {notFound ? (
                    <div className="text-center text-xl font-bold text-red-500">No Restaurants Found</div>
                ) : NewData.length === 0 && !errorMessage ? (
                    <ShimmerCard />
                ) : (
                    NewData.map((restaurant) => <Cards {...restaurant?.info} key={restaurant?.info.id} />)
                )}
            </div>
        </div>
    );
};

export default CardContainer;

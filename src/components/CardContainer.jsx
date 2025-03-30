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
        <div className="px-4 sm:px-6 md:px-12">
            <div className="w-full flex flex-wrap justify-center gap-4 items-center pt-5 m-5">
                <button className="w-32 sm:w-36 px-5 py-2 rounded-md bg-gray-400 hover:bg-gray-500 transition" onClick={handleRating}>
                    Top Rated !
                </button>
                <button className="w-32 sm:w-36 px-5 py-2 rounded-md bg-gray-400 hover:bg-gray-500 transition" onClick={checkVeg}>
                    Pure Veg
                </button>
                <SearchBar MasterData={OriginalData} updater={setNewData} setnotFound={setNotFound}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-10">
                {notFound ? (
                    <div className="text-center text-lg sm:text-xl font-bold text-red-500">No Restaurants Found</div>
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

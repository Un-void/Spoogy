import { useEffect, useState } from "react";
import { API_URL } from "../Constants/config";

const useRestaurant = () => {

    const [NewData, setNewData] = useState([])
    const [OriginalData, setOriginalData] = useState([]);
    const [errorMessage, seterrorMessage] = useState()
    
    useEffect(() => {
        const getRestaurantData = async () => {
            const response = await fetch(API_URL);
            try {
                if (response.ok) {
                    const data = await response.json()
                    const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    setNewData(restaurants)
                    setOriginalData(restaurants)
                }
                else {
                    if (response.status == 400) {
                        throw new Error("Bad request")
                    }
                    if (response.status == 401) {
                        throw new Error("Unauthorized request")
                    }
                    if (response.status == 403) {
                        throw new Error("Requested content is forbidden")
                    }
                    if (response.status == 404) {
                        throw new Error("Requested resource not found!")
                    }
                    else {
                        throw new Error("Kuch to gadbad hai daya !!??")
                    }
                }
            }
            catch (error) {
                seterrorMessage(error.message)
                console.log("error", errorMessage);
            }
        };
        getRestaurantData();
    }, []);

    const resObj={
        NewData : NewData,
        OriginalData : OriginalData,
        errorMessage : errorMessage,
        setNewData : setNewData
    }

    return resObj;
}

export default useRestaurant
import { useState, useEffect } from "react";
import { GenerateMenu_URL } from "../Constants/config";

const useRestaurantMenu = (id) => {
    const [menu, setMenu] = useState(null);
    const MENU_URL = GenerateMenu_URL(id);
    const [resInfo, setResInfo] = useState([])

    const getMenuData = async () => {
        try {
            const response = await fetch(MENU_URL);
            const data = await response.json();
            setMenu(data?.data?.cards);
            setResInfo(data?.data?.cards[2]?.card?.card?.info)
            // console.log(menu[2]?.card?.card?.info?.name)
            console.log("resIfo", resInfo)
            console.log("Data", menu)
            const resData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            const filteredNormalData = resData.filter(resItem => resItem?.card?.card?.[`@type`] === `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory`)
            const filteredNestedlData = resData.filter(resItem => resItem?.card?.card?.[`@type`] === `type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory`)

            console.log("Filtered normal", filteredNormalData)
            console.log("Nested data", filteredNestedlData)
        } catch (error) {
            console.log("Error fetching menu:", error);
        }
    };

    useEffect(() => {
        getMenuData()
    }, [])

    const menuObj ={
        title : resInfo
    }
    return menuObj;
    }

export default useRestaurantMenu;

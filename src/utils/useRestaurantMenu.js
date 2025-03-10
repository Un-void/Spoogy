// import { useState, useEffect } from "react";
// import { GenerateMenu_URL } from "../Constants/config";

// const useRestaurantMenu = (id) =>{
//     const MENU_URL = GenerateMenu_URL(id)
//     const [Menu, setMenu] = ([])
//     }

//     useEffect(() =>{
//             const getMenuData = async()=>{
//             try{
//                 const response = await fetch(MENU_URL)
//                 const data = await response.json()
//                 setMenu(data);
//             }
//             catch(error){
//                 console.log("error", error)
//             }
//      };
//       getMenuData();
//     },[])
//     return Menu


// export default useRestaurantMenu

import { useState, useEffect } from "react";
import { GenerateMenu_URL } from "../Constants/config";

const useRestaurantMenu = (id) => {
    const [menu, setMenu] = useState(null);
    const MENU_URL = GenerateMenu_URL(id);

    useEffect(() => {
        const getMenuData = async () => {
            try {
                const response = await fetch(MENU_URL);
                const data = await response.json();
                setMenu(data);
                console.log(data?.data?.statusMessage)
            } catch (error) {
                console.log("Error fetching menu:", error);
            }
        };

        getMenuData();
    }, [MENU_URL]);

    return menu;
};

export default useRestaurantMenu;

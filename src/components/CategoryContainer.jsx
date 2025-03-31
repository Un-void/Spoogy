// import React from "react";
// import DishDetails from "./DishDetails";

// const CategoryContainer =({title, count, collection}) =>{
//     return(
//     <div className="w-5/6 m-auto py-5" >
//     <h1 className="font-extrabold text-lg">{title} ({count})</h1>
//     {
//         collection?.map(fooditem =>(
//             <DishDetails key={fooditem?.card?.info?.id}
//             imgUrl ={fooditem?.card?.info?.imageId}
//             isVeg ={fooditem?.card?.info?.isVeg}
//             title ={fooditem?.card?.info?.name}
//             price={
//                 fooditem?.card?.info?.price ?  fooditem?.card?.info?.price / 100 : fooditem?.card?.info?.defaultPrice/ 100
//             }
//             avgRating ={fooditem?.card?.info?.ratings?.aggregatedRating?.rating || "Be the first to try and review"}
//             description = {fooditem?.card?.info?.description}/>
//         ))
//     }
    
//     </div>
//     )
// }

// export default CategoryContainer


import React, { useState } from "react";
import DishDetails from "./DishDetails";

const CategoryContainer = ({ title, count, collection }) => {
  const [isOpen, setIsOpen] = useState(true); // Default: Open state

  return (
    <div className="w-5/6 m-auto py-5">
      <h1
        className="font-extrabold text-lg cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} ({count}) 
        <span className="ml-5 text-gray-700">{isOpen ? "▲" : "▼"}</span>
      </h1>
      
      {isOpen && (
        <div>
          {collection?.map((fooditem) => (
            <DishDetails
              key={fooditem?.card?.info?.id}
              imgUrl={fooditem?.card?.info?.imageId}
              isVeg={fooditem?.card?.info?.isVeg}
              title={fooditem?.card?.info?.name}
              price={
                fooditem?.card?.info?.price
                  ? fooditem?.card?.info?.price / 100
                  : fooditem?.card?.info?.defaultPrice / 100
              }
              avgRating={
                fooditem?.card?.info?.ratings?.aggregatedRating?.rating ||
                "Be the first to try and review"
              }
              description={fooditem?.card?.info?.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryContainer;

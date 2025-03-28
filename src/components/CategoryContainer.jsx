import React from "react";
import DishDetails from "./DishDetails";

const CategoryContainer =({title, count, collection}) =>{
    return(
    <div className="w-5/6 m-auto py-5" >
    <h1>{title} ({count})</h1>
    {
        collection.map(fooditem =>{
            return <DishDetails key={fooditem?.card?.info?.id}
            imgUrl ={fooditem?.card?.info?.imageId}
            isVeg ={fooditem?.card?.info?.isVeg}
            title ={fooditem?.card?.info?.name}
            price ={fooditem?.card?.info?.price/100}
            avgRating ={fooditem?.card?.info?.ratings?.aggregatedRating?.rating}
            description = {fooditem?.card?.info?.description}/>
        })
    }
    </div>
    )
}

export default CategoryContainer
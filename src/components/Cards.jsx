import { IMG_URL } from "../Constants/config"
import { Link } from "react-router"

const Cards = ({id, cloudinaryImageId, name, avgRating, sla, cuisines, locality}) =>{
    return(
        
            <Link to={`menu/${id}`} className="w-64 shadow-lg rounded-lg my-2 pb-3">
                <img src={IMG_URL + cloudinaryImageId} className="w-60 m-auto h-40 object-cover rounded-xl shadow-md"/>
                <p className="font-extrabold text-xl ms-2 my-2">{name}</p>
                <div className="flex ms-2">
                    <div className="font-semibold">⭐{avgRating}</div>
                    <div className="font-bold ps-2">{sla?.deliveryTime}.mins</div>
                </div>
                <div className="text-gray-500 ms-2 my-2">
                    <div >{cuisines.join(", ")}</div>
                    <div>{locality}</div>
                </div>
            </Link>
       
    )
}

export default Cards
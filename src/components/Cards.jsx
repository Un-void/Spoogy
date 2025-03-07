import { IMG_URL } from "../Constants/config"

const Cards = ({cloudinaryImageId, name, avgRating, sla, cuisines, locality}) =>{
    return(
        <>
            <div className="w-64 shadow-lg rounded-lg my-2 pb-3">
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
            </div>
        </>
    )
}

export default Cards
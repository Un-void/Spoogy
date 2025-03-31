import { Link } from "react-router"
import { IMG_URL } from "../Constants/config";

const Cards = ({ id, cloudinaryImageId, name, avgRating, sla, cuisines, locality }) => {
    return (
        <Link to={`menu/${id}`}className="w-full max-w-64 shadow-lg rounded-lg my-2 pb-3 hover:scale-105 transition-transform duration-300">
            <img
                src={IMG_URL + cloudinaryImageId}
                className="w-full h-40 object-cover rounded-t-lg shadow-md"
                alt={name}
            />
            <p className="font-extrabold text-lg sm:text-xl ms-2 my-2">{name}</p>
            <div className="flex ms-2">
                <div className="font-semibold text-sm sm:text-base">⭐ {avgRating}</div>
                <div className="font-bold ps-2 text-sm sm:text-base">{sla?.deliveryTime} mins</div>
            </div>
            <div className="text-gray-500 ms-2 my-2 text-sm">
                <div>{cuisines.join(", ")}</div>
                <div>{locality}</div>
            </div>
        </Link>
    );
};

export default Cards;

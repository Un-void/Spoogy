

const Cards = ({link, restaurantName, rating, deliveryTime, cusines, location}) =>{
    return(
        <>
            <div className="w-56">
                <img src={link} className="w-56 h-36 object-cover rounded-xl shadow-md"/>
                <p className="font-extrabold text-xl ms-2">{restaurantName}</p>
                <div className="flex ms-2">
                    <div className="font-semibold">⭐{rating}</div>
                    <div className="font-bold ps-2">{deliveryTime}</div>
                </div>
                <div className="text-gray-500 ms-2">
                    <div >{cusines}</div>
                    <div>{location}</div>
                </div>
            </div>
        </>
    )
}

export default Cards
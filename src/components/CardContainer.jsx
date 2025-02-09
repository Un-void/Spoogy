import Cards from "./Cards"

const CardContainer = () =>{
    const Data = [
        {
            link:"https://images8.alphacoders.com/369/369063.jpg",
            restaurantName:"Pizza Hut",
            rating:4.5,
            deliveryTime:".30-40 mins",
            cusines:"Italian, Mexican",
            location:"Pizzapur"
        },
        {
            link:"https://sm.mashable.com/t/mashable_in/photo/default/yaki-gyoza-copy_tdhg.1248.jpg",
            restaurantName:"Momosur",
            rating:4.2,
            deliveryTime:".40-50 mins",
            cusines:"Chinese, Japanese",
            location:"Momostan"
        },
        {
            link:"https://assets.gqindia.com/photos/5e13119f28dff200080a598d/master/pass/top-image.jpg",
            restaurantName:"Bhole Chature",
            rating:4.9,
            deliveryTime:".10-15 mins",
            cusines:"North & West Indian",
            location:"Gali Gali"
        },
        {
            link:"https://i.ytimg.com/vi/Ws4r2GugOFI/maxresdefault.jpg",
            restaurantName:"Chacha-Bhatija",
            rating:4.6,
            deliveryTime:".20-25 mins",
            cusines:"Snacks and feastables",
            location:"Khau-Galli"
        },
        {
            link:"https://th.bing.com/th/id/OIP.tM-3dL5c1BYo55QLOps2XwAAAA?rs=1&pid=ImgDetMain",
            restaurantName:"Murgiyan",
            rating:4.1,
            deliveryTime:".30 mins",
            cusines:"American fast food",
            location:"R-city"
        },
        {
            link:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ad/84/b2/rajdhani.jpg?w=600&h=400&s=1",
            restaurantName:"Khanawal",
            rating:4.8,
            deliveryTime:".40 mins",
            cusines:"Punjabi, South Indian, Maharashtrian",
            location:"Bhatwadi"
        }
    ]

    return(
        <>
            <div className="m-auto flex gap-6 justify-start w-3/4 mt-24 flex-wrap">
                {
                    Data.map((restaurant)=>{
                        return <Cards 
                        link={restaurant.link}
                        restaurantName={restaurant.restaurantName}
                        rating={restaurant.rating}
                        deliveryTime={restaurant.deliveryTime}
                        cusines={restaurant.cusines}
                        location={restaurant.location}
                        />
                    })
                }
            </div>
        </>
    )
}

export default CardContainer
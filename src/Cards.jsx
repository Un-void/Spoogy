

const Cards = () =>{
    return(
        <>
            <div className="w-56">
                <img src="https://images8.alphacoders.com/369/369063.jpg" alt="PizzaHut" className="w-56 h-36 object-cover rounded-xl shadow-md"/>
                <p className="font-extrabold text-xl ms-2">Pizza Hut</p>
                <div className="flex ms-2">
                    <div className="font-semibold">⭐4.4</div>
                    <div className="font-bold">.30-35 mins</div>
                </div>
                <div className="text-gray-500 ms-2">
                    <div >Italian, Mexican</div>
                    <div>Pizzapur, Olives</div>
                </div>
            </div>
        </>
    )
}

export default Cards
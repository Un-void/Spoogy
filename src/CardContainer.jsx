import Cards from "./Cards"

const CardContainer = () =>{
    return(
        <>
            <div className="m-auto flex gap-6 justify-start w-3/4 mt-24 flex-wrap">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </>
    )
}

export default CardContainer
const ShimmerCard = () => {
    return (
        <div className="flex gap-4 flex-wrap justify-around m-auto mt-16">
            {new Array(20).fill(0).map((card, index) => (
                <div key={index} className="w-64">
                    <div className="w-64 h-36 bg-gray-300 rounded-xl shadow-lg"></div>
                    <p className="ms-2 mt-3 bg-gray-300 h-5"></p>
                    <div className="flex mt-3 ms-2 justify-around">
                        <div className="bg-gray-300 h-3 w-1/3"></div>
                        <div className="ps-2 bg-gray-300 h-3 w-1/3"></div>
                    </div>
                    <div className="ms-2">
                        <div className="bg-gray-300 h-4 my-2"></div>
                        <div className="bg-gray-300 h-4"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default ShimmerCard
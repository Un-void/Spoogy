const ShimmerCard = () => {
    return (
        <div className="flex flex-wrap justify-around mt-16">
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

// const ShimmerCard = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 mt-10">
//             {new Array(20).fill(0).map((_, index) => (
//                 <div key={index} className="w-72 max-w-72 shadow-lg rounded-lg pb-3 bg-gray-200">
//                     <div className="w-64 h-40 bg-gray-300 rounded-t-lg"></div>
//                     <div className="ms-2 mt-3 h-6 bg-gray-300 rounded w-3/4"></div>
//                     <div className="flex ms-2 mt-3 justify-around">
//                         <div className="h-4 bg-gray-300 rounded w-1/3"></div>
//                         <div className="h-4 bg-gray-300 rounded w-1/3 ml-3"></div>
//                     </div>
//                     <div className="ms-2 my-2">
//                         <div className="h-4 bg-gray-300 rounded w-5/6 mb-1"></div>
//                         <div className="h-4 bg-gray-300 rounded w-2/3"></div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ShimmerCard;

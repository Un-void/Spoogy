import { useState } from "react";

const SearchBar = ({ MasterData, updater, setnotFound }) => {
    const [SearchText, setSearchText] = useState("");   

    const handleSearch = () => {
        const result = MasterData.filter((restaurant) =>
            restaurant?.info?.name.toLowerCase().includes(SearchText.toLowerCase())
        );
        updater(result);
        setnotFound(result.length === 0);
    };

    const handleSearchText = (val) => setSearchText(val);
    return (
        <>
        <div className="flex shadow-lg rounded-lg overflow-hidden">
            <input
                type="text"
                className="p-1 focus:outline-none"
                value={SearchText}
                onChange={(e) => handleSearchText(e.target.value)}
            />
            <button className="border align-middle p-1 bg-slate-400 hover:bg-slate-500" onClick={handleSearch}>
                Search
            </button>
        </div>
        </>
    )
}

export default SearchBar
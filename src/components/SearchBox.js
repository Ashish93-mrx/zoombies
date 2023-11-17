import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input className="pa3 ba b--green bg-lightest-blue" style={{margin: "10px"}}type='search' placeholder="search zoombies" onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;
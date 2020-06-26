import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <div className ="ui search">
        <input type = 'text' value = 'Search Movies' className = "prompt" />

        </div>
        </div>
        );
    }
}
export default SearchBar;
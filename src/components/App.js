import React from 'react';
import MovieTimeList from './MovieTimeList';
import SearchBar from './SearchBar'
import TheatreSelect from './TheatreSelect';
import MovieList from '../components/MovieList/MovieList'

const App = () =>{
    return(<div className = "ui container">
        <div className ="ui segment">
            <SearchBar />
            </div>
            <div className="ui small horizontal list">
                <TheatreSelect />
            </div>
            <div>
                <MovieList />

            </div>
            </div>);

};
export default App;
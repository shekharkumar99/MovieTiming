import React from 'react';
import MovieTimeList from './MovieTimeList';
import SearchBar from './SearchBar'
import TheatreSelect from './TheatreSelect';
import MovieList from '../components/MovieList/MovieList'

class App extends React.Component{
    state = {showtimes:{},movie:''};
    onSearchsubmit=async(term)=>{
        this.setState({movie:term})



    };
    render(){
    return(<div className = "ui container">
        <div className ="ui segment">
            <SearchBar onChange = {this.onSearchsubmit}/>
            </div>
            <div className="ui small horizontal list">
                <TheatreSelect />
            </div>
            <div>
                <MovieList movieSearch = {this.state.movie}/>

            </div>
            </div>);
    }

};
export default App;
import React from 'react';
import SearchBar from './SearchBar'
import TheatreSelect from './TheatreSelect';
import MovieList from '../components/MovieList/MovieList'

class App extends React.Component{

    //The state changes according to the search and theatre selection to display movie timings

    state = {showtimes:[],movie:''};

    onSearchsubmit=async(term)=>{
        this.setState({movie:term})
    };

    onMovieSelect = async(term)=>{
        this.setState({showtimes: term})
        console.log(this.state.showtimes)
    }
    render(){
    return(<div className = "ui two column centered grid" style={{marginTop: '30px', alignContent:'inherit' }}>
       <div className = "column">
            <SearchBar onChange = {this.onSearchsubmit}/>
            <div className="ui small horizontal list" style={{}}>
                <TheatreSelect onSelect = {this.onMovieSelect}/>
                </div>
          
           
                <MovieList movieSearch = {this.state.movie} time = {this.state.showtimes}/>
                </div>
           
            </div>);
    }

};
export default App;
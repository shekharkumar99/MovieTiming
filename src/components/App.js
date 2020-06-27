import React from 'react';
import SearchBar from './SearchBar'
import TheatreSelect from './TheatreSelect';
import MovieList from '../components/MovieList/MovieList'

class App extends React.Component{
    state = {showtimes:{},movie:''};
    onSearchsubmit=async(term)=>{
        this.setState({movie:term})
    };
    onMovieSelect = async(term)=>{
        this.setState({showtimes: term})
    }
    render(){
    return(<div className = "ui two column centered grid" style={{marginTop: '30px', alignContent:'inherit' }}>
       <div className = "column">
            <SearchBar onChange = {this.onSearchsubmit}/>
            <div className="ui small horizontal list" style={{}}>
                <TheatreSelect onSelect = {this.onMovieSelect}/>
                </div>
          
           
                <MovieList movieSearch = {this.state.movie}/>
                </div>
           
            </div>);
    }

};
export default App;
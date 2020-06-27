import React from 'react';
import movieData from '../../assets/data/movie_metadata.json'
import MovieCard from './MovieCard'
class MovieList extends React.Component{
    render(){
        const items = movieData.filter((data)=>{
            if(this.props.movieSearch == '')
                return data
            else if(data.title.toLowerCase().includes(this.props.movieSearch.toLowerCase()) ){
                return data
            }
        }).map(data=>{
        return(
            
           
               
                        <MovieCard title ={data.title} rating = {data.rating} poster = {data.poster} />


            
        
        );
                        
    }
        )
        return(
        <div className ="container">
                <div className=" ui middle aligned divided list">
                        {items}
                </div>
        </div>
        )

}
}
export default MovieList;
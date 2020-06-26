import React from 'react';
import data from '../../assets/data/movie_metadata.json'
import MovieCard from './MovieCard'
class MovieList extends React.Component{
    render(){
        return(
            <div className ="container">
                {
                data.map((data,key) =>{
                    return(
                        <div>
                        <MovieCard title ={data.title} rating = {data.rating} poster = {data.poster} />
                        </div>
                    );
                
                })
            }


            </div>
        );
    }
}
export default MovieList;
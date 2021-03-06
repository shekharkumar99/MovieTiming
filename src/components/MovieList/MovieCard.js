import React from 'react';
import'./MovieCard.css';
class MovieCard extends React.Component{
    render(){
        return(
            <div className = "ui centered card">
                <div className = "cards">
                    <div className="image">
                        <img src ={this.props.poster}/>
                    </div>
                    <div className ="content">
                        <a className = "header">
                            {this.props.title}

                        </a>
                    </div>
                    <div className="meta">
                        <label>Rating:</label>
                    <a>{this.props.rating}</a>
                    </div>
                </div>

            </div>
        );
    }
}
export default MovieCard;
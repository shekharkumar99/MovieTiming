import React from 'react';
class MovieCard extends React.Component{
    render(){
        return(
            <div className = "ui cards">
                <div className = "cards">
                    <div className="image">
                        <img src ={this.props.poster}/>
                    </div>
                    <div className ="content">
                        <div className = "header">
                            {this.props.title}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default MovieCard;
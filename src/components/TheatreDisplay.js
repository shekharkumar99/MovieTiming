import React from 'react';

class TheatreDisplay extends React.Component{
    render(){
        return(
            <div className = "ui basic buttons">
                <div className ="ui button" >{this.props.name}</div>
            
            </div>
        );
        }
}
export default TheatreDisplay;
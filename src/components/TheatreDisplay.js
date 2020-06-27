import React from 'react';

class TheatreDisplay extends React.Component{
    theatreselect = (event) =>{
        let keyword = event.target.value;
        this.props.onSelect(keyword);
    }
    render(){
        return(
            <div className = "ui basic buttons">
                <div className ="ui button" onSelect = {(e)=>this.theatreselect(e)}>{this.props.name}</div>
            
            </div>
        );
        }
}
export default TheatreDisplay;
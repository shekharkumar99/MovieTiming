import React from 'react';
import data from '../assets/data/theater_showtimes';

class TheatreSelect extends React.Component{

    state = {time:{}}

    onSelect=async(term)=>{
        this.setState({time:term})
        this.props.onSelect=term;
    }
    render(){
        return(
            <div>
                {
                    data.map((data,key) =>{
                        return(
                            <div className="ui basic buttons">
                               <div className = "ui basic buttons">
                <div className ="ui button" value = {data.name} onSelect = {(e)=>this.theatreselect(e)}>{data.name}</div>
            
            </div>
            </div>


                        );
                    })
                }
            </div>
        );
    }
}
export default TheatreSelect;
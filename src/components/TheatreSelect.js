import React from 'react';
import data from '../assets/data/theater_showtimes';
import TheatreDisplay from './TheatreDisplay';

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
                               <TheatreDisplay name = {data.name} onSelect = {this.state.time}/>
                            </div>


                        );
                    })
                }
            </div>
        );
    }
}
export default TheatreSelect;
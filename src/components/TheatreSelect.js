import React from 'react';
import data from '../assets/data/theater_showtimes';
import TheatreDisplay from './TheatreDisplay';

class TheatreSelect extends React.Component{
    render(){
        return(
            <div>
                {
                    data.map((data,key) =>{
                        return(
                            <div className="ui basic buttons">
                               <TheatreDisplay name = {data.name}/>
                            </div>


                        );
                    })
                }
            </div>
        );
    }
}
export default TheatreSelect;
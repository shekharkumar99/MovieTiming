import React from 'react';

class SearchBar extends React.Component{

    state ={term:''};

    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({term:keyword});
        this.props.onChange(this.state.term );
      }
      
    render(){
        return(
            <div className=" ui container" style ={{width: '100px'}}>
                <div className ="ui fluid category search" >
                <div class="ui icon input">
        <input type = 'text' placeholder="Search Movies" value = {this.state.term} onChange={(e)=>this.searchSpace(e)} className = "prompt" />
        <i class="search icon"></i>
        </div>
        </div>
        </div>
        );
    }
}
export default SearchBar;
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
            <div>
                <div className ="ui search">
        <input type = 'text' value = {this.state.term} onChange={(e)=>this.searchSpace(e)} className = "prompt" />

        </div>
        </div>
        );
    }
}
export default SearchBar;
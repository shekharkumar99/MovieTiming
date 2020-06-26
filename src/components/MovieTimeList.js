import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieTimeList extends Component{
    render(){
        return (<div>Movie</div>);

    }
}
const mapStateToProps = state => {
    return {movie: state.movie};

};
export default connect(mapStateToProps) (MovieTimeList);
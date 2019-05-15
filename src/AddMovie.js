
import React, { Component } from 'react';

class AddMovie extends Component {
    // state = {
    //     title: '',
    //     director: '',
    //     hasOscars: false,
    //     IMDB:''
    // }
    
    render(){
        return(
            <div>
            <div>Add Movie</div>
            <form onSubmit={this.props.addAMovie}>
                <input name="movie" type="text" onChange={this.props.setMovieAndDirector} />
                <input name="director" type="text" onChange={this.props.setMovieAndDirector }/> 
                <button>Add Movie</button>
            </form>
          </div>
        )
    }
}


export default AddMovie
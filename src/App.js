import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User'
import  AddMovie from './AddMovie'


const movies = [
  { title: "The Godfather", director: "Francis Coppola" },
  { title: "Star Wars", director: "Rian Johnson" },
  { title: "The Shawshank Redemption", director: "Frank Darabont" }
]


class App extends React.Component {
 
  state = {
    counter:0,
    loggedIn: true,
    color: null,
    movies: movies,
    movie: '',
    director: '',
    filteredMovies: movies //Our main guy
  };


  iClickedThisButton = (e) => {
    //console.log("CLICKED", this)
    let color = "#"+((1<<24)*Math.random()|0).toString(16); 
    ///document.querySelector('button').click = function(e){} 
    this.setState({
      counter   : this.state.counter+1,
      loggedIn  : !this.state.loggedIn,
      color 
    }, function(){
      //console.log('call back when state is done updating', this.state.color)  //setState is asynchronous
    })
    //console.log(this.state.color) //dont reference state after immediately setting it.  
  }

  deleteMovie = (j) => {
    console.log(j)
    let moviesCopy = [ ... this.state.filteredMovies ]
    moviesCopy.splice(j,1)
    this.setState( {
      filteredMovies: moviesCopy
    } )
  }

  loopThroughMovies = () => {
    let moviesCopy =  this.state.filteredMovies.map((film, i)=>{
      return ( 
      <li key={i} style={{color:this.state.color, transform:`scale(1.0${this.state.counter})`}}>
        {film.title}
        <h6>{film.director}</h6>
        <button onClick={ () => { this.deleteMovie(i) } } >
          Delete
        </button>
      </li>
      )
    })
    return moviesCopy
  } 

  filterMovies = (e) => {
    let filteredMovies = this.state.movies.filter((film)=>{
      return film.title.includes(e.target.value)
    })
    this.setState({
      filteredMovies
    })
  }

  addAMovie = (e) => {
    e.preventDefault()

    let movie = {
      title: this.state.movie,
      director: this.state.director
    }
   // axios.post(url, movie).then(res=>{ send it DB 


    let newMovies = [...this.state.filteredMovies]
    newMovies.push(movie)
    this.setState({
      filteredMovies:newMovies
    })
    
      //}).catch(err=>...)

  }

  // setMovie = (e) => {
  //   //This is what we are typing 
  //   this.setState({
  //     movie:e.target.value
  //   })
  // }

  // setDirector = (e) => {
  //   this.setState({
  //     director: e.target.value
  //   })
  // }

  setMovieAndDirector = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
 

  render() {
    // ...
    return (
      <div className="App">

        <h6>{ this.state.movie }</h6>


        < AddMovie setMovieAndDirector={this.setMovieAndDirector} addAMovie={this.addAMovie} /> {/*What does this guy need to do???*/}

        {/* <form onSubmit={this.addAMovie}>
          <input name="movie" type="text" onChange={this.setMovieAndDirector} />
          <input name="director" type="text" onChange={this.setMovieAndDirector }/> 
          <button>Add Movie</button>
        </form> */}


        <br></br>
        <br></br>
        <br></br>

        Show me a list of movies:
        <input name="movies" onChange={this.filterMovies} type="text"></input> {/**  To search the movies **/}



        { this.state.loggedIn ? this.loopThroughMovies() : 'sorry please log in' /**Loops through filtered movies and shows them */} 
      
        <p></p>
        {/* <button style={{backgroundColor:this.state.color}} onClick={this.iClickedThisButton} >Click me Do Something</button>
        <p>{this.state.counter} </p>
        <p> { Date.now() } </p> */}
      </div>
    );
  }
}


export default App;





// userA: {
//   firstName: "Harper",
//   lastName: "Perez",
//   avatarUrl:
//     "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
// },
// userB: {
//   firstName: "Ana",
//   lastName: "Hello",
//   avatarUrl:
//     "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
// }

        // {/* <User firstName={this.state.userA.firstName} pic={this.state.userA.avatarUrl}/> */}
        // {/* <User firstName={this.state.userB.firstName} /> */}
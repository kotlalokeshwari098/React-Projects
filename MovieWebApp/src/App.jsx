import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import './App.css'

export default function App(){
  return(
    <div className="container">
    <NavBar />
    <MovieList />
    </div>
  )
}
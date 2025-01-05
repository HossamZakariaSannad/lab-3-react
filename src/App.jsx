import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from './componets/NavBar'
import './App.css'
import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App

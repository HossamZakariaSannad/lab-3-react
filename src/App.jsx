import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from './componets/NavBar'
import './App.css'
import React, { Suspense, useState } from "react";
import Container from "react-bootstrap/Container";
// import MovieList from "./pages/MovieList";
// import MovieDetails from "./pages/MovieDetails";
// import Counter from "./pages/Counter";
// import WatchList from "./pages/WatchList";
// import Contact from "./pages/Contact"
const Contact = React.lazy(() => import("./pages/Contact")); // Lazy
const WatchList = React.lazy(() => import("./pages/WatchList")); // Lazy
const Counter = React.lazy(() => import("./pages/Counter")); // Lazy
const MovieDetails = React.lazy(() => import("./pages/MovieDetails")); // Lazy
const MovieList = React.lazy(() => import("./pages/MovieList")); // Lazy
import LanguageContext from "./context/LanguageContext";
function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
     <BrowserRouter>
      {/* <div className="container my-5"> */}
      <LanguageContext.Provider value={{ lang, setLang }}>
     <NavBar />

      <Container
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={lang === "ar" ? "text-right" : "tet-left"}
          fluid
      >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Suspense>
        </Container>
        </LanguageContext.Provider>

      {/* </div> */}
    </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

import Header from './components/Header/Header'
import MovieList from "./components/MovieList/MovieList";
import HomePage from './Page/Home/HomePage'
import MovieDetail from "./Page/MovieDetail/MovieDeatil";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route index element={ <HomePage /> }></Route>
          <Route path="movie/:id" element={<h1> <MovieDetail />  </h1>} ></Route>
          <Route path="movies/:type" element={ <MovieList />} ></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
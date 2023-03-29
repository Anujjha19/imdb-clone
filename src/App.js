import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

import Header from './components/Header/Header'
import HomePage from './components/Page/Home/HomePage'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route index element={ <HomePage /> }></Route>
          <Route path="movie/:id" element={<h1> Movie Detail Page  </h1>} ></Route>
          <Route path="movies/:type" element={<h1> Movie list Page  </h1>} ></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
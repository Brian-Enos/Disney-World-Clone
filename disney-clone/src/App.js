import React from 'react';
/* import { Counter } from './features/counter/Counter'; */
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Detail from "./Components/Detail";

import { BrowserRouter,
  Routes,
   Route,
    /* Link */
    } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail/" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;

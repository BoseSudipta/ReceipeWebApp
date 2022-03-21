import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes

} from "react-router-dom";
import App from './App';
import ReceipeCard from './components/ReceipeCard';
import SelectedReceipe from './components/SelectedReceipe';
import ReceipeSeachedItems from './components/ReceipeSeachedItems';

function Router() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>} exact/>
            <Route path="/receipe" element={<ReceipeCard/>}/>
            <Route path="/home/:id" element={<SelectedReceipe />}/>
            <Route path="/Receipe/:id" element={< ReceipeSeachedItems/>}/>
            

          </Routes>
         
      </BrowserRouter>
    
  )
}

export default Router
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import SingleUser from "./Components/SingleUser";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      
      <Route exact strict path="/users" element={<App />}/>
      <Route path="/users/:userId" element={<SingleUser/>} />
      
    </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


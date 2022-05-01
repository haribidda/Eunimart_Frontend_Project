import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import SingleUser from "./Components/SingleUser";
import UserDetails from './Components/UserDetails';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      
      <Route exact path="users"/>
      <Route path="user/:userId" element={<SingleUser/>} />
     
    </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

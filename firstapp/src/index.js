import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ver1/homepage.css'; //  TODO Remove this line
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



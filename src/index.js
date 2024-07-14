import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/App.scss";
import "./components/Header/header.scss";
import "./style/reset.css";
import "./style/responsive.scss";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


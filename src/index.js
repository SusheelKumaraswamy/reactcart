import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ResponsiveAppBar from './App';
import Component1 from './component1';
import Component2 from'./component2';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <Component1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

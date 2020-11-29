/************************************************ */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/************************************************ */

//My initail React App from scratch

var React=require('react');
var ReactDOM=require('react-dom');

// ReactDOM.render(


// <div>
//   <h1>My To Do List</h1>
//   <ul>
//   <li>Go Shopping</li>
//   <li>Do Exercise</li>
//   <li>Reserve Hotel</li></ul>
  
//   </div>
//   , 
//   document.getElementById('root'));
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


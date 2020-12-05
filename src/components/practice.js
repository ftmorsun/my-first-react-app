/************************************************ */
// import React from 'react';
// import ReactDOM from 'react-dom';
import './styles.css';
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

// var React=require('react');
// var ReactDOM=require('react-dom');
// We must require react and react-dom module to build react application
// var React=require("react");
// var ReactDOM=require("react-dom");
import React from "react";
import ReactDOM from "react-dom";
const name="Ahmet";
const lName="Bayram";
// TASK 2: Render your favorite number on the page in a paragraph and print: 
//My favorite number is 11.
const myFavNum=11;
// Task 3: Render a random number between 1-10 : 
//My favorite number is randumNum
const randomNum= Math.floor(Math.random()*10)+1;
// ReactDOM.render(
// RENDER A paragraph under the heading??? I am Ahmet
ReactDOM.render(
    // render method renders onlt one html element.
    // When we render multople elements, we use div tag 
<div>
    {/* <h1>Hello World</h1>
    <p>I am Ahmet</p> */}
    <h1>My To Do List:</h1>
    <ul>
        <li>Go Shopping</li>
        <li>Do Exercise</li>
        <li>Reserve Hotel</li>
    </ul>
    <h1>{name}</h1>
    <h1>My favurite number is {myFavNum}</h1>
    <p>My favorite number is {randomNum}</p>
    {/* Passing name and last name as tow seperate javascript objects */}
    <h1> Hello {name} {lName}</h1>
    {/* passing name and lasst name as single javascript object using concatanation */}
    <h2>Hello {name+' '+lName}</h2>
    {/* Injecting name and lastname usign ES6 backtick */}
    <h3>Hello {`${name} ${lName}`}</h3>
</div>
,
document.getElementById("root2"));


// const name="Ahmet";
// const lName="Bayram";
// // TASK 2: Render your favorite number on the page in a paragraph and print: 
// //My favorite number is 11.
// const myFavNum=11;
// // Task 3: Render a random number between 1-10 : 
// //My favorite number is randumNum
// const random-Num= Math.floor(Math.random()*10)+1;
// // ReactDOM.render(


// <div>
//   <h1>My To Do List</h1>
//   <ul>
//   <li>Go Shopping</li>
//   <li>Do Exercise</li>
//   <li>Reserve Hotel</li></ul>
  
//   </div>
//   , 
// //   document.getElementById('root'));
// var num = Math.floor(Math.random()*100);
// const currentYear = new Date().getFullYear();
// var fname="fatma";

// function Welcome(props) {
//   return <h1 className="heading">Hello, {props.name}</h1>;
// }

// function App() {
//   let num2 = Math.floor(Math.random()*100);
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//       <p > My Favorite Number is {num}</p>
    
//       <p> My Favorite Number is {num2 + num}</p>
      
//       <p> Created by {fname} <br></br> Copyright {currentYear}</p>
//     </div>
//   );
// }
// const myStyle={color:"orange"};
// let greeting="Hello";
// const currentTime=new Date().getHours();
// console.log(currentTime);
// //Create a ternary to assign values within
// currentTime < 12 ? [greeting, myStyle.color] = ["Good Morniing", "red"] :
//                   (currentTime < 18 ? [greeting, myStyle.color] = [ "Good Afternoon", "orange"]:
//                                       [greeting, myStyle.color] = [ "Good Night", "grey"]);

// function Main(props){
//   return (<section>
//     <h2>Our {props.adj} Models Here</h2>
//     { props.images.map((imh)=>(<img src={imh}></img>))}
// </section>);
// }


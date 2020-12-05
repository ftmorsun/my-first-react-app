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
import Heading from "./Heading"
import List from "./List";
const name="Ahmet";
const lName="Bayram";
// TASK 2: Render your favorite number on the page in a paragraph and print: 
//My favorite number is 11.
const myFavNum=11;
// Task 3: Render a random number between 1-10 : 
//My favorite number is randumNum
const randomNum= Math.floor(Math.random()*10)+1;
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
var num = Math.floor(Math.random()*100);
const currentYear = new Date().getFullYear();
var fname="fatma";

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
const myStyle={color:"orange"};
let greeting="Hello";
const currentTime=new Date().getHours();
console.log(currentTime);
//Create a ternary to assign values within
currentTime < 12 ? [greeting, myStyle.color] = ["Good Morniing", "red"] :
                  (currentTime < 18 ? [greeting, myStyle.color] = [ "Good Afternoon", "orange"]:
                                      [greeting, myStyle.color] = [ "Good Night", "grey"]);

function Main(props){
  return (<section>
    <h2>Our {props.adj} Models Here</h2>
    { props.images.map((imh)=>(<img src={imh}></img>))}
</section>);
}


function App() {
  return (
    < >
      <Heading />
       <h1 
        style={myStyle}
        className="heading" 
        contentEditable="true"
        spellCheck="false">{greeting}</h1>
        <list />
        <img className="kebab-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/2880px-Lula_kebab_2.jpg"/>
        <img className="cat-img" src="https://secure.img1-fg.wfcdn.com/im/08892826/resize-h800%5Ecompr-r85/4307/43073707/Playing+Tabby+Kitten+Statue.jpg" />
       
    </>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/*******************************************8 */


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
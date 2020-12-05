import React from "react";
import '../styles.css';

const myStyle={color:"orange"};
let greeting="Hello";
const currentTime=new Date().getHours();
console.log(currentTime);
//Create a ternary to assign values within
currentTime < 12 ? [greeting, myStyle.color] = ["Good Morniing", "red"] :
                  (currentTime < 18 ? [greeting, myStyle.color] = [ "Good Afternoon", "orange"]:
                                      [greeting, myStyle.color] = [ "Good Night", "grey"]);


function Heading(){
    return (<> <h1 
    style={myStyle}
    className="heading" 
    contentEditable="true"
    spellCheck="false">{greeting}</h1>
 
    <img className="kebab-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/2880px-Lula_kebab_2.jpg"/>
    <img className="cat-img" src="https://secure.img1-fg.wfcdn.com/im/08892826/resize-h800%5Ecompr-r85/4307/43073707/Playing+Tabby+Kitten+Statue.jpg" />
    </>
    ); 
}
export default Heading;
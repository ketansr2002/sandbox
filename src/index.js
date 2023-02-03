// var React = require("react");
// var ReactDOM = require("react-dom");
//obove way is older , now we can directly import and avoid use of variable everytime

import React from "react";
import ReactDOM from "react-dom";

//render takes two input what to show, where to show and function
//render could take only one html element

ReactDOM.render(<h1> hello</h1>, document.getElementById("demo1"));

//compiler(react) converts our html into javascript ,babel is a javascrip compiler ,convert every javascript to
//-some version that is understandable by all version
ReactDOM.render(
  <div>
    <h1> hello</h1>
    <p>this is paragraph</p>
  </div>,
  document.getElementById("demo1")
);

//if we want to send javascript expression along html then we can use curly braces
var num = 7;
ReactDOM.render(
  <h1>the num is {`${num}`}</h1>,
  document.getElementById("demo2")
);

//adding class and styling to html passes
ReactDOM.render(
  <h1 className="editable" contentEditable="true" spellCheck="false">
    this is an editable code
  </h1>,
  document.getElementById("demo3")
);

//add images and apply some css
ReactDOM.render(
  <div>
    <img src="https://images.easytechjunkie.com/slideshow-mobile-small/url-address.jpg"></img>
    <img src="https://images.easytechjunkie.com/slideshow-mobile-small/url-address.jpg"></img>
  </div>,
  document.getElementById("demo4")
);

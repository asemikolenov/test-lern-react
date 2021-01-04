import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TestClass } from "./test/Test";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <div>
      <div class='some-class'>---------====================---------</div>
      <App></App>
      <div class='some-class'>---------====================---------</div>
      <TestClass
        value="2"
        data="1"
        a="3"
        click={ ()=> clickHandler()}
      ></TestClass>
    </div>,
  rootElement
);


function clickHandler(){
  console.log("CLICK")
}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyState from "./example/States";
import Mount from "./example/Mounted";
import Count from "./example/Ref";
import reportWebVitals from "./reportWebVitals";
import CallBack from "./example/CallBack";
import MeMoo from "./example/Memo";
import Reducer from "./example/Reducer";
import MyReducer from "./example/MyReducer";
import MyTodo from "./example/Todo/index";
import MyContext from "./example/Context/index";
import { ThemeProvider } from "./example/Context/ThemeContext";

function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lession-${id}`, {
        detail: `comment cua lesson-${id}`,
      })
    );
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

ReactDOM.render(
  //  <App />
  //  <MyState></MyState>
  //  <Mount></Mount>
  //  <Count></Count>
  //  <CallBack></CallBack>
  //  <MeMoo></MeMoo>
  //  <Reducer></Reducer>
  //  <MyReducer></MyReducer>
  <ThemeProvider>
    <MyContext/>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import "./styles.css"
import Main from "./App"

ReactDOM.render(
  <Router>
     <Main />
  </Router>,
  document.getElementById("root"))

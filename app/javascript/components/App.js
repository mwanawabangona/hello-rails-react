import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Provider } from "react-redux";
import  Greetings  from "./Greetings"
import configureStore from "../configurestore";

const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
          <Route path="/" element={<Greetings />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App

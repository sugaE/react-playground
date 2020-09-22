import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  // Switch,
  // Route,
  // Link,
  // StaticRouter,
} from 'react-router-dom';
// import Tree from "./Tree";
import Codility from './Codility';
// import Components from './Components';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/codility">
          <Codility />
        </BrowserRouter>
        {/*
<BrowserRouter basename="/components">
          <Components />
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;

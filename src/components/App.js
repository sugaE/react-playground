import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  // Route,
  // Switch,
  Link,
  // StaticRouter,
} from 'react-router-dom';
// import Tree from "./Tree";
import Codility from '../Codility';
import LeetCode from '../LeetCode';

import routes from './routes';
import Algorithm from './Algorithm';
import Function from './Function';

// import Components from './Components';

const routesTmp = [{
  function: Function, path: '/',
}];

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/algorithm">
          {routes[0].routes.map((v) => (
            <li key={v.path}>
              <Link to={v.path}>{v.path}</Link>
            </li>
          ))}

          <Codility />
          <LeetCode />
          <Algorithm routes={routesTmp} path="/tmp-playground" />

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

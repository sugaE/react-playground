import React from 'react';
import {
  BrowserRouter,
  // Route,
  Switch,
  Link,
  // StaticRouter,
} from 'react-router-dom';

import routes from './routes';
import Algorithm from '../components/Algorithm';

class Codility extends React.Component {
  render() {
    return <Algorithm routes={routes} path="/codility" />;
  }
}

export default Codility;

import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import routes from './routes';

function Doms(props) {
  const {inputs, solution} = props.data;

  return (
    <div>
      {Array.isArray(inputs) && inputs.length
        ? inputs.map((v, i) => (
          <div key={i}>
            <div>
              [
              {i}
              ]inputs:
              {JSON.stringify(v)}
            </div>
            <div>
              outputs:
              {JSON.stringify(solution(v))}
            </div>
          </div>
        ))
        : 'no inputs'}
    </div>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        // <route.component {...props} routes={route.routes} />
        <Doms {...props} data={route.function} routes={route.routes} />
      )}
    />
  );
}

class Algorithms extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {routes.map((v) => (
            <li key={v.path}>
              <Link to={v.path}>
                {v.path}
                {v.hard ? '(复习！)' : ''}
              </Link>
            </li>
          ))}
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default Algorithms;

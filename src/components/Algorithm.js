import React from 'react';
import {Route, Link} from 'react-router-dom';

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
      path={route.basename + route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        // <route.component {...props} routes={route.routes} />
        <Doms {...props} data={route.function} routes={route.routes} />
      )}
    />
  );
}

class Algorithm extends React.Component {
  render() {
    const {routes = [], path} = this.props;

    return (
      <Route path={path}>

        <ul>
          {routes.map((v) => (
            <li key={v.path}>
              <Link to={path + v.path}>
                {v.path}
              </Link>
              {v.desc && (
              <span>
                (
                <a href={v.originUrl || ''} target={v.originUrl ? '_blank' : '_self'}>
                  {v.desc}
                </a>
                )
              </span>
              )}
            </li>
          ))}
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={route.path} {...route} basename={path} />
        ))}
      </Route>
    );
  }
}

export default Algorithm;

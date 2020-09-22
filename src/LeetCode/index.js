import React from 'react';

import routes from './routes';
import Algorithm from '../components/Algorithm';

class LeetCode extends React.Component {
  render() {
    return <Algorithm routes={routes} path="/leetcode" />;
  }
}

export default LeetCode;

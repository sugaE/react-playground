// import BinaryGap from './BinaryGap';
// import CyclicRotation from './CyclicRotation';
// import OddOccurrencesInArray from './OddOccurrencesInArray';
// import FrogJmp from './FrogJmp';
// import PermMissingElem from './PermMissingElem';
// import TapeEquilibrium from './TapeEquilibrium';

import Codility from '../Codility';
import LeetCode from '../LeetCode';

const routes = [
  {
    path: '/algorithm',
    // component: Algorithm,
    routes: [
      {
        path: '/codility',
        component: Codility,
      },
      {
        path: '/leetcode',
        component: LeetCode,
      },
    ],
  },
];

export default routes;

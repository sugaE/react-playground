// import BinaryGap from './BinaryGap';
// import CyclicRotation from './CyclicRotation';
import OddOccurrencesInArray from './OddOccurrencesInArray';
// import FrogJmp from './FrogJmp';
// import PermMissingElem from './PermMissingElem';
// import TapeEquilibrium from './TapeEquilibrium';
import ByteDanceTree from './byte_dance/migong';
// import BDminTime from './byte_dance/MinTime';
import BDleastInterval from './byte_dance/LeastInterval';
import BDTinyURL from './byte_dance/TinyURL';

const routes = [
  {
    path: '/odd_occurrences_in_array',
    function: OddOccurrencesInArray,
  },
  // byte_dance
  {
    path: '/byte_dance/tree',
    function: ByteDanceTree,
    desc: '广度优先遍历二叉树',
  },
  // {
  //   path: '/byte_dance/minTime',
  //   function: BDminTime,
  //   desc: '没做出来sad',
  // },
  {
    path: '/byte_dance/leastInterval',
    function: BDleastInterval,
  },
  {
    path: '/byte_dance/tinyURL',
    function: BDTinyURL,
  },
];

export default routes;

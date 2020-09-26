// import BinaryGap from './BinaryGap';
// import CyclicRotation from './CyclicRotation';
import OddOccurrencesInArray from './OddOccurrencesInArray';
// import FrogJmp from './FrogJmp';
// import PermMissingElem from './PermMissingElem';
// import TapeEquilibrium from './TapeEquilibrium';
import ByteDanceTree from './byte_dance/migong';
// import BDminTime from './410-split-array-largest-sum';
import BDleastInterval from './byte_dance/LeastInterval';
import BDTinyURL from './byte_dance/TinyURL';
import EtwoSum from './byte_dance/EtwoSum';
import LengthOfLongestSubstring from './byte_dance/LengthOfLongestSubstring';
import P410 from './410-split-array-largest-sum';
import LCP12 from './LCP12';
import P243 from './P243';
import TMP from './Tmp';
import P256 from './P256';

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
  {
    path: '/byte_dance/leastInterval',
    function: BDleastInterval,
  },
  {
    path: '/byte_dance/tinyURL',
    function: BDTinyURL,
  },
  {
    path: '/byte_dance/e/two-sum',
    function: EtwoSum,
  },

  {
    path: '/byte_dance/m/longest-substring-without-repeating-characters',
    function: LengthOfLongestSubstring,
  },
  {
    path: '/lcp/m/xiao-zhang-shua-ti-ji-hua',
    function: LCP12,
    desc: '完全没有头绪',
  },
  {
    path: '/P243',
    function: P243,
  },
  {
    path: '/P410',
    function: P410,
  },
  {
    path: '/P256',
    function: P256,
  },
  {
    path: '/TMP',
    function: TMP,
  },

];

export default routes;

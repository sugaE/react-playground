import ByteDanceTree from './byte_dance/migong';
import BDleastInterval from './byte_dance/LeastInterval';
import BDTinyURL from './byte_dance/TinyURL';
import EtwoSum from './byte_dance/EtwoSum';
import LengthOfLongestSubstring from './byte_dance/LengthOfLongestSubstring';
import P410 from './P410';
import LCP12 from './LCP12';
import P243 from './P243';
import P256 from './P256';
import P751 from './P751';
import P758 from './P758';

const LEETCODE_PREFIX = 'https://leetcode-cn.com/problems/';

const routes = [
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
    desc: '⚠️动态规划/二分法',
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
    path: '/P751',
    function: P751,
    originUrl: LEETCODE_PREFIX + 'ip-to-cidr/',
    desc: '❗751. IP 到 CIDR',
  },
  {
    path: '/P758',
    function: P758,
    originUrl: LEETCODE_PREFIX + 'bold-words-in-string/',
    desc: '758. 字符串中的加粗单词',
  },

];

export default routes;

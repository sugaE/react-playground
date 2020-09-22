import BinaryGap from './BinaryGap';

const routes = [
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus,
      },
      {
        path: '/tacos/cart',
        component: Cart,
      },
    ],
  },
];

class Algorithm extends React.Component {
  render() {
    return <Tree />;
  }
}

export default App;

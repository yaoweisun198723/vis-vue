import Network from './src/components/network';
/* istanbul ignore next */
Network.install = function(Vue) {
  Vue.component(Network.name, Network);
};
export default Network;

// import Vue from 'vue';
// import App from './App.vue';
import Network from './components/network';
const components = [
  Network
];
const install = function(vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  /*eslint-disable*/
  components.map((component) => {
    vue.component(component.name, component);
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
// 测试的时候加上注释
export default {
  install,
  Network
};
// 测试的时候打开注释
// Vue.use(install);
//
// export default new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });

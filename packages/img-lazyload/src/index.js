import LazyLoad from '../modules/LazyLoad/LazyLoad';

export default {
  install(Vue, options) {
    const lazyClass = LazyLoad(Vue);
    const lazyIns = new lazyClass(options);

    Vue.directive('lazy', {
      bind: lazyIns.bindLazy.bind(lazyIns),
    });
  },
};

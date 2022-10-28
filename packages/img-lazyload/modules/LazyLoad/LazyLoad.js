import LazyImg from "./LazyImg";
function getScrollParent(el) {
  let _parent = el.parentNode;
  while (_parent) {
    const styleOverflow = getComputedStyle(_parent)["overflow"];
    // style只能获取行内设置的，所以用getComputedStyle
    if (/(scroll)|(auto)/.test(styleOverflow)) {
      return _parent;
    }
    _parent = _parent.parentNode;
  }
}
export default function LazyLoad(Vue) {
  return class Lazy {
    constructor(options) {
      this.options = options;
      this.lazyImgList = [];
    }

    bindLazy(el, bindings, vnode) {
      Vue.nextTick(() => {
        const lazyImg = new LazyImg({
          el: el,
          src: bindings.value,
          options: this.options,
        });
        const scrollParent = getScrollParent(el);
        scrollParent &&
          scrollParent.addEventListener(
            "scroll",
            this.handleScroll.bind(this),
            false
          );

        this.lazyImgList.push(lazyImg);
        this.handleScroll();
      });
    }

    handleScroll() {
      // 滚动事件可以用 timeout 和 requestAnimationFrame 实现节流
      this.lazyImgList.forEach((lazyImg) => {
        !lazyImg.loaded && lazyImg.setImgSrc();
      });
    }
  };
}

function imgLoad(src) {
    return new Promise((resolve, reject) => {
        const oImg = new Image();
        oImg.src = src;
        oImg.onload = resolve;
        oImg.onerror = reject;
    })
}
export default class LazyImg {
    constructor({ el, src, options }) {
        this.src = src
        this.el = el;
        this.options = options

        this.loaded = false

        this.state = {
            loading: false,
            error: false
        }
    }
    isClient() {
        const { top } = this.el.getBoundingClientRect()
        console.log(top, this.el.clientTop)
        
        return top < window.innerHeight * (this.options.preload || 1.3)
    }
    imgRender(state) {
        const { loading, error } = this.state;
        let src = '';
        switch (state) {
            case 'loading':
                src = loading || '';
                break;
            case 'error':
                src = error || '';
                break;
            default:
                src = this.src;
                break;
        }
        this.el.setAttribute('src', src);
    }
    setImgSrc() {
        this.imgRender('loading');
        if (this.isClient() && !this.loaded) {
            imgLoad(this.src).then(() => {
                this.state.loading = true;
                this.imgRender('ok');
                this.loaded = true;
            }, () => {
                this.state.error = true;
                this.imgRender('error');
                this.loaded = true;
            })
        }
    }
}
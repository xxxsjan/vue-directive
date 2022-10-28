/*
 * @Description: 粘贴板
 * @Author: ZY
 * @Date: 2020-12-28 10:39:21
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 13:58:35
 */
// Inspired by https://github.com/Inndy/vue-clipboard2
import Clipboard from 'clipboard';
import { Directive } from 'vue';

if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ');
}
type cbType = (e: Event) => void;
let successCallback: cbType | null;
let errorCallback: cbType | null;
let clipboardInstance: Clipboard | null;

export const clipboard: Directive = {
  beforeMount(el, binding) {
    console.log(el, binding);
    if (binding.arg === 'success') {
      successCallback = binding.value;
    } else if (binding.arg === 'error') {
      errorCallback = binding.value;
    } else {
      clipboardInstance = new Clipboard(el, {
        text() {
          return binding.value;
        },
        action() {
          return binding.arg === 'cut' ? 'cut' : 'copy';
        }
      });
      clipboardInstance.on('success', (e: Event) => {
        const callback = successCallback;
        callback && callback(e);
      });
      clipboardInstance.on('error', (e: Event) => {
        const callback = errorCallback;
        callback && callback(e);
      });
    }
  },

  beforeUpdate(el, binding) {
    if (binding.arg === 'success') {
      successCallback = binding.value;
    } else if (binding.arg === 'error') {
      errorCallback = binding.value;
    } else {
      clipboardInstance = new Clipboard(el, {
        text() {
          return binding.value;
        },
        action() {
          return binding.arg === 'cut' ? 'cut' : 'copy';
        }
      });
    }
  },

  beforeUnmount(_, binding) {
    if (binding.arg === 'success') {
      successCallback = null;
    } else if (binding.arg === 'error') {
      errorCallback = null;
    } else {
      if (clipboardInstance) {
        clipboardInstance.destroy();
      }
      clipboardInstance = null;
    }
  }
};

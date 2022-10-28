import { createApp, Directive } from 'vue';
import App from './App.vue';

const app = createApp(App);

import * as directives from '@/directives';

Object.keys(directives).forEach((key) => {
  console.log(key);
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

app.mount('#app');

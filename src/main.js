import { createApp } from 'vue';
import Vue3Lottie from 'vue3-lottie';
import components from '@/components/UI';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue3-lottie/dist/style.css';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.use(Vue3Lottie, { name: 'LottieAnimation' });
app.use(store);
app.use(router);
app.mount('#app');

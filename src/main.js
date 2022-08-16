import { createApp } from 'vue';
import components from '@/components/UI';
import App from './App.vue';
import router from './router';
import store from './store';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.use(store);
app.use(router);
app.mount('#app');

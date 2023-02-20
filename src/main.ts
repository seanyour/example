import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import i18n from "lang/index";

import 'element-plus/es/components/message/style/css'
import 'normalize.css';
import 'uno.css';

const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

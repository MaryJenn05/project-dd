import './assets/main.css';
import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/i18n";
import router from "@/router/router";
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import Menubar from "primevue/menubar";
import 'primeicons/primeicons.css';
import Card from 'primevue/card';

const app = createApp(App);

app.use(PrimeVue);
app.use(i18n);
app.use(router);
app.component('pv-toolbar',Toolbar);
app.component('pv-button',Button);
app.component('pv-menubar',Menubar);
app.component('pv-card',Card);
app.mount('#app');
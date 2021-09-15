import { createApp } from 'vue'
import App from './App.vue'
import jQuery from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

window.jQuery = jQuery;

createApp(App).mount('#app')

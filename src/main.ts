import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add Font Awesome icon packs
library.add(fas, far, fab);

// Register the FontAwesome component globally
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

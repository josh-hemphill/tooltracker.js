import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h: any) => h(App),
}).$mount('#app');

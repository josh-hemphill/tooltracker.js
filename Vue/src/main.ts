import {
	createApp,
} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { LoggerPlugin } from './plugins/logger';

const app = createApp(App);

app.use(router);
app.use(LoggerPlugin);

router.isReady()
	.then(() => {
		app.mount('#app');
		// tslint:disable-next-line:no-console
	}).catch((err) => console.log(err));

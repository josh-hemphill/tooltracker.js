import _Vue, { Plugin } from 'vue';

class Logger {
	holdLog: boolean;
	consoleIt: boolean;

	static install(Vue: typeof _Vue, options?: any) {
		Object.defineProperty(Vue, '$log', {
			value: new Logger(options),
			enumerable: true,
		});
	}

	static forceLog(msg: any) {
		// tslint:disable-next-line:no-console
		console.log(msg);
	}

	constructor(options: { holdLog: false, consoleIt: true }) {
		this.holdLog = options.holdLog;
		this.consoleIt = options.consoleIt;
	}

	get(logObj: any) {
		if (this.consoleIt) {
			// tslint:disable-next-line:no-console
			console.log(logObj);
		}
	}
	logStore = new Map<string, object>();
}


function install(Vue: typeof _Vue, options?: any): void {
	Object.defineProperty(Vue, '$log', {
		value: new Logger(options),
		enumerable: true,
	});
}

export const LoggerPlugin = {
	install,
};

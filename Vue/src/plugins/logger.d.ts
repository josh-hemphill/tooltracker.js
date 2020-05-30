declare module 'vue/types/vue' {
	interface VueConstructor {
		$log: (logObj: any) => void
	}
}

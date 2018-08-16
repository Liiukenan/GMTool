// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store.js'
import axios from 'axios'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.prototype.$http = axios
Vue.config.productionTip = false
import router from './router';
new Vue({
	store,
	router,
	render:h=>h(App)
}).$mount('#app')
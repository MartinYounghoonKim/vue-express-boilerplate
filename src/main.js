import Vue from 'vue';
import App from './App';
import router from './router';
// import store from './stores/index';
Vue.config.productionTip = false;

if (module.hot) {
    module.hot.accept();
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    components: {
        App,
    },
    template: '<App/>',
});

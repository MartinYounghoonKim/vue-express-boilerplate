/**
 * @description Vuex Store 에 대한 entry 파일
 */

import Vue from 'vue';
import Vuex from 'vuex';
import es6Promise from 'es6-promise';

es6Promise.polyfill();
Vue.use(Vuex);

export default new Vuex.Store({
    // ...
});

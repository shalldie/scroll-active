import Vue from 'vue';
import devComponent from './dev.vue';

new Vue({
    render: h => h(devComponent)
}).$mount('#app', false);

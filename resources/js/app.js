/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import App from "./App";
import HighchartsVue from "highcharts-vue";

window.Vue = require('vue').default;

Vue.config.productionTip = false;

Vue.use(HighchartsVue);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('app', require('./App.vue').default);
Vue.component('hc-line-chart-component', require('./components/HcLineChartComponent.vue').default);
Vue.component('hc-column-chart-component', require('./components/HcColumnChartComponent.vue').default);
Vue.component('hc-pie-chart-component', require('./components/HcPieChartComponent.vue').default);
Vue.component('hc-stacked-column-chart-component', require('./components/HcStackedColumnChartComponent.vue').default);
Vue.component('hc-stacked-percentage-column-chart-component', require('./components/HcStackedPercentageColumnChartComponent.vue').default);
// Vue.component('hc-solid-gauge-component', require('./components/HcSolidGaugeComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
//     components: { App },
//     template: "<App/>"  
// });

const app = new Vue({
    el: '#app',
    // components: { 
        // ExampleComponent, 
        // ChartComponent 
    // },
});

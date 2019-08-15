import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
// import Chart from "chart.js";
Vue.config.productionTip = false
Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(VueRouter);

const First = {template: '<div><h2>I am the first subpage</h2></div>'}
import GoodList from "@/components/GoodList.vue";
import Chart_demo from "@/components/Chart_demo";
import HelloWorld from "@/components/HelloWorld";
import Table from "@/components/Table";
// import Table from "@/components/Table";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/GoodList',
      component: GoodList
    },
    {
      path: '/chart',
      component: Chart_demo
    },
    {
      path: '',
      component: HelloWorld
    },
    {
      path: '/table',
      component: Table
    }
  ]
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

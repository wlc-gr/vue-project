import Vue from 'vue'
import App from './App.vue'
//使用vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueResource from 'vue-resource';
Vue.use(VueResource);
import config from "./model/config";
let roomid = window.location.hash.split('=')[1];
config.setValue('roomid',roomid);
//引用vue-socker.io
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'http://a.itying.com?roomid='+roomid);
//引用组件
import Start from './components/Start';
import Search from "./components/Search";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Pcontent from "./components/Pcontent";
import Hot from "./components/Hot";
import Order from "./components/Order";
import EditPeopleinfo from "./components/EditPeopleinfo";
//配置路由
const routes = [
  {path: '/start', component: Start},
  {path: '/search', component: Search},
  {path: '/home', component: Home},
  {path: '/cart', component: Cart},
  {path: '/pcontent', component: Pcontent},
  {path: '/hot', component: Hot},
  {path: '/order', component: Order},
  {path:'/editPeopleinfo',component: EditPeopleinfo},
  {path:'*',redirect:"/start",}
];
//实例化
let router = new VueRouter({routes})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

import Vue from 'vue';
import ElementUI from "element-ui";
import axios from 'axios';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './pages/login.vue';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter);
const routes=[
  {path:'/login',component:Login}
];
const router=new VueRouter({
  routes,
});
Vue.prototype.axios=axios;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

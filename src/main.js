import Vue from 'vue';
import VueMaterial from 'vue-material';
import lodash from 'lodash';
import 'vue-material/dist/vue-material.min.css';
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './app.vue'
import Main from "./layouts/Main.vue";
import RowComponent from "./components/RowComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
import RowComponentModalGrantor from "./components/RowComponentModalGrantor.vue";
import RowComponentModalGrantee from "./components/RowComponentModalGrantee.vue";
import RowComponentSync from "./components/RowComponentSync.vue";
import QueryBuilder from "./components/QueryBuilder.vue";
import QueryCreator from "./components/queryCreator.vue";
import DocTypesFilter from "./components/docTypesFilter.vue";


Vue.prototype.$EventBus = new Vue();

Vue.component('Main', Main);
Vue.component('RowComponent', RowComponent);
Vue.component('NavbarComponent', NavbarComponent);
Vue.component('RowComponentModalGrantor', RowComponentModalGrantor);
Vue.component('RowComponentModalGrantee', RowComponentModalGrantee);
Vue.component('RowComponentSync', RowComponentSync);
Vue.component('QueryBuilder', QueryBuilder);
Vue.component('QueryCreator', QueryCreator);
Vue.component('DocTypesFilter', DocTypesFilter);

Vue.use(VueMaterial);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
  	next('/404');
  } else {
  	next();
  }
});

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})



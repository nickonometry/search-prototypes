import Home from './pages/home.vue';
import AdvancedSearch from './pages/advancedsearch.vue';
import AdvancedSearchV2 from './pages/advancedsearchv2.vue';
import AdvancedSearchV3 from './pages/advancedsearchv3.vue';
import FourOhFour from './pages/404.vue';
import QueryBuilder from './pages/queryBuilderPage.vue';
import SearchCards from './pages/searchCards.vue';
import SyncModifier from './pages/syncModifier.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/404', component: FourOhFour },
  { path: '/advancedsearch', component: AdvancedSearch },
  { path: '/advancedsearchv2', component: AdvancedSearchV2 },
  { path: '/advancedsearchv3', component: AdvancedSearchV3 },
  { path: '/querybuilder', component: QueryBuilder },
  { path: '/searchcards', component: SearchCards },
  { path: '/syncmodifier', component: SyncModifier },
];

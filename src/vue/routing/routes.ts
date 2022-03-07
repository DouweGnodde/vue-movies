import MovieListPage from '../page/movie-list/MovieListPage.vue';
import WatchListPage from '../page/watch-list/WatchListPage.vue';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    { path: '/movies', meta: { title: 'Movies'}, component: MovieListPage },
    { path: '/watch-list', meta: { title: 'Watch list'}, component: WatchListPage },
]

export default routes;


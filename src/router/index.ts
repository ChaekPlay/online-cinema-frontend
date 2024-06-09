import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/main/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/about/AboutView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/search_results/SearchResultsView.vue')
    },
    {
      path: '/watched-movies',
      name: 'watched-movies',
      component: () => import('../pages/watched_movies/WatchedMoviesView.vue')
    },
    {
      path: '/actor/:id/',
      name: 'actor',
      component: () => import('../pages/actor_info/ActorInfoView.vue')
    },
    {
      path: '/movie/:id/',
      name: 'movie',
      component: () => import('../pages/movie_info/MovieInfoView.vue')
    },
    {
      path: '/movie/:id/watch',
      name: 'movie-watch',
      component: () => import('../pages/watch/WatchView.vue')
    },
    {
      path: '/movie/:id/reviews',
      name: 'movie-reviews',
      component: () => import('../pages/ratings_and_reviews/RatingsAndReviewsView.vue')
    },
    {
      path: '/movie/:id/create-review',
      name: 'movie-create-review',
      component: () => import('../pages/review_creation/ReviewCreationView.vue')
    },
    {
      path: '/movie/:id/review-success',
      name: 'movie-review-success',
      component: () => import('../pages/review_success/ReviewSuccessView.vue')
    },
    {
      path: '/series/:id/',
      name: 'series',
      component: () => import('../pages/movie_info/MovieInfoView.vue')
    },
    {
      path: '/series/:id/watch',
      name: 'series-watch',
      component: () => import('../pages/watch/WatchView.vue')
    },
    {
      path: '/series/:id/reviews',
      name: 'series-reviews',
      component: () => import('../pages/ratings_and_reviews/RatingsAndReviewsView.vue')
    },
    {
      path: '/series/:id/create-review',
      name: 'series-create-review',
      component: () => import('../pages/review_creation/ReviewCreationView.vue')
    },
    {
      path: '/series/:id/review-success',
      name: 'series-review-success',
      component: () => import('../pages/review_success/ReviewSuccessView.vue')
    },
    {
      path: '/admin/models',
      name: 'models',
      component: () => import('../pages/_admin/view/ViewFilmsAndSeries.vue')
    },
    {
      path: '/admin/models/:modelname/:id/edit',
      name: 'edit-model',
      component: () => import('../pages/_admin/edit/EditModel.vue')
    },
    {
      path: '/admin/models/:modelname/create',
      name: 'create-model',
      component: () => import('../pages/_admin/edit/EditModel.vue')
    }
  ]
})

// const DEFAULT_TITLE: string = 'Фильмотека'
// router.afterEach((to) => {
//   nextTick(() => {
//     document.title = to.name as string || DEFAULT_TITLE;
//   });
// })

export default router

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
      component: () => import('../pages/watched_movies/WatchedMoviesView.vue')
    },
    {
      path: '/watched-movies',
      name: 'watched-movies',
      component: () => import('../pages/watched_movies/WatchedMoviesView.vue')
    },
    {
      path: '/movie/:id/watch',
      name: 'watch',
      component: () => import('../pages/watch/WatchView.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../pages/movie_info/MovieInfoView.vue')
    },
    {
      path: '/actor/:id',
      name: 'actor',
      component: () => import('../pages/actor_info/ActorInfoView.vue')
    },
    {
      path: '/movie/:id/reviews',
      name: 'reviews',
      component: () => import('../pages/ratings_and_reviews/RatingsAndReviewsView.vue')
    },
    {
      path: '/movie/:id/create-review',
      name: 'create-review',
      component: () => import('../pages/review_creation/ReviewCreationView.vue')
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

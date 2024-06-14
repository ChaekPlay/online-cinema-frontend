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
      path: '/admin/models/:media/:id/edit',
      name: 'edit-media',
      component: () => import('../pages/_admin/edit/EditMedia.vue')
    },
    {
      path: '/admin/models/:media/create',
      name: 'create-media',
      component: () => import('../pages/_admin/edit/EditMedia.vue')
    },
    {
      path: '/admin/models/:media/:id/ratings',
      name: 'view-ratings',
      component: () => import('../pages/_admin/view/ViewRatings.vue')
    },
    {
      path: '/admin/models/:media/:id/ratings/:rating_id/edit',
      name: 'edit-rating',
      component: () => import('../pages/_admin/edit/EditRating.vue')
    },
    {
      path: '/admin/models/:media/:id/ratings/create',
      name: 'create-rating',
      component: () => import('../pages/_admin/edit/EditRating.vue')
    },
    {
      path: '/admin/models/series/:id/seasons',
      name: 'view-seasons',
      component: () => import('../pages/_admin/view/ViewSeasons.vue')
    },
    {
      path: '/admin/models/series/:id/seasons/:season_id/edit',
      name: 'edit-season',
      component: () => import('../pages/_admin/edit/EditSeason.vue')
    },
    {
      path: '/admin/models/series/:id/seasons/:season_id/create',
      name: 'create-season',
      component: () => import('../pages/_admin/edit/EditSeason.vue')
    },
    {
      path: '/admin/models/series/:id/seasons/:season_id/episodes',
      name: 'view-episodes',
      component: () => import('../pages/_admin/view/ViewEpisodes.vue')
    },
    {
      path: '/admin/models/series/:id/seasons/:season_id/episodes/:episode_id/edit',
      name: 'edit-episode',
      component: () => import('../pages/_admin/edit/EditEpisode.vue')
    },
    {
      path: '/admin/models/series/:id/seasons/:season_id/episodes/:episode_id/create',
      name: 'create-episode',
      component: () => import('../pages/_admin/edit/EditEpisode.vue')
    },
    {
      path: '/admin/models/:person/:id/edit',
      name: 'edit-person',
      component: () => import('../pages/_admin/edit/EditPerson.vue')
    },
    {
      path: '/admin/models/:person/create',
      name: 'create-person',
      component: () => import('../pages/_admin/edit/EditPerson.vue')
    },
    {
      path: '/admin/models/genre/:id/edit',
      name: 'edit-genre',
      component: () => import('../pages/_admin/edit/EditGenre.vue')
    },
    {
      path: '/admin/models/genre/create',
      name: 'create-genre',
      component: () => import('../pages/_admin/edit/EditGenre.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/_admin/login/LoginForm.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../pages/_admin/register/RegisterForm.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/_admin/profile/UserProfile.vue')
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

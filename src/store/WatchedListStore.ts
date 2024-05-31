import type MovieInfo from '@/models/Movie'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWatchedListStore = defineStore('watchedList', () => {
  const watchedList = ref([] as MovieInfo[])

  if (localStorage.getItem('watched')) {
    watchedList.value = JSON.parse(localStorage.getItem('watched')!).watchedList
  }
  function addToWatchedList(movie: MovieInfo) {
    watchedList.value.push(movie)
  }
  function removeFromWatchedList(movie: MovieInfo) {
    watchedList.value.splice(watchedList.value.indexOf(movie), 1)
  }
  function isAddedToWatchedList(movie: MovieInfo) {
    return watchedList.value.some((item) => item.id === movie.id)
  }
  function isEmpty() {
    return watchedList.value.length === 0
  }

  return { watchedList, addToWatchedList, removeFromWatchedList, isAddedToWatchedList, isEmpty }
})

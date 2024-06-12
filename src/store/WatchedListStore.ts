import type MediaContent from '@/models/MediaContent'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWatchedListStore = defineStore('watchedList', () => {
  const watchedList = ref([] as MediaContent[])

  if (
    localStorage.getItem('watched') &&
    localStorage.getItem('watched') != undefined &&
    localStorage.getItem('watched') != 'undefined'
  ) {
    watchedList.value = JSON.parse(localStorage.getItem('watched')!).watchedList ?? []
  }
  function addToWatchedList(movie: MediaContent) {
    watchedList.value.push(movie)
  }
  function removeFromWatchedList(movie: MediaContent) {
    watchedList.value.splice(watchedList.value.indexOf(movie), 1)
  }
  function isAddedToWatchedList(movie: MediaContent) {
    return watchedList.value.some((item) => item.id === movie.id)
  }
  function isEmpty() {
    return watchedList.value.length === 0
  }

  return { watchedList, addToWatchedList, removeFromWatchedList, isAddedToWatchedList, isEmpty }
})

import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => (
    { closed: true }
  ),
  getters: {
    friendlyState(state) {
      return state.closed ? "closed" : "open";
    }
  },
  actions: {
    toggleSidebar() {
      this.closed = !this.closed
      localStorage.setItem('sidebar', this.closed)
    },
    loadSidebarFromLocalStorage() {
      const closed = localStorage.getItem('sidebar')
      this.closed = closed === 'true'
    }
  },
})

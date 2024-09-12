import { defineStore } from 'pinia'

export const useJoinStore = defineStore({
  id: 'join',
  state: () => ({
    joining: false,
  }),
  actions: {
    toggleJoin() {
      this.joining = !this.joining
      console.log('Joining:', this.joining)
    }
  },
})
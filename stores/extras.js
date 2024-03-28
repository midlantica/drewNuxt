// store/extras.js
import { defineStore } from 'pinia'

export const useExtrasStore = defineStore('extras', {
  state: () => ({
    showExtras: false,
    showContent: false
  }),
  actions: {
    toggleExtras() {
      this.showExtras = !this.showExtras
    },
    onExtrasToggled() {
      this.toggleExtras()
    }
  }
})

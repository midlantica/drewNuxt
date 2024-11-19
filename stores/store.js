// stores/store.js
import { defineStore } from "pinia"
import { nextTick } from "vue"

export const useToggleExtrasStore = defineStore("store", {
  state: () => ({
    isShowContent: false,
    selectedBtn: null,
  }),
  actions: {
    async toggleExtras() {
      this.selectedBtn = false
      this.isShowContent = !this.isShowContent
    },
    async initialize() {
      try {
        await nextTick() // Wait for DOM updates
        this.isShowContent = true
      } catch (error) {
        console.error("Error in initialize:", error)
      }
    },
  },
})

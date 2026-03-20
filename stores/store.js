// stores/store.js
import { defineStore } from 'pinia';
import { nextTick } from 'vue';

export const useToggleExtrasStore = defineStore('toggleExtras', {
  state: () => ({
    isShowContent: false,
    selectedBtn: ''
  }),
  actions: {
    async toggleExtras() {
      this.selectedBtn = '';
      this.isShowContent = !this.isShowContent;
    },
    async initialize() {
      try {
        await nextTick(); // Wait for DOM updates
        this.isShowContent = true;
      } catch (error) {
        console.error('Error in initialize:', error);
      }
    }
  }
});

import { defineStore } from 'pinia'

export const useToggleExtrasStore = defineStore({
  id: 'store',
  state: () => ({
    isShowContent: false,
    selectedBtn: null,
  }),
  actions: {
    async toggleExtras() {
      console.log("toggleExtras Store Action!");
      this.selectedBtn = false;
      this.isShowContent = !this.isShowContent;
    },
    async initialize() {
      await nextTick();
      this.isShowContent = true;
    },
  },
})
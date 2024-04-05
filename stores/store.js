import { defineStore } from 'pinia'

export const useToggleExtrasStore = defineStore({
  id: 'store',
  state: () => ({
    isShowContent: false,
    selectedBtn: null,
  }),
  actions: {
    async toggleExtras() {
      this.selectedBtn = false;
      this.isShowContent = !this.isShowContent;
    },
    async initialize() {
      await nextTick();
      this.isShowContent = true;
    },
  },
})
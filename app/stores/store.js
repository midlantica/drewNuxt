// stores/store.js
import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';

export const useToggleExtrasStore = defineStore('toggleExtras', () => {
  const isShowContent = ref(false);
  const selectedBtn = ref('');

  async function toggleExtras() {
    selectedBtn.value = '';
    isShowContent.value = !isShowContent.value;
  }

  async function initialize() {
    try {
      await nextTick();
      isShowContent.value = true;
    } catch (error) {
      console.error('Error in initialize:', error);
    }
  }

  return { isShowContent, selectedBtn, toggleExtras, initialize };
});

// stores/store.js
import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';

export const useToggleExtrasStore = defineStore('toggleExtras', () => {
  const isShowContent = ref(false);
  const selectedBtn = ref('');

  function toggleExtras() {
    selectedBtn.value = '';
    isShowContent.value = !isShowContent.value;
  }

  function initialize() {
    nextTick(() => {
      isShowContent.value = true;
    });
  }

  return { isShowContent, selectedBtn, toggleExtras, initialize };
});

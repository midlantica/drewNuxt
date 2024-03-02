// useToggleExtras.js
import { ref, onMounted, nextTick } from 'vue'

export const useToggleExtras = () => {
  const showExtras = ref(true)
  const showContent = ref(false)

  onMounted(async () => {
    await nextTick();
    showExtras.value = true
  });

  function toggleExtras() {
    showExtras.value = !showExtras.value
  }

  function onExtrasToggled() {
    // Emit another event or perform any necessary actions
    toggleExtras(); // Or any other action you want to perform
  }

  return {
    showExtras,
    showContent,
    toggleExtras,
    onExtrasToggled
  }
}

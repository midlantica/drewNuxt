import { ref, onMounted, nextTick } from 'vue'

export const useToggleExtras = () => {
  const showExtras = ref(false)
  const showContent = ref(false)
  const selectedBtn = ref(null)

  function toggleExtras() {
    console.log("toggleExtras Composable! ")
    selectedBtn.value = false
    showExtras.value = !showExtras.value
  }
  
  onMounted(async () => {
    await nextTick();
    showExtras.value = true
  });
  
  return {
    showExtras,
    showContent,
    selectedBtn,
    toggleExtras,
  }
}

import { ref, onMounted, nextTick } from 'vue'

export const useToggleExtras = () => {
  const showExtras = ref(false)
  const showContent = ref(false)

  onMounted(async () => {
    await nextTick();
    showExtras.value = true
  });

  function toggleExtras() {
    console.log("toggleExtras Composable! ")
    showExtras.value = !showExtras.value
  }

  function onExtrasToggled() {
    console.log("onExtrasToggled Composable!")
    toggleExtras(); 
  }

  return {
    showExtras,
    showContent,
    toggleExtras,
    onExtrasToggled,
  }
}

import { ref, onMounted, nextTick } from 'vue'

export const useToggleExtras = () => {
  const isShowContent = ref(false)
  const selectedBtn = ref(null)

  function toggleExtras() {
    console.log("toggleExtras Composable! ")
    selectedBtn.value = false
    isShowContent.value = !isShowContent.value
  }
  
  onMounted(async () => {
    await nextTick();
    isShowContent.value = true
  });
  
  return {
    isShowContent,
    selectedBtn,
    toggleExtras,
  }
}

// composables/usePageSetup.js
// Shared setup logic for all theme pages.
// Handles store initialization and the head/bodyAttrs boilerplate.
import { useToggleExtrasStore } from '~/stores/store';

export function usePageSetup(theme) {
  const store = useToggleExtrasStore();

  definePageMeta({
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false
  });

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - ${theme}`,
    bodyAttrs: {
      class: theme.toLowerCase()
    }
  });

  onMounted(() => {
    store.initialize();
  });

  return { store };
}

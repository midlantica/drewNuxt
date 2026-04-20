// composables/usePageSetup.js
// Shared setup logic for all theme pages.
// Handles store initialization and the head/bodyAttrs boilerplate.
import { useToggleExtrasStore } from '~/stores/store';

export function usePageSetup(theme) {
  const store = useToggleExtrasStore();
  const router = useRouter();
  const route = useRoute();
  const themeSlug = theme.toLowerCase();

  definePageMeta({
    pageTransition: false,
    layoutTransition: false,
    viewTransition: false
  });

  // Reactive body class: themeSlug + 'extras' when on /portfolio
  const isOnPortfolio = computed(() =>
    route.path.endsWith('/portfolio') || route.path.endsWith('/portfolio/')
  );

  useHead({
    title: `DrewHarper.com | UX Designer Visual Designer - ${theme}`,
    bodyAttrs: {
      class: computed(() => (isOnPortfolio.value ? `${themeSlug} extras` : themeSlug))
    }
  });

  // Navigate to /theme/portfolio instead of toggling in-place
  function toggleExtras() {
    if (isOnPortfolio.value) {
      router.push(`/${themeSlug}/`);
    } else {
      router.push(`/${themeSlug}/portfolio`);
    }
  }

  onMounted(() => {
    store.initialize();
  });

  // Sync store state with route
  watch(
    isOnPortfolio,
    (onPortfolio) => {
      store.isShowContent = !onPortfolio;
    },
    { immediate: true }
  );

  return { store, toggleExtras };
}

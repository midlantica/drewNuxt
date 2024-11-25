// composables/useCardTransform.js
import { computed } from 'vue';

export function useCardTransform(elementX, elementY, elementWidth, elementHeight, isOutside) {
  const MAX_ROTATION = 10;

  const cardTransform = computed(() => {
    const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(
      2
    );
    const rY = (MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION).toFixed(2);

    return isOutside.value
      ? ''
      : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
  });

  return {
    cardTransform
  };
}

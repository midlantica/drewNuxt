<template>
  <svg
    class="arrowLeft"
    height="20"
    viewBox="0 0 33 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 11.7222L13.6481 2M3 11.7222L13.6481 21.4444M3 11.7222H31.7963"
    />
  </svg>
</template>

<style scoped>
  @reference "../../assets/css/tailwind.css";
  svg.arrowLeft {
    @apply cursor-pointer inline mr-1;

    > path {
      stroke: currentColor;
      stroke-width: 3;
      stroke-linecap: round;
    }

    &:hover > path {
      stroke: currentColor;
    }
  }
</style>

<template>
  <svg
    class="xOut" viewBox="0 0 25 25" fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0918 11.3934L21.0918 1.39339M11.0918 11.3934L21.0918 21.3934M11.0918 11.3934L1.0918 21.3934M11.0918 11.3934L1.0918 1.39339"
    />
  </svg>
</template>

<style scoped>
  svg.xOut {
    width: 20px !important;
    height: auto !important;
    margin: auto !important;
    @apply cursor-pointer;

    >path {
      stroke: hsla(0, 0%, 0%, .85);
      stroke-width: 1;
      stroke-linecap: round;

      &:hover {
        stroke: hsl(0, 54%, 60%);
        stroke-width: 2px;
      }
    }
  }

  .closeBtn:hover svg.xOut path {
    stroke: hsl(0, 54%, 60%);
    stroke-width: 2px;
  }
</style>

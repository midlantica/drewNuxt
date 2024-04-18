<template>
  <svg viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg" id="figmaBox">
    <title>Figma</title>

    <g id="figmaIconGroup">
      <path
        class="background" fill="url(#backer)" height="100%"
        width="100%"
        d="M59.5746 50.0012H30.4354C27.4483 50.0012 25.0044 47.5572 25.0044 44.5702V15.431C25.0044 12.4439 27.4483 10 30.4354 10H59.5746C62.5616 10 65.0055 12.4439 65.0055 15.431V44.5702C65.0055 47.5572 62.5616 50.0012 59.5746 50.0012Z"
      />
      <path
        class="shape orange"
        d="M34.7632 20.4427C34.7632 17.6139 37.0544 15.3227 39.8832 15.3227H45.0032V25.5627H39.8832C37.0544 25.5627 34.7632 23.2715 34.7632 20.4427Z"
      />
      <path
        class="shape tangerine"
        d="M45.0042 15.323H50.1241C52.9529 15.323 55.2441 17.6142 55.2441 20.443C55.2441 23.2718 52.9529 25.563 50.1241 25.563H45.0042V15.323Z"
      />
      <path
        class="shape purple"
        d="M34.7632 30.6826C34.7632 27.8539 37.0544 25.5627 39.8832 25.5627H45.0031V35.8026H39.8832C37.0544 35.8026 34.7632 33.5114 34.7632 30.6826Z"
      />
      <path
        class="shape blue"
        d="M55.2441 30.6836C55.2441 33.5124 52.9529 35.8036 50.1241 35.8036C47.2953 35.8036 45.0042 33.5124 45.0042 30.6836C45.0042 27.8548 47.2953 25.5636 50.1241 25.5636C52.9529 25.5636 55.2441 27.8548 55.2441 30.6836Z"
      />
      <path
        class="shape green"
        d="M39.8837 46.0442C42.7125 46.0442 45.0037 43.753 45.0037 40.9242V35.8042H39.8837C37.0549 35.8042 34.7637 38.0954 34.7637 40.9242C34.7637 43.753 37.0549 46.0442 39.8837 46.0442Z"
      />
    </g>
  </svg>
</template>

<style scoped>
  svg:hover {
    @apply cursor-pointer;
  }

  #figmaBox {

    .background {
      fill: url(#backer) hsl(0, 0%, 10%);
    }

    .shape {

    }
    .green { @apply fill-[hsl(157,91%,43%)]; }
    .purple { @apply fill-[hsl(266,100%,67%)]; }
    .orange { @apply fill-[hsl(14,89%,53%)]; }
    .tangerine { @apply fill-[hsl(6,100%,69%)]; }
    .blue { @apply fill-[hsl(197,99%,55%)]; }
  }

  #figmaBox:hover #figmaIconGroup .shape {
    animation: transparenter 1s ease-in;
    animation-delay: 0.75s;
    animation-iteration-count: 2;

    &.orange { animation-delay: calc(0.75s * 0); }
    &.tangerine { animation-delay: calc(0.75s * 0.2); }
    &.purple { animation-delay: calc(0.75s * 0.4); }
    &.blue { animation-delay: calc(0.75s * 0.5); }
    &.blue { animation-delay: calc(0.75s * 0.55); }
    &.green { animation-delay: calc(0.75s * 0.65); }
  }

  @keyframes transparenter {
    0% { @apply opacity-100; }
    50% { @apply opacity-0; }
    100% { @apply opacity-100; }
  }
  
</style>

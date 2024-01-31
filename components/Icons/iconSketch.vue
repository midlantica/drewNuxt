<template>
  <svg id="svgSketch" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>Sketch</title>
    <g class="groupSketch1">
      <polygon
        id="Polygon" fill="#FFAE00"
        points="22 37.8 0.988962058 13.6474326 10.097166 1.26845638 22 0 33.902834 1.26845638 43.0106278 13.6474326"
      />
      <polygon id="Polygon" fill="#EC6C00" points="22 37.8 1 13.65 43 13.65" />
      <polygon id="Polygon" fill="#FFAE00" points="22 37.8 9.4 13.65 34.6 13.65" />
      <polygon id="Polygon" fill="#FFEFB4" points="22 0 9.4 13.65 34.6 13.65" />
      <polygon id="Polygon" fill="#FED305" points="10 1.2796875 9.4 13.65 22 2.95585778e-12" />
      <polygon id="Polygon" fill="#FED305" points="34 1.2796875 34.6 13.65 22 0" />
    </g>

    <g class="groupSketch2">
      <polygon
        id="Polygon" fill="#FFAE00"
        points="22 37.8 0.988962058 13.6474326 10.097166 1.26845638 22 0 33.902834 1.26845638 43.0106278 13.6474326"
      />
      <polygon id="Polygon" fill="#EC6C00" points="22 37.8 1 13.65 43 13.65" />
      <polygon id="Polygon" fill="#FFAE00" points="22 37.8 9.4 13.65 34.6 13.65" />
      <polygon id="Polygon" fill="#FFEFB4" points="22 0 9.4 13.65 34.6 13.65" />
      <polygon id="Polygon" fill="#FED305" points="10 1.2796875 9.4 13.65 22 2.95585778e-12" />
      <polygon id="Polygon" fill="#FED305" points="34 1.2796875 34.6 13.65 22 0" />
    </g>
  </svg>
</template>

<style scoped>
  svg:hover {
    @apply cursor-pointer;
  }

  #svgSketch .groupSketch1 {
    transform: translate(21px, -40px);
  }

  #svgSketch:hover .groupSketch1 {
    animation: cycleAni1 0.75s alternate;
    animation-delay: 0.75s;
  }

  #svgSketch .groupSketch2 {
    transform: translate(21px, 9px);
  }

  #svgSketch:hover .groupSketch2 {
    animation: cycleAni2 0.75s alternate;
    animation-delay: 0.75s;
  }

  @keyframes cycleAni1 {
    0% {
      @apply opacity-0;
    }

    100% {
      transform: translate(21px, 9px);
      @apply opacity-100;
    }
  }

  @keyframes cycleAni2 {
    0% {
      @apply opacity-100;
    }

    100% {
      transform: translate(21px, 40px);
      @apply opacity-0;
    }
  }
</style>

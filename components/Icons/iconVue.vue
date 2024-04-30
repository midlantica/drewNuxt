<template>
  <svg id="svgVue" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>Vue.js</title>
    <g class="groupVue">
      <path class="darkGreen" d="M38.983 10.5H31l12.85 23L57 10.5h-7.737l-5.14 9.094z" />
      <path class="lightGreen" d="M31.123 10.5H23l21 37 21-37h-8.402L43.861 32.943z" />
    </g>
  </svg>
</template>

<style scoped>

  svg {
     width: 88px;

  }

  svg:hover {
    @apply cursor-pointer;
  }

  #svgVue {


    &:hover .groupVue {
      animation: iconFlipYAni 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2;
      transform-origin: 50% 50%;
      animation-delay: 0.85s;
    }
  }
  .groupVue {}

  .lightGreen {
    fill: #40b883;
  }

  .darkGreen {
    fill: #34495e;
  }

  @keyframes iconFlipYAni {
    to {
      transform: rotateY(360deg);
    }
  }
  
  .modern path,
  .modern polyline {
    stroke-width: .5 !important;
    stroke: white !important;
    stroke-linecap: round !important;
    fill: none !important;
  } 
  
  .modern #modal {

      path.lightGreen {
        stroke: none !important;
        fill: #40b883 !important;
      }

      path.darkGreen {
        stroke: none !important;
        fill: #34495e !important;
      }

    } 

</style>

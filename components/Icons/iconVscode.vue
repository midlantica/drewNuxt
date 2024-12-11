<template>
  <svg id="svgVscode" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>VS Code</title>
    <g class="groupVscode">
      <g transform="translate(-21.000000, -202.000000)">
        <g id="vs-code" transform="translate(40.315411, 209.500000)">
          <path
            class="bar-up-right"
            d="M43.535946,4.84870074 L34.2823227,0.39321452 C33.2112974,-0.122505994 31.9311547,0.095036345 31.0904744,0.935646282 L0.797337432,28.5559374 C-0.0174715844,29.2989009 -0.0165347662,30.5816752 0.799358433,31.3234106 L3.27379875,33.5728269 C3.94083435,34.1793026 4.94538764,34.2238629 5.66356229,33.6791399 L42.1435254,6.00456596 C43.3673538,5.07613353 45.1252037,5.94902352 45.1252037,7.48519482 L45.1252037,7.37775896 C45.1252037,6.29945317 44.5075002,5.31647827 43.535946,4.84870074 Z"
          />
          <path
            class="bar-down-right"
            d="M43.535946,40.0624857 L34.2823227,44.517986 C33.2112974,45.0335868 31.9311547,44.8160485 31.0904744,43.9755437 L0.797337432,16.3552315 C-0.0174715844,15.6123206 -0.0165347662,14.3294937 0.799358433,13.5877758 L3.27379875,11.3382719 C3.94083435,10.7318838 4.94538764,10.6872359 5.66356229,11.2320816 L42.1435254,38.9065503 C43.3673538,39.8349477 45.1252037,38.9621629 45.1252037,37.4258864 L45.1252037,37.5334275 C45.1252037,38.6116456 44.5075002,39.5946029 43.535946,40.0624857 Z"
          />
          <path
            class="bar-vertical"
            d="M34.282849,44.5186877 C33.2114728,45.0339377 31.9313301,44.816224 31.0906498,43.9755437 C32.1264128,45.0113067 33.8975957,44.2776412 33.8975957,42.8127663 L33.8975957,2.09829729 C33.8975957,0.633417158 32.1264128,-0.100203581 31.0906498,0.935626984 C31.9313301,0.0949389791 33.2114728,-0.12291037 34.282849,0.392354893 L43.5348934,4.84171846 C44.5071493,5.30925038 45.1253791,6.29257615 45.1253791,7.37135562 L45.1253791,37.5399185 C45.1253791,38.6186629 44.5071493,39.6019711 43.5348934,40.0695031 L34.282849,44.5186877 Z"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<style scoped>
  svg:hover {
    @apply cursor-pointer;
  }

  #svgVscode {
    .groupVscode {
      .bar-up-right,
      .bar-down-right,
      .bar-vertical {
      }

      .bar-up-right {
        fill: #0065a9;
      }

      .bar-down-right {
        fill: #007acc;
      }

      .bar-vertical {
        fill: #1f9cf0;
      }
    }
  }

  #svgVscode:hover {
    .bar-up-right {
      animation: animateStroke 1.25s forwards 1 ease-in-out;
      animation-delay: 1s;
    }

    .bar-down-right {
      animation: animateStroke 1.25s forwards 1 ease-in-out;
      animation-delay: 1.25s;
    }

    .bar-vertical {
      animation: animateStroke 1.25s forwards 1 ease-in-out;
      animation-delay: 1.5s;
    }
  }

  @keyframes animateStroke {
    0% {
      stroke-dashoffset: 0;
      stroke-dasharray: 0;
      stroke-width: 0.5px;
      stroke: hsla(0, 0%, 100%, 0);
    }

    25% {
      fill: transparent;
      stroke: hsla(0, 0%, 100%, 1);
      stroke-width: 0.5px;
    }

    60% {
      stroke-dasharray: 750;
      stroke-dashoffset: 250;
    }

    100% {
      stroke: hsla(0, 0%, 100%, 0);
      stroke-width: 0px;
    }
  }
</style>

<template>
  <svg id="html5" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>HTML</title>
    <g
      id="html5er"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id=""
        transform="translate(-158.000000, -19.000000)"
        fill-rule="nonzero"
      >
        <g id="fiveWhiteAll" transform="translate(184.000000, 28.500000)">
          <path
            d="M1.85993709,0.846 L34.4739548,0.846 C35.0262395,0.846 35.4739548,1.29371525 35.4739548,1.846 C35.4739548,1.87562168 35.4726386,1.90522874 35.4700102,1.93473358 L32.4584179,35.7405697 C32.4214666,36.1553563 32.1313359,36.5038267 31.730111,36.615325 L18.4148936,40.3155538 C18.2396223,40.3642607 18.0543849,40.3642348 17.8791272,40.3154789 L4.60070813,36.6214755 C4.19957827,36.5098828 3.90956643,36.1614213 3.87266192,35.7466971 L0.863872954,1.93463543 C0.814920955,1.3845244 1.22119062,0.898887864 1.77130165,0.849935866 C1.80077402,0.847313247 1.83034826,0.846 1.85993709,0.846 Z"
            id="Shape"
            fill="#FF6615"
          />
          <polyline
            id="Shape"
            fill="#FF8F54"
            points="18.167 37.363 29.682 34.163 32.392 3.757 18.167 3.757 18.167 37.363"
          />
          <g id="fiveWhite">
            <path
              d="M12.402,16.956 L12.004,12.486 L18.167,12.486 L18.167,8.122 L7.243,8.122 L8.418,21.322 L18.168,21.322 L18.168,16.956 L12.4,16.956 L12.402,16.956 Z M18.167,28.292 L18.147,28.297 L13.297,26.985 L12.987,23.505 L8.613,23.505 L9.223,30.357 L18.147,32.839 L18.167,32.832 L18.167,28.292 Z"
              id="five1"
              fill="#FFECE1"
            />
            <path
              d="M18.152,16.956 L18.152,21.321 L23.517,21.321 L23.011,26.983 L18.153,28.297 L18.153,32.837 L27.083,30.357 L28.173,18.129 L28.28,16.957 L18.15,16.957 M18.152,8.122 L18.152,12.487 L28.675,12.487 L28.763,11.505 L28.961,9.293 L29.066,8.123 L18.152,8.123"
              id="five2"
              fill="#F8F8F8"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<style scoped>
  svg {
    @apply cursor-pointer;

    &:hover {
      @apply cursor-pointer;
    }

    #five1,
    #five2 {
    }
  }

  #html5 #five1 {
  }

  #fiveWhite {
    filter: drop-shadow(0px 0.5px 0.5px rgba(0, 0, 0, 0.3));
  }

  #html5:hover #fiveWhite {
    animation: rounder 1s ease-in;
    animation-fill-mode: forwards;
    transform-origin: 18px 17px;
  }

  @keyframes rounder {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes cycleAni1 {
    0% {
      @apply opacity-100;
    }

    60% {
      @apply opacity-0;
    }

    100% {
      transform: translate(0px, -30px);
      @apply opacity-0;
    }
  }

  @keyframes cycleAni2 {
    0% {
      @apply opacity-0;
    }

    60% {
      @apply opacity-0;
    }

    100% {
      transform: translate(0px, 0px);
      @apply opacity-100;
    }
  }

  .modern path,
  .modern polyline,
  .modern polygon {
    stroke-width: 0.5;
    stroke: white;
    stroke-linecap: round;
    fill: none;
  }
  .modern polyline#Shape {
    fill: none;
    stroke: none;
  }

  .modern #modal {
    #five1,
    #five2 {
      fill: white !important;
    }

    #Shape {
      fill: #1b86c1 !important;
    }

    #Shape:nth-child(2) {
      fill: #1b86c1 !important;
    }
  }
</style>

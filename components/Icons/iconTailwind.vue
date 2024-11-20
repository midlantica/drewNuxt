<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 89 60"
    id="svgTailwind"
  >
    <path
      class="groupTailwind"
      fill="#38BDF8"
      fill-rule="evenodd"
      d="M43.7401 12.1233c-7.5607 0-12.2849 3.7575-14.1759 11.2727 2.8354-3.7576 6.143-5.1664 9.9228-4.2276 2.1565.5355 3.6987 2.091 5.4041 3.8131 2.7799 2.8043 5.9975 6.0497 13.0237 6.0497 7.5596 0 12.2849-3.7576 14.1748-11.2716-2.8343 3.7576-6.1419 5.1664-9.9217 4.2264-2.1576-.5355-3.6998-2.091-5.4052-3.812-2.7799-2.8065-5.9963-6.0507-13.0226-6.0507ZM29.5642 29.0312c-7.5596 0-12.2849 3.7576-14.1747 11.2727 2.8353-3.7576 6.1429-5.1664 9.9216-4.2275 2.1577.5355 3.6998 2.091 5.4053 3.8131 2.7798 2.8043 5.9963 6.0496 13.0237 6.0496 7.5596 0 12.2849-3.7564 14.1747-11.2715-2.8354 3.7575-6.1429 5.1663-9.9227 4.2275-2.1566-.5366-3.6987-2.0921-5.4042-3.8131-2.7798-2.8043-5.9974-6.0508-13.0237-6.0508Z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<style scoped>
  svg:hover {
    @apply cursor-pointer;
  }

  #svgTailwind .groupTailwind {
    transform: scale(95%);
    transform-origin: 50% 50%;
  }

  #svgTailwind:hover .groupTailwind {
    animation: tailwindRotate 2s reverse ease-in-out 2;
    animation-delay: 1s;
  }

  @keyframes tailwindRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes iconFlipXAni {
    to {
      transform: rotateY(360deg) scale(95%);
    }
  }

  .modern path,
  .modern polyline {
    stroke-width: 0.5 !important;
    stroke: white !important;
    stroke-linecap: round !important;
    fill: none !important;
  }

  /* ############# */

  .modern #modal {
    path {
      stroke: none !important;
      stroke-linecap: round !important;
      fill: #38bdf8 !important;
    }
  }
</style>

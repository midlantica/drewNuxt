<template>
  <svg id="svgNuxt" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>Nuxt JS</title>
    <g class="groupNuxt">
      <path
        class="green"
        d="M48.211 47.1689H68.0328C68.6654 47.169 69.2708 46.9535 69.8185 46.6496C70.3663 46.3457 70.931 45.9642 71.2471 45.4378C71.5633 44.9115 71.7831 44.3143 71.7829 43.7066C71.7826 43.0989 71.5638 42.5019 71.2471 41.9758L57.854 19.6447C57.5379 19.1185 57.1517 18.7368 56.604 18.433C56.0563 18.1291 55.2721 17.9137 54.6397 17.9137C54.0073 17.9137 53.4016 18.1291 52.8539 18.433C52.3063 18.7368 51.92 19.1185 51.6039 19.6447L48.211 25.3573L41.4251 14.278C41.1087 13.7518 40.7229 13.1973 40.1751 12.8935C39.6273 12.5897 39.0219 12.5473 38.3894 12.5473C37.7568 12.5473 37.1514 12.5897 36.6036 12.8935C36.0558 13.1973 35.4914 13.7518 35.175 14.278L18.5675 41.9758C18.2509 42.5019 18.2107 43.0989 18.2104 43.7066C18.2101 44.3143 18.2514 44.9114 18.5675 45.4378C18.8837 45.9641 19.4484 46.3457 19.9961 46.6496C20.5439 46.9535 21.1493 47.169 21.7819 47.1689H34.2821C39.2352 47.1689 42.8404 45.0151 45.3538 40.937L51.4253 30.7237L54.6397 25.3573L64.4613 41.6295H51.4253L48.211 47.1689ZM34.1036 41.6295H25.3534L38.3894 19.8178L44.9966 30.7237L40.62 38.1197C38.9509 40.7656 37.0478 41.6295 34.1036 41.6295Z"
      />
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

  #svgNuxt {
    &:hover .groupNuxt {
      animation: iconFlipXAni 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2;
      transform-origin: 50% 50%;
      animation-delay: 0.85s;
    }
  }

  .green {
    fill: #00dc82;
  }

  @keyframes iconFlipXAni {
    to {
      transform: rotateX(360deg);
    }
  }

  @keyframes iconFlipYAni {
    to {
      transform: rotateY(360deg);
    }
  }

  .modern path,
  .modern polyline {
    stroke-width: 0.5 !important;
    stroke: white !important;
    stroke-linecap: round !important;
    fill: none !important;
  }

  .modern #modal {
    path,
    polyline {
      stroke: none !important;
      fill: #00dc82 !important;
    }
  }
</style>

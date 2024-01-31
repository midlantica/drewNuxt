<template>
  <svg id="svgNuxt" viewBox="0 0 88 60" xmlns="http://www.w3.org/2000/svg">
    <title>Nuxt JS</title>
    <g class="groupNuxt">
      <path
        class="darkGreen" fill-rule="evenodd" clip-rule="evenodd"
        d="M41.833 13.9399C40.2963 11.3264 36.4543 11.3263 34.9175 13.9399L18.169 42.4236C16.6322 45.0371 18.5532 48.3041 21.6267 48.3041H34.7016C33.3882 47.1688 32.9019 45.2048 33.8957 43.5198L46.5803 22.0135L41.833 13.9399Z"
      />
      <path
        class="lightGreen"
        d="M52.4398 20.6218C53.7419 18.5164 56.997 18.5164 58.299 20.6218L72.4891 43.567C73.7914 45.6723 72.1639 48.304 69.5599 48.304H41.1791C38.5751 48.304 36.9475 45.6723 38.2495 43.567L52.4398 20.6218Z"
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

  .lightGreen {
    fill: #00dc82;
  }

  .darkGreen {
    fill: #80eec0;
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
</style>

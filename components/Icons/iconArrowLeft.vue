<template>
  <svg 
    class="arrowLeft"
    height="20" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 11.7222L13.6481 2M3 11.7222L13.6481 21.4444M3 11.7222H31.7963" />
  </svg>
</template>

<style scoped>
  svg.arrowLeft {
    /* width: 20px !important; */
    /* height: auto !important; */
    /* margin: auto !important; */
    /* @apply cursor-pointer; */
    cursor: pointer;
    display: inline;
    margin-right: .25rem;

    > path {
      stroke: hsla(0, 0%, 0%, .85);
      stroke-width: 3;
      stroke-linecap: round;
    }
    
    &:hover > path {
      stroke: hsl(0, 67%, 44%);
      /* stroke-width: 2px; */
    }
  }

</style>

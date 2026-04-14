<template>
  <footer>
    <div class="car" />
    <div class="starWars" />
  </footer>
</template>

<style scoped>
  @reference "../../../assets/css/tailwind.css";
  footer {
    @apply relative text-base-ivory h-40 bg-[linear-gradient(180deg,#6cebe4_0%,#6cebe4_25%,#fece00_0,#fece00_50%,#e68f00_50%,#e68f00_75%,#e60008_0,#e60008_100%)];

    @media (max-width: 1024px) {
    }

    @media (max-width: 840px) {
    }

    @media (max-width: 630px) {
    }

    @media (max-width: 430px) {
    }

    .car {
      @apply bg-no-repeat bg-cover block absolute top-[-.3rem] left-2 w-56.5 h-41.25 bg-[url('/img/alfa-carabo.webp')];

      @media (max-width: 430px) {
        @apply w-41.25 h-33.75 top-4 -left-4;
      }

      /* // IPHONE 6,7,8 */
      @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
        @apply w-46.5 h-33.75 top-4 -left-4;
      }
    }

    .starWars {
      @apply bg-no-repeat bg-cover block absolute -top-4.25 right-0 w-37 h-44.25 bg-[url('/img/star-wars-transfers.webp')];

      @media (max-width: 430px) {
        @apply w-30 h-44.25;
      }
    }
  }
</style>

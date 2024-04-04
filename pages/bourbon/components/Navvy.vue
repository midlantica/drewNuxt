<template>
  <header class="col-start-1 col-span-2 bg-[url(/img/bg/bg_bag_dk.jpg)] bg-repeat shadow-druShadow"
  >
    <nav class="flex flex-row flex-wrap items-center justify-center px-5 py-2">
      <h1>
        <a href="#"
          @click="$emit('toggleExtras')"
          class="no-underline text-base-ivory hover:text-[orange] hover:cursor-pointer">
          DREW HARPER
        </a>
      </h1>
      <section class="jobDesc">
        <h2>{{ copy.uiuxDesigner }}</h2>
        <h2>{{ copy.vizDesigner }}</h2>
      </section>
      <section class="contact">
        <p class="email">
          <a class="no-underline text-base-ivory hover:text-[orange]" :href="`mailto:` + `${copy.druEmail}`">{{ copy.druEmail }}</a>
        </p>
        <p class="resume">
          <a class="no-underline text-base-ivory hover:text-[orange]" :href="`${copy.portfolio}`" target="_blank">PDF Resume</a>
        </p>
      </section>
    </nav>
  </header>
</template>

<script setup>
  const copy = useCopy()
  const store = useToggleExtrasStore()

  const props = defineProps([
    'store.isShowContent', 
    'store.selectedBtn'
  ])
  
  onMounted(() => {
    store.initialize();
  })
</script>

<style scoped>

  h1 {
    @apply text-bourbon-ivory font-bourbonSubhead font-normal text-[4em] leading-none tracking-[.06em] p-0 m-0 transition duration-[.25s] ease-in antialiased w-auto grow-0 drop-shadow-[4px_0px_3px_rgba(0,0,0,0.1)];

    @media (max-width: theme("screens.breakLg")) {
      @apply grow-0 text-right;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply grow-0 text-center;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply font-[3.05rem];
    }
  }

  section.jobDesc {
    @apply grow ml-[0.55rem] mt-[0.1rem] transition duration-[.25s] ease-in;

    @media (max-width: theme("screens.breakLg")) {
      @apply grow-0 ml-2;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply grow-0 text-center self-center ml-0;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply ml-0 mt-0;
    }

    h2 {
      @apply p-0 m-0 text-bourbon-ivory font-bourbonHead text-[1.675rem] tracking-[0.075rem] leading-[1.55rem] antialiased mb-[.15rem] drop-shadow-[3px_0px_3px_rgba(0,0,0,0.1)];

      &:nth-child(2) {
        @apply text-[1.51rem] mb-[.1em];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply inline-block text-[1.775em];

        &:nth-child(2) {
          @apply ml-1 text-[1.775em];
        }
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply text-[1.25em];

        &:nth-child(2) {
          @apply text-[1.25em];
        }
      }
    }
  }

  section.contact {
    @apply uppercase mt-[.5rem] z-10 transition duration-[.25s] ease-in drop-shadow-[3px_0px_1px_rgba(0,0,0,0.1)];

    @media (max-width: theme("screens.breakLg")) {
      @apply w-full flex flex-row flex-wrap items-center justify-center gap-4;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply mt-[0.5em] flex-row;
    }

    @media (max-width: theme("screens.breakXsm")) {
      @apply mt-1 transition duration-[.25s] ease-in gap-x-2 gap-y-1;
    }

    p {
      @apply font-bourbonCopy tracking-[0.05rem] text-[1.15rem] leading-[1.35rem] lowercase antialiased;

      @media (max-width: theme("screens.breakLg")) {
        @apply justify-center text-[1.5rem] tracking-[0.1785rem] mt-[-.3em] leading-[1.95rem];
      }

      @media (max-width: theme("screens.breakSm")) {
        @apply text-[1.05rem] tracking-[.09em];
      }

      @media (max-width: theme("screens.breakXsm")) {
        @apply justify-center text-[1rem] tracking-[.09em] leading-5 text-center;
      }
    }
  }
</style>

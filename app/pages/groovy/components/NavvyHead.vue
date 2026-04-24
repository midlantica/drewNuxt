<template>
  <header class="text-base-ivory bg-groovy-red after:clear-both h-47 topDown">
    <div class="relative -my-6.25 flex flex-row items-center">
      <div
        class="relative w-52.5 h-52.5 sm:-left-11 min-[375px]:left-[-5.7rem] ease-out duration-300 -top-1.25"
      >
        <div
          class="block float-left clear-left groovyCircle shadow-pre-trans"
          :class="{ 'shadow-transition': isMounted }"
        >
          <div
            class="jelloHorizontal relative bg-[url('/img/drew_mug_sepia.webp')] w-24.5 h-29.75 min-[375px]:left-18 min-[375px]:top-[2.8rem] sm:left-14 sm:top-[2.8rem] bg-no-repeat bg-cover block ease-out duration-300 cursor-pointer"
            @click="$emit('toggleExtras')"
          />
        </div>
      </div>

      <div
        class="float-left relative min-[375px]:left-[-1.95rem] sm:left-[-1.55rem] cursor-pointer"
        @click="$emit('toggleExtras')"
      >
        <div class="flex flex-row flex-wrap justify-center w-auto gap-4 m-auto">
          <div class="flex gap-4">
            <mastDrew
              class="min-[375px]:h-[1.8rem] sm:h-[3.2rem] ease-out duration-300"
            />
            <mastHarper
              class="min-[375px]:h-[1.8rem] sm:h-[3.2rem] ease-out duration-300"
            />
          </div>
        </div>
        <h2
          class="text-base-ivory min-[375px]:text-[.8rem] sm:text-[1.45rem] text-[1rem] text-center font-normal lowercase leading-normal tracking-wide my-1 w-full mx-auto ease-out duration-300"
        >
          {{ copy.uiuxDesigner }} + {{ copy.vizDesigner }}
        </h2>

        <div class="shrink">
          <div
            class="flex flex-row flex-wrap items-center justify-center w-full mx-auto lg:flex-row gap-x-4 gap-y-2"
          >
            <div class="duration-300 ease-out groovyOvalBtn">
              <a :href="`mailto:` + `${copy.druEmail}`" class="email">
                {{ copy.druEmail }}
              </a>
            </div>
            <div class="flex gap-1 items-center">
              <span class="resumeLabel">Resume:</span>
              <div
                class="duration-300 ease-out groovyOvalBtn resumeBtn flex flex-col items-center"
              >
                <a
                  :href="copy.resumeWord"
                  target="_blank"
                  title="Word Resume"
                  aria-label="Word Resume"
                  class="resumeIconLink mr-3 pt-[.2rem] px-1 pb-[.1rem] text-0.5! uppercase"
                >
                  Word
                  <IconWordMini class="resumeIcon" />
                </a>
              </div>
              <div
                class="duration-300 ease-out groovyOvalBtn resumeBtn flex flex-col items-center"
              >
                <a
                  :href="copy.resumePDF"
                  target="_blank"
                  title="PDF Resume"
                  aria-label="PDF Resume"
                  class="resumeIconLink pt-[.2rem] px-1 pb-[.1rem] text-0.5! uppercase"
                >
                  PDF
                  <IconPDF class="resumeIcon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import IconWordMini from '~/components/Icons/iconWordMini.vue';
  import IconPDF from '~/components/Icons/iconPDF.vue';
  import mastDrew from './masthead/mastDrew.vue';
  import mastHarper from './masthead/mastHarper.vue';
  defineEmits(['toggleExtras']);
  const copy = useCopy();

  const isMounted = ref(false);

  onMounted(() => {
    setTimeout(() => {
      isMounted.value = true;
    }, 1500);
  });
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";
  .shadow-pre-trans {
    @apply shadow-[1px_1px_0px_0px_hsl(0,0%,0%,50%)];
  }
  .shadow-transition {
    @apply transition duration-500 ease-out shadow-[8px_6px_0px_0px_hsl(0,0%,0%,25%)];
  }
  .groovyCircle {
    @apply w-52.5 h-52.5 rounded-[10em] z-10 block mr-[-2.75em] mb-[-5.3em] [clip-path:polygon(21%_0,100%_0,110%_50%,100%_100%,21%_110%)];
    background-image: radial-gradient(
      /* 0 - 25% */ #99f1ec 0%,
      #99f1ec 35%,
      /* 25% - 50% */ #ffdd4b 35%,
      #ffdd4b 47%,
      /* 50% - 75% */ #ff9f00 47%,
      #ff9f00 59%,
      /* 75% - 100% */ #ff1a22 59%,
      #ff1a22 100%
    );

    @media (max-width: 320px) {
      @apply w-40 h-40 top-[-1.4em] left-[-2.9em];
    }
  }

  .groovyOvalBtn {
    @apply w-fit py-[.1rem] px-3 pb-[.2rem] border border-groovy-orange border-solid rounded-full leading-normal gap-0 tracking-wide hover:bg-groovy-red-dk hover:text-white hover:cursor-pointer;

    a {
      @apply text-base-ivory no-underline min-[375px]:text-[1rem] sm:text-[1rem] md:text-[1rem];
    }

    &.resumeBtn {
      @apply text-[0.75rem] flex items-center gap-1;

      &:hover a.resumeIconLink .resumeIcon {
        @apply fill-base-ivory text-black;
      }

      a.resumeIconLink {
        @apply inline-flex items-center gap-1 no-underline text-base-ivory text-[0.75rem] mr-1;

        &:hover {
          @apply underline underline-offset-3;
        }

        .resumeIcon {
          @apply w-3.5 fill-black text-base-ivory;

          &:hover {
            @apply fill-base-ivory text-black;
          }
        }
      }
    }
  }
</style>

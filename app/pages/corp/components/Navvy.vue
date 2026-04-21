<template>
  <header v-show="showNavvy" class="shadow-none">
    <nav
      class="flex flex-row flex-wrap items-center pt-[2em] px-[2em] pb-0 justify-center mb-4"
    >
      <section
        class="flex flex-row flex-wrap w-full max-[830px]:content-center justify-center gap-x-4"
      >
        <div
          class="flex flex-wrap content-center text-center max-[830px]:m-auto gap-2 grow"
        >
          <div
            class="flex flex-row flex-wrap content-center justify-center w-full gap-6 cursor-pointer break-xsm:w-full"
            @click="$emit('toggleExtras')"
          >
            <div
              class="content-center m-0 bg-[url('/img/drew_mug_red.webp')] inline-block w-20 h-20 bg-size-[151%] bg-position-[-39px_-59px] bg-no-repeat bg-corp-accent-red rounded-px shadow-[0px_0px_1px_1px_#00000026] hue-rotate-210 grayscale-50 jelloHorizontal"
            />
            <div class="flex flex-col flex-wrap">
              <drewHarper
                class="mt-2 break-md:h-20.75 break-sm:h-auto cursor-pointer"
              />
              <div class="flex flex-row flex-wrap justify-center">
                <h3
                  class="font-corp-copy text-[115%] transition duration-[.25s] ease-in font-bold text-center leading-loose uppercase tracking-[0.16rem] text-corp-blue-dark m-0 p-0"
                >
                  {{ copy.uiuxDesigner }} +
                </h3>
                <h3
                  class="font-corp-copy text-[115%] transition duration-[.25s] ease-in font-bold text-center leading-loose uppercase tracking-[0.16rem] ml-2 text-corp-blue-dark m-0 p-0"
                >
                  {{ copy.vizDesigner }}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <section class="contact">
          <p
            class="leading-normal font-corp-copy text-[1.3em] tracking-[.01em] items-center text-center grow font-semibold lowercase resumePara"
          >
            Resume:
            <a
              :href="copy.resumeWord"
              target="_blank"
              title="Word Resume"
              aria-label="Word Resume"
              class="resumeIconLink"
            >
              Word
              <IconWordMini class="resumeIcon" />
            </a>
            <a
              :href="copy.resumePDF"
              target="_blank"
              title="PDF Resume"
              aria-label="PDF Resume"
              class="resumeIconLink"
            >
              PDF
              <IconPDF class="resumeIcon" />
            </a>
          </p>
          <p
            class="leading-normal font-corp-copy text-[1.3em] tracking-[.01em] items-center text-center grow font-semibold lowercase"
          >
            <a
              :href="`mailto:` + `${copy.druEmail}`"
              class="text-corp-blue-dark hover:border-b-2 hover:border-dotted hover:border-corp-blue-mid"
            >
              {{ copy.druEmail }}
            </a>
          </p>
        </section>
      </section>
    </nav>
  </header>
</template>

<script setup>
  import IconWordMini from '~/components/Icons/iconWordMini.vue';
  import IconPDF from '~/components/Icons/iconPDF.vue';
  import drewHarper from '../components/navvyArt/drewHarper.vue';
  defineEmits(['toggleExtras']);
  const copy = useCopy();
  const showNavvy = ref(false);

  onMounted(() => {
    showNavvy.value = true;
  });
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .contact {
    @apply grow flex flex-col flex-wrap justify-center items-center content-center m-auto self-baseline gap-x-4 gap-y-2;

    @media (max-width: 840px) {
      @apply ml-0 flex-row mt-4;
    }

    @media (max-width: 630px) {
      @apply mt-[.4em] flex-row;
    }

    @media (max-width: 430px) {
      @apply mt-4 transition duration-[.25s] ease-in flex-row;
    }

    @media (max-width: 520px) {
      @apply mt-4 transition duration-[.25s] ease-in flex-col;
    }

    p {
      @media (max-width: 840px) {
        @apply justify-center;

        &:nth-child(1) {
          @apply text-right my-0 mx-1;
        }

        &:nth-child(2) {
          @apply text-left my-0 mx-1;
        }
      }

      @media (max-width: 430px) {
        @apply justify-center leading-5 -mb-px text-center;
      }

      &.resumePara {
        @apply flex items-center gap-2;

        &:hover a.resumeIconLink .resumeIcon {
          @apply fill-corp-blue-dark text-black;
        }

        a.resumeIconLink {
          @apply inline-flex items-center gap-1 no-underline text-corp-blue-dark mr-1;

          &:hover {
            @apply text-corp-blue-mid underline underline-offset-3;
          }

          .resumeIcon {
            @apply w-3.5 fill-black text-corp-blue-dark;

            &:hover {
              @apply fill-corp-blue-dark text-black;
            }
          }
        }
      }
    }
  }
</style>

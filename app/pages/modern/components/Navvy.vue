<!-- pages/modern/components/Navvy.vue -->
<template>
  <header class="w-full">
    <nav
      class="flex flex-col flex-nowrap justify-center items-center gap-y-4 p-0 mt-14"
    >
      <h1
        class="drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] font-modern-subhead text-[2.25rem] text-modern-accent-red tracking-tight w-full flex grow justify-center items-center gap-2 antialiased font-light leading-10 text-center lowercase transition duration-200 ease-in break-lg:text-[3.25rem] break-sm:text-[2.75rem] break-xsm:text-[2.25rem] hover:text-modern-accent"
      >
        <div
          class="text-modern-accent-red cursor-pointer"
          @click="$emit('toggle-extras')"
        >
          drew harper
        </div>
        <AuthenticStamp
          class="authenticStamp cursor-pointer"
          @click="$emit('toggle-extras')"
        />
      </h1>

      <h2
        class="drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] font-modern-copy leading-[1.5em] text-[1.3rem] text-[hsla(0,0%,100%,0.85)] tracking-normal antialiased font-normal text-center lowercase"
      >
        {{ copy.uiuxDesigner }} / {{ copy.vizDesigner }}
      </h2>

      <section class="duration-[.25s] z-10 mt-0 transition ease-in">
        <p
          class="drop-shadow-[1px_1px_4px_rgba(0,0,0,0.1)] font-modern-copy leading-[1.4rem] text-[0.8rem] tracking-[0.05rem] flex flex-row flex-wrap grow justify-center gap-x-3 gap-y-3 antialiased font-medium text-center"
        >
          <nuxt-link :to="`mailto:` + `${copy.druEmail}`" class="btn">
            {{ copy.druEmail }}
          </nuxt-link>
          <span class="btn resumeBtn">
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
          </span>
        </p>
      </section>
    </nav>
  </header>
</template>

<script setup>
  import IconWordMini from '~/components/Icons/iconWordMini.vue';
  import IconPDF from '~/components/Icons/iconPDF.vue';
  defineEmits(['toggle-extras']);
  const copy = useCopy();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  .authenticStamp {
    @apply -mr-105 h-auto w-22.5 fixed max-w-22.5 min-w-22.5 fill-base-ivory;

    @media (max-width: 840px) {
      @apply -mr-95 -mt-2.5 w-22.5;
    }

    @media (max-width: 630px) {
      @apply -mr-82.5 -mt-5 w-20;
    }

    @media (max-width: 430px) {
      @apply -mr-75 -mt-5 w-17.5;
    }

    @media (max-width: 320px) {
      @apply -mr-75 -mt-2.5 w-17.5;
    }
  }
  .btn {
    @apply border border-[#ff000054] border-solid py-[0.3rem] rounded-4xl my-0 px-5 text-base-ivory hover:no-underline  no-underline;
    &:hover {
      @apply bg-modern-ruby cursor-pointer;
    }
  }
  .resumeBtn {
    @apply text-base-ivory flex items-center gap-2;
    &:hover a.resumeIconLink .resumeIcon {
      @apply fill-white text-black;
    }

    a.resumeIconLink {
      @apply text-white fill-modern-ruby items-center gap-1 mr-1;
      &:hover {
        @apply underline underline-offset-3 text-white;
      }
      .resumeIcon {
        @apply fill-white w-4 text-modern-ruby ml-0.5;

        &:hover {
          @apply fill-amber-400 text-black;
        }
        path.letterColor {
          /* @apply fill-amber-400; */
        }
      }
    }
  }
</style>

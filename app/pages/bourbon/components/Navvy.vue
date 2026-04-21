<template>
  <nav
    class="col-start-1 col-span-2 bg-[url(/img/bg/bg_bag_dk.webp)] bg-repeat shadow-dru-shadow z-40"
  >
    <div class="flex flex-row flex-wrap items-center justify-center px-5 py-2">
      <h1>
        <a
          href="#"
          class="no-underline text-base-ivory hover:text-[orange] hover:cursor-pointer"
          @click="$emit('toggleExtras')"
        >
          DREW HARPER
        </a>
      </h1>
      <section class="jobDesc">
        <h2>{{ copy.uiuxDesigner }}</h2>
        <h2>{{ copy.vizDesigner }}</h2>
      </section>
      <section class="contact">
        <p class="email">
          <a
            class="no-underline text-base-ivory hover:text-[orange]"
            :href="`mailto:` + `${copy.druEmail}`"
          >
            {{ copy.druEmail }}
          </a>
        </p>
        <p class="resume">
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
      </section>
    </div>
  </nav>
</template>

<script setup>
  import IconWordMini from '~/components/Icons/iconWordMini.vue';
  import IconPDF from '~/components/Icons/iconPDF.vue';
  defineEmits(['toggleExtras']);
  const copy = useCopy();
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  h1 {
    @apply text-bourbon-ivory font-normal text-[4em] leading-none tracking-[.06em] p-0 m-0 transition duration-[.25s] ease-in antialiased w-auto grow-0 drop-shadow-[4px_0px_3px_rgba(0,0,0,0.1)] font-(family-name:--font-family-bourbon-subhead);

    @media (max-width: 840px) {
      @apply grow-0 text-right;
    }

    @media (max-width: 630px) {
      @apply grow-0 text-center;
    }

    @media (max-width: 430px) {
      @apply text-[3.05rem];
    }
  }

  section.jobDesc {
    @apply grow ml-[0.55rem] mt-[0.1rem] transition duration-[.25s] ease-in;

    @media (max-width: 840px) {
      @apply grow-0 ml-2;
    }

    @media (max-width: 630px) {
      @apply grow-0 text-center self-center ml-0;
    }

    @media (max-width: 430px) {
      @apply ml-0 mt-0;
    }

    h2 {
      @apply p-0 m-0 text-bourbon-ivory text-[1.675rem] tracking-[0.075rem] leading-[1.55rem] antialiased mb-[.15rem] drop-shadow-[3px_0px_3px_rgba(0,0,0,0.1)] font-(family-name:--font-family-bourbon-head);

      &:nth-child(2) {
        @apply text-[1.51rem] mb-[.1em];
      }

      @media (max-width: 630px) {
        @apply inline-block text-[1.775em];

        &:nth-child(2) {
          @apply ml-1 text-[1.775em];
        }
      }

      @media (max-width: 430px) {
        @apply text-[1.25em];

        &:nth-child(2) {
          @apply text-[1.25em];
        }
      }
    }
  }

  section.contact {
    @apply uppercase mt-2 z-10 transition duration-[.25s] ease-in drop-shadow-[3px_0px_1px_rgba(0,0,0,0.1)];

    @media (max-width: 840px) {
      @apply w-full flex flex-row flex-wrap items-center justify-center gap-4;
    }

    @media (max-width: 630px) {
      @apply mt-[0.5em] flex-row;
    }

    @media (max-width: 430px) {
      @apply mt-1 transition duration-[.25s] ease-in gap-x-2 gap-y-1;
    }

    p {
      @apply tracking-[0.05rem] text-[1.15rem] leading-[1.35rem] lowercase antialiased font-(family-name:--font-family-bourbon-copy);

      @media (max-width: 840px) {
        @apply justify-center text-[1.5rem] tracking-[0.1785rem] mt-[-.3em] leading-[1.95rem];
      }

      @media (max-width: 630px) {
        @apply text-[1.05rem] tracking-[.09em];
      }

      @media (max-width: 430px) {
        @apply justify-center text-[1rem] tracking-[.09em] leading-5 text-center;
      }

      &.resume {
        @apply flex items-center gap-2;

        &:hover a.resumeIconLink .resumeIcon {
          @apply fill-base-ivory text-black;
        }

        a.resumeIconLink {
          @apply inline-flex items-center gap-1 no-underline text-base-ivory mr-1;

          &:hover {
            @apply text-[orange] underline underline-offset-3;
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
  }
</style>

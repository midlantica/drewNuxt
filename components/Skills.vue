<template>
  <div class="skillsGrid">
    <div v-for="(item, index) in skills" :key="index">
      <component
        :is="item[0]"
        class="icon {{item[1]}} { active: hover }"
        @mouseleave="hover = false"
        @click="showModal(item)"
      />
    </div>

    <Teleport to="#modal">
      <transition name="modal-fade">
        <div class="modalBg" v-if="isModalOpen">
          <div class="modal" ref="modal">
            <div class="closeBtn" @click="closeModal">
              <xOut />
            </div>
            <div class="modalInner">
              <div class="icon">
                <component
                  :is="modelItem[0]"
                  class="icon {{modelItem[1]}} { active: hover }"
                  @mouseleave="hover = false"
                />
              </div>
              <div class="content">
                <h4>{{ modelItem[2] }}</h4>
                <p>{{ modelItem[3] }}</p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
  import { ref, markRaw, defineAsyncComponent } from 'vue'
  import { onClickOutside } from '@vueuse/core'

  import xOut from './Icons/iconXout.vue'

  const iconUiux = markRaw(defineAsyncComponent(() => import('./Icons/iconUiux.vue')))
  const iconHtml5 = markRaw(defineAsyncComponent(() => import('./Icons/iconHtml5.vue')))
  const iconCss3 = markRaw(defineAsyncComponent(() => import('./Icons/iconCss3.vue')))
  const iconJs = markRaw(defineAsyncComponent(() => import('./Icons/iconJs.vue')))
  const iconSketch = markRaw(defineAsyncComponent(() => import('./Icons/iconSketch.vue')))
  const iconSass = markRaw(defineAsyncComponent(() => import('./Icons/iconSass.vue')))
  const iconVue = markRaw(defineAsyncComponent(() => import('./Icons/iconVue.vue')))
  const iconSvg = markRaw(defineAsyncComponent(() => import('./Icons/iconSvg.vue')))
  const iconTailwind = markRaw(defineAsyncComponent(() => import('./Icons/iconTailwind.vue')))
  const iconFigma = markRaw(defineAsyncComponent(() => import('./Icons/iconFigma.vue')))
  const iconNuxt = markRaw(defineAsyncComponent(() => import('./Icons/iconNuxt.vue')))
  const iconChelsea = markRaw(defineAsyncComponent(() => import('./Icons/iconChelsea.vue')))

  const modal = ref(null)

  const hover = ref(false)

  const modelItem = ref([])

  function showModal (item) {
    modelItem.value = item
    isModalOpen.value = true
  }

  function closeModal () {
    isModalOpen.value = false
  }

  const isModalOpen = ref(false)

  onClickOutside(modal, () => (isModalOpen.value = false))

  const skills = markRaw([
    [
      iconUiux,
      'uiux',
      'UI/UX Design',
      'UX Design is my first love. Humility before the User. Crack the flow!'
    ],
    [
      iconFigma,
      'figma',
      'Figma',
      'Figma is the king of UX prototyping. It ain\'t Illustrator but collaboration ftw. I am still mad at Adobe for destroying Fireworks! Now they\'ve bought Figma; what could go wrong?!?'
    ],
    [
      iconHtml5,
      'html5',
      'HTML 5',
      'The bones of the Internet; as few divs as possible if you please.'
    ],
    [
      iconCss3,
      'css3',
      'CSS 3',
      'Coders just love CSS haha! So let me do that for you! I enjoy its declarative cascading infuriating novelty.'
    ],
    [
      iconJs,
      'js',
      'JavaScript',
      'JavaScript: I design, do all my HTML & CSS, I\'m still mastering JS. Continuous learning, Love me some Vue 💚, like this site'
    ],
    [
      iconTailwind,
      'tailwind',
      'Tailwind CSS',
      'Tailwind is great DX, even though it does clutter up your HTML, so just @apply it! Believe it or not, I actually made a mini Tailwind of my own, before Tailwind knocked it out of the park. Learned a lot converting this site to Tailwind 😀'
    ],
    [
      iconSass,
      'sass',
      'SASS',
      'SASS has made CSS so much more fun and nesty to use. CSS\'s --vars make it more robust, but there\'s a long way to go before I give up my trusted SASS.'
    ],
    [
      iconVue,
      'vue',
      'Vue',
      'Vue.js is my favorite JS framework, a great balance of Angular\'s ease and React\'s abilities. This site is 100% Vue.'
    ],
    [
      iconNuxt,
      'nuxt',
      'Nuxt',
      'The Nuxt framework for Vue: SSR, routes by dir, SEO; it\'s jam-stacked with Dev happiness. Digging Gridsome.js too.'
    ],
    [
      iconSketch,
      'sketch',
      'Sketch',
      'Sketch used to be the king of UX prototyping, now it\'s old school.'
    ],
    [
      iconSvg,
      'svg',
      'SVG',
      'SVG: Vector is best because it scales and rasters don\'t, and it\'s editable, you can even put CSS in a SVG file.'
    ],
    [
      iconChelsea,
      'chelsea',
      'Chelsea FC',
      'I love Chelsea FC! 💙  I enjoy competition. Love Rugby and Cricket too. I was a demon fast bowler! And 🇺🇸 Football, Go Titans!'
    ]
  ])

</script>

<style scoped>

  .modalBg {
    @apply fixed w-full top-0 flex justify-center items-center m-auto h-full left-0 right-0 bottom-0 z-50 bg-black/60 animate-[fade_.25s];

    .modal {
      width: clamp(calc(300px - 2rem), 500px, calc(100% - 2rem));
      @apply relative mb-auto mt-[260px] bg-white rounded-[20px]
      bg-gradient-to-b from-[#fff] to-[#E2F2F3] shadow-[0px_6px_10px_0px_#0000004D];

      .closeBtn {
        @apply absolute flex items-center justify-center cursor-pointer bg-white rounded-[20px] w-[40px] h-[40px] border-none text-black/50 top-[-10px] right-[-10px];
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        @apply text-center mt-1 text-black/80;
      }

      h4 {
        @apply text-[1.2rem] tracking-normal;
      }

      p {
        @apply text-[1rem] leading-[1.8];
      }

      .modalInner {
        @apply relative flex flex-wrap justify-center items-center justify-items-center mt-4 mx-8 mb-6;

        .icon {
          @apply self-center justify-items-center h-[88px] gap-0;

          svg {
            @apply w-[180px] m-auto;
          }
        }

        .content {
          @apply inline shrink;
        }
      }
    }
  }

  .skillsGrid div {
    @apply h-[70px] m-auto flex items-center justify-center;
  }
  .skillsGrid {
    @apply col-start-1 col-end-2 row-start-2 row-end-4 w-full grid justify-center items-stretch content-between relative gap-y-[.5] gap-x-[auto] justify-items-center;

    @media (max-width: theme("screens.breakXlg")) {
      @apply row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakLg")) {
      @apply row-start-2 row-end-2;
    }

    @media (max-width: theme("screens.breakSm")) {
      @apply row-start-2 row-end-2;
    }

    @media (min-width: 1026px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)] ;
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)] ;
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)] ;
    }

    @media (max-width: 470px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)] ;
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackLt;

      &:hover {
        @apply animate-[shimmy] duration-[.25s];
      }
    }

    svg g {
      @apply cursor-pointer;
    }
  }

  body.modern .skillsGrid {
    @apply grid-cols-[repeat(auto-fit,_minmax(25%,_1fr))] w-[70%] justify-center my-4 mx-auto gap-y-4 gap-x-0;

    @media (min-width: 770px) {
      @apply w-3/5;
    }

    @media (max-width: 700px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] w-[80%];
    }

    svg {
      @apply w-[100px] mx-auto drop-shadow-lg;

      &:hover {

      }

      g {
        @apply shadow-[0px_0px_12px_0px_black];
      }
    }
  }

  body.bourbon .skillsGrid {

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] mt-[-1.3rem];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,_minmax(88px,_1fr))];
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(3,_minmax(110px,_1fr))];
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(88px,_1fr))];
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackLt;
    }
  }

  body.techy .skillsGrid {

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(12,_minmax(84px,_1fr))];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,_minmax(84px,_1fr))];
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(110px,_1fr))];
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(110px,_1fr))];
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackLt;
    }
  }

  body.groovy .skillsGrid {
    @apply transition duration-[.25s] ease-in mt-0 mr-[-1rem] mb-0 ml-0;

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(12,_minmax(84px,_1fr))];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,_minmax(84px,_1fr))];
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(4,_minmax(88px,_1fr))];
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(3,_minmax(88px,_1fr))];
    }

    @media (max-width: 320px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(88px,_1fr))];
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackLt;
    }

  }

  body.corp .skillsGrid {

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] mt-[-2.8rem];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,_minmax(88px,_1fr))];
    }

    @media (min-width: theme("screens.breakXxsm")) and (max-width: 562px) {
      @apply grid-cols-[repeat(3,_minmax(110px,_1fr))];
    }

    @media (max-width: theme("screens.breakXxsm")) {
      @apply grid-cols-[repeat(auto-fit,_minmax(88px,_1fr))];
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackLt ;
      filter: brightness(0.85) sepia(1) hue-rotate(160deg) saturate(3);

      &:hover {
        @apply animate-[shimmy_.25s];
      }
    }
  }

  body.punk .skillsGrid {
    @apply transition duration-[.25s] ease-in mt-2 mx-auto mb-0 bg-[rgba(0,140,0,0.3)];

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(12,_minmax(84px,_1fr))];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,_minmax(88px,_1fr))];
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(110px,_1fr))];
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(88px,_1fr))];
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackMd;
    }
  }

  .modern #modal .content:has(h4, p) {
    @apply font-modernCopy;
  }

  .bourbon #modal .content:has(h4, p) {
    @apply font-bourbonCopy;
  }
  .groovy #modal .content:has(h4, p) {
    @apply font-groovyCopy;
  }
  .techy #modal .content:has(h4, p) {
    @apply font-techyCopy;
  }
  .corp #modal .content:has(h4, p) {
    @apply font-corpCopy;
  }
  .punk #modal .content:has(h4, p) {
    @apply font-punkCopy;
  }

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    @apply opacity-0;
  }
</style>

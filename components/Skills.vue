<template>
  <div
    v-show="showSkills"
    class="skillsGrid"
  >
    <div
      v-for="skill in skills"
      :key="skill[1]"
    >
      <component
        :is="skill[0]"
        class="icon {{skill[1]}} }"
        :class="{ active: hover }"
        @mouseleave="hover = false"
        @click="showModal(skill)"
        @mouseenter="hover = true"
      />
    </div>

    <Modal
      :isModalOpen="isModalOpen"
      :modalItem="modalItem"
      @closeModal="closeModal"
    />
  </div>
</template>

<script setup>
  import { ref, markRaw, defineAsyncComponent } from 'vue';

  import {
    iconUiux,
    iconHtml5,
    iconCss3,
    iconJs,
    iconAdobeIcons,
    iconSass,
    iconVue,
    iconAffinityIcons,
    iconTailwind,
    iconFigma,
    iconNuxt,
    iconChelsea
  } from './Icons/allicons.vue';

  const showSkills = ref(false);
  const hover = ref(false);
  const modalItem = ref([]);
  const isModalOpen = ref(false);

  // Define a flag to track whether the initial animation cycle has completed
  const initialAnimationCompleted = ref(false);

  // Function to start the initial animation cycle
  function startInitialAnimationCycle() {
    // Set the hover flag to true to trigger the animation
    hover.value = true;

    // Set a timer to stop the animation after a delay
    setTimeout(() => {
      hover.value = false;
      initialAnimationCompleted.value = true; // Update the flag to indicate completion
    }, 1000); // Adjust the delay as needed
  }

  function showModal(skill) {
    modalItem.value = {
      component: skill[0],
      className: skill[1],
      title: skill[2],
      description: skill[3],
      url: skill[4] || null // Add URL field, default to null if not provided
    };
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

  const skills = markRaw([
    [
      iconUiux,
      `uiux`,
      `UI/UX Design`,
      `UX Design is my first love. Humility before the User. Crack the flow! When UX is done well, it's invisible.`
    ],
    [
      iconFigma,
      `figma`,
      `Figma`,
      `Figma is the king of UX, superb app, it's got killer collaboration chops. I am still mad at Adobe for destroying Fireworks! Adobe bought Figma; what could go wrong?!? *Update: Looks like EU courts stopped Adobe, so there's hope for Figma yet.`
    ],
    [
      iconHtml5,
      `html5`,
      `HTML 5`,
      `The bones of the Internet; as few divs as possible if you please.`
    ],
    [
      iconCss3,
      `css3`,
      `CSS 3`,
      `Coders just love CSS haha! So let me do that for you! I enjoy its declarative cascading infuriating novelty.`
    ],
    [
      iconJs,
      `js`,
      `JavaScript`,
      `JavaScript: I design, do all my HTML & CSS, I'm still mastering JS. Continuous learning, Love me some Vue 💚, like this site`
    ],
    [
      iconTailwind,
      `tailwind`,
      `Tailwind CSS`,
      `Tailwind is great DX, even though it does clutter up your HTML, so just @apply it! Believe it or not, I actually made a mini Tailwind of my own, before Tailwind knocked it out of the park. Learned a lot converting this site to Tailwind 😀`,
      `https://tailwindcss.com/`
    ],
    [
      iconSass,
      `sass`,
      `SASS`,
      `SASS has made CSS so much more fun and nesty to use. CSS's --vars make it more robust, but there's a long way to go before I give up my trusted SASS.`,
      `https://sass-lang.com/`
    ],
    [
      iconVue,
      `vue`,
      `Vue`,
      `Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities. This site is 100% Vue.`,
      `https://vuejs.org/`
    ],
    [
      iconNuxt,
      `nuxt`,
      `Nuxt`,
      `The Nuxt framework for Vue: SSR, routes by dir, SEO; it's jam-stacked with Dev happiness. Digging Gridsome.js too.`,
      `https://nuxt.com/`
    ],
    [
      iconAdobeIcons,
      `adobeCS`,
      `Adobe Creative Suite`,
      `The classic Illustrator, PhotoShop, and InDesign have beeen my daily go-tos for decades. I'm checking out Affinity's Creative Suite these days. Between Figma and Affinity, I could drop the Adobe subscription.`
    ],
    [
      iconAffinityIcons,
      `affinityCS`,
      `Affinity Creative Suite`,
      `Affinity's apps are fantastic replacements for Adobe's subscription-ware. Superbly thought out programs with great Designer Experience. And they have been written from the ground up to work smoothly with each other.`,
      `https://affinity.serif.com/`
    ],
    [
      iconChelsea,
      `chelsea`,
      `Chelsea FC`,
      `I love Chelsea FC! 💙  I enjoy competition. Love Rugby and Cricket too. I was a demon fast bowler! And 🇺🇸 Football, Go Titans!`
    ]
  ]);

  onMounted(() => {
    showSkills.value = true;
  });

  startInitialAnimationCycle();
</script>

<style scoped>
  .skillsGrid div {
    @apply h-[70px] m-auto flex items-center justify-center;
  }
  .skillsGrid {
    @apply w-full grid justify-center items-stretch content-between relative gap-y-[.5] gap-x-[auto] justify-items-center;

    @media (max-width: theme('screens.breakXlg')) {
      @apply row-start-2 row-end-2;
    }

    @media (max-width: theme('screens.breakLg')) {
      @apply row-start-2 row-end-2;
    }

    @media (max-width: theme('screens.breakSm')) {
      @apply row-start-2 row-end-2;
    }

    @media (min-width: 1026px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)];
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)];
    }

    @media (max-width: 470px) {
      @apply grid-rows-[auto-fit,_minmax(120px,_1fr)];
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackLt;

      &:hover {
        @apply animate-[shimmy] duration-[.25s];
      }
    }

    svg g {
      @apply cursor-pointer will-change-transform pointer-events-auto relative z-10;
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
      @apply grid-cols-[repeat(6,_minmax(88px,_1fr))] col-span-full;
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(3,_minmax(110px,_1fr))] col-span-full;
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(auto-fit,_minmax(88px,_1fr))] col-span-full;
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

    @media (min-width: theme('screens.breakXxsm')) and (max-width: 562px) {
      @apply grid-cols-[repeat(3,_minmax(110px,_1fr))];
    }

    @media (max-width: theme('screens.breakXxsm')) {
      @apply grid-cols-[repeat(auto-fit,_minmax(88px,_1fr))];
    }

    svg {
      @apply w-[88px] drop-shadow-tightBlackLt;
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
</style>

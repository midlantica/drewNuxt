<template>
  <div v-show="showSkills" class="skillsGrid">
    <div v-for="skill in skills" :key="skill[1]">
      <component
        :is="skill[0]"
        :class="['icon', skill[1], { active: hover }]"
        @mouseleave="hover = false"
        @click="showModal(skill)"
        @mouseenter="hover = true"
      />
    </div>

    <Modal
      :is-modal-open="isModalOpen"
      :modal-item="modalItem"
      @close-modal="closeModal"
    />
  </div>
</template>

<script setup>
  import { ref, markRaw } from 'vue';
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
  defineOptions({ name: 'SkillsGrid' });

  const showSkills = ref(false);
  const hover = ref(false);
  const modalItem = ref([]);
  const isModalOpen = ref(false);

  // Function to start the initial animation cycle
  function startInitialAnimationCycle() {
    hover.value = true;
    setTimeout(() => {
      hover.value = false;
    }, 1000);
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

  const skills = [
    [
      markRaw(iconUiux),
      `uiux`,
      `UI/UX Design`,
      `UX Design is my first love. Humility before the User. Crack the flow! When UX is done well, it's invisible.`
    ],
    [
      markRaw(iconFigma),
      `figma`,
      `Figma`,
      `Figma is the king of UX, superb app, it's got killer collaboration chops. I am still mad at Adobe for destroying Fireworks! Adobe tried and failed to buy Figma; hoorah!`
    ],
    [
      markRaw(iconHtml5),
      `html5`,
      `HTML 5`,
      `The bones of the Internet; as few divs as possible if you please.`
    ],
    [
      markRaw(iconCss3),
      `css3`,
      `CSS 3`,
      `Coders love CSS haha! So let me do that for you! I enjoy its mostly declarative cascading infuriating novelty. Recent updates have made it more programming friendly, variables! The excitement! 😆`
    ],
    [
      markRaw(iconJs),
      `js`,
      `JavaScript`,
      `JavaScript: I design, do all my HTML & CSS, I'm still mastering JS. Continuous learning, Love me some Vue/Nuxt 💚, like this site!`
    ],
    [
      markRaw(iconTailwind),
      `tailwind`,
      `Tailwind CSS`,
      `Tailwind is great DX, even though it does clutter up your HTML, so just @apply it! Believe it or not, I actually made a mini Tailwind of my own, before Tailwind knocked it out of the park. Learned a lot converting this site to Tailwind 😀`,
      `https://tailwindcss.com/`
    ],
    [
      markRaw(iconSass),
      `sass`,
      `SASS`,
      `SASS\u2009—\u2009my old friend\u2009—\u2009had made CSS so much more fun and nesty to use. CSS has very slowly updated to have most of its features, but there are plenty of old sites still using my old trusted SASS.`,
      `https://sass-lang.com/`
    ],
    [
      markRaw(iconVue),
      `vue`,
      `Vue`,
      `Vue.js is my favorite JS framework, a great balance of Angular's ease and React's abilities. This site is 100% Vue, which I converted to Nuxt.`,
      `https://vuejs.org/`
    ],
    [
      markRaw(iconNuxt),
      `nuxt`,
      `Nuxt`,
      `The Nuxt framework for Vue: SSR, routes by dir, SEO; it's jam-stacked with Dev happiness. Digging Svelte too.`,
      `https://nuxt.com/`
    ],
    [
      markRaw(iconAdobeIcons),
      `adobeCS`,
      `Adobe Creative Suite`,
      `The classic Illustrator, PhotoShop, and InDesign have been my daily go-tos for decades. I'm checking out Affinity's Creative Suite these days. Between Figma and Affinity, I could drop the Adobe subscription.`
    ],
    [
      markRaw(iconAffinityIcons),
      `affinityCS`,
      `Affinity Creative Suite`,
      `Affinity's apps are fantastic replacements for Adobe's subscription-ware. Superbly thought out programs with great Designer Experience. And they have been written from the ground up to work smoothly with each other.`,
      `https://affinity.serif.com/`
    ],
    [
      markRaw(iconChelsea),
      `chelsea`,
      `Chelsea FC`,
      `I love Chelsea FC! 💙  I enjoy competition. Love Rugby and Cricket too. I was a demon fast bowler! And 🇺🇸 Football, Go Titans!`
    ]
  ];

  onMounted(() => {
    showSkills.value = true;
    startInitialAnimationCycle();
  });
</script>

<style scoped>
  @reference "../assets/css/tailwind.css";
  .skillsGrid div {
    @apply h-17.5 m-auto flex items-center justify-center;
  }

  .skillsGrid {
    @apply w-full grid justify-center items-stretch content-between relative gap-y-0.5 justify-items-center min-w-0;

    svg {
      @apply w-22;
      filter: drop-shadow(var(--drop-shadow-tight-black-lt));

      &:hover {
        @apply animate-[shimmy] duration-[.25s];
      }
    }

    svg g {
      @apply cursor-pointer will-change-transform pointer-events-auto relative z-10;
    }
  }

  body.modern .skillsGrid {
    @apply grid-cols-[repeat(auto-fit,minmax(25%,1fr))] w-[70%] justify-center my-4 mx-auto gap-y-4 gap-x-0;

    @media (min-width: 770px) {
      @apply w-3/5;
    }

    @media (max-width: 700px) {
      @apply grid-cols-[repeat(auto-fit,minmax(100px,1fr))] w-[80%];
    }

    svg {
      @apply w-25 mx-auto drop-shadow-xl;

      &:hover {
      }

      g {
        @apply shadow-[0px_0px_12px_0px_black];
      }
    }
  }

  body.bourbon .skillsGrid {
    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(auto-fit,minmax(120px,1fr))] mt-[-1.3rem];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,minmax(88px,1fr))] col-span-full;
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(3,minmax(110px,1fr))] col-span-full;
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(auto-fit,minmax(88px,1fr))] col-span-full;
    }

    svg {
      @apply w-22;
      filter: drop-shadow(var(--drop-shadow-tight-black-lt));
    }
  }

  body.techy .skillsGrid {
    /* Mobile-first: 2 cols base */
    @apply grid-cols-[repeat(2,1fr)];

    @media (min-width: 321px) and (max-width: 562px) {
      @apply grid-cols-[repeat(4,1fr)];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,1fr)];
    }

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(12,1fr)] -mt-2 -ml-4 mr-0 w-[104%];
    }

    svg {
      /* Scale with column, max out at 88px */
      @apply w-full max-w-22;
      filter: drop-shadow(var(--drop-shadow-tight-black-lt));
    }
  }

  body.groovy .skillsGrid {
    @apply transition duration-[.25s] ease-in mt-0 -mr-4 mb-0 ml-0;

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(12,minmax(84px,1fr))];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,minmax(84px,1fr))];
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(4,minmax(88px,1fr))];
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(3,minmax(88px,1fr))];
    }

    @media (max-width: 320px) {
      @apply grid-cols-[repeat(auto-fit,minmax(88px,1fr))];
    }

    svg {
      @apply w-22;
      filter: drop-shadow(var(--drop-shadow-tight-black-lt));
    }
  }

  body.corp .skillsGrid {
    /* Base: 4 cols fits in the half-width left column at desktop */
    @apply grid-cols-[repeat(4,1fr)];

    @media (min-width: 1026px) {
      @apply mt-[-2.8rem];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      /* Full width at tablet — 6 cols fits fine */
      @apply grid-cols-[repeat(6,1fr)];
    }

    @media (max-width: 320px) {
      @apply grid-cols-[repeat(3,1fr)];
    }

    svg {
      @apply w-22;
      filter: brightness(0.85) sepia(1) hue-rotate(160deg) saturate(3);

      &:hover {
        @apply animate-[shimmy_.25s];
      }
    }
  }

  body.anthro .skillsGrid {
    /* Mobile-first: 4 cols base */
    @apply grid-cols-[repeat(4,1fr)];

    @media (min-width: 321px) and (max-width: 562px) {
      @apply grid-cols-[repeat(4,1fr)];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,1fr)];
    }

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(12,1fr)] -mt-2 -ml-4 mr-0 w-[104%];
    }

    svg {
      @apply w-full max-w-22;
      filter: drop-shadow(1px 1px 1px hsla(0, 0%, 0%, 0.15));
    }
  }

  body.punk .skillsGrid {
    @apply transition duration-[.25s] ease-in mt-2 mx-auto mb-0 bg-[rgba(0,140,0,0.3)];

    @media (min-width: 1026px) {
      @apply grid-cols-[repeat(12,minmax(84px,1fr))];
    }

    @media (min-width: 563px) and (max-width: 1025px) {
      @apply grid-cols-[repeat(6,minmax(88px,1fr))];
    }

    @media (min-width: 471px) and (max-width: 562px) {
      @apply grid-cols-[repeat(auto-fit,minmax(110px,1fr))];
    }

    @media (max-width: 470px) {
      @apply grid-cols-[repeat(auto-fit,minmax(88px,1fr))];
    }

    svg {
      @apply w-22;
      filter: drop-shadow(var(--drop-shadow-tight-black-md));
    }
  }
</style>

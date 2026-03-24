// stores/copy.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCopy = defineStore('copy', () => {
  const drewHarper = ref('Drew Harper');
  const uiuxDesigner = ref('UI/UX Designer');
  const druEmail = ref('druharper@gmail.com');
  const portfolio = ref('/resume/drew_harper_resume_portfolio.pdf');
  const vizDesigner = ref('Visual Designer');
  const druHead = ref('When UX design is done right the design seems inevitable');
  const druCopy = ref(
    `Anything from a <span class='smallCaps'>UX</span> prototype, figuring out a User Story flow, a wireframe, a design system, responsive site, mobile app <span class='smallCaps'>UI</span>, a quick skin job, or getting in the trenches with <span class='smallCaps'>HTML</span> and <span class='smallCaps'>CSS</span>, I can deliver. I practice humility before the User. Love learning more about coding; I'm a coder groupie 😃`
  );
  const aboutCopy = ref(
    `I'm half-English/half-American, worked in Advertising most my life, switched to web in late '90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.`
  );
  const modern = ref('Modern');
  const bourbon = ref('Bourbon');
  const groovy = ref('Groovy');
  const techy = ref('Techy');
  const corp = ref('Corp');
  const punk = ref('Punk');
  const characters = ref([
    { name: 'Leto', line: 'Here on Dune we need Desert Power.' },
    { name: 'Paul', line: 'I am the Quizats Hadderach!' }
  ]);

  function addCharacter(name, line) {
    characters.value.push({ name, line });
  }

  const getLineByName = computed(() => name =>
    characters.value.find(character => character.name === name)
  );

  return {
    drewHarper,
    uiuxDesigner,
    druEmail,
    portfolio,
    vizDesigner,
    druHead,
    druCopy,
    aboutCopy,
    modern,
    bourbon,
    groovy,
    techy,
    corp,
    punk,
    characters,
    addCharacter,
    getLineByName
  };
});

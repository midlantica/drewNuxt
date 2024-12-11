// stores/copy.js
import { defineStore } from 'pinia'; // Add this import statement

export const useCopy = defineStore({
  id: 'copy',
  state: () => ({
    drewHarper: `Drew Harper`,
    uiuxDesigner: `UI/UX Designer`,
    druEmail: `druharper@gmail.com`,
    portfolio: `/resume/drew_harper_resume_portfolio.pdf`,
    vizDesigner: `Visual Designer`,
    druHead: `When UX design is done right the design seems inevitable`,
    druCopy: `Anything from a <span class='smallCaps'>UX</span> prototype, figuring out a User Story flow, a wireframe, a design system, responsive site, mobile app <span class='smallCaps'>UI</span>, a quick skin job, or getting in the trenches with <span class='smallCaps'>HTML</span> and <span class='smallCaps'>CSS</span>, I can deliver. I practice humility before the User. Love learning more about coding; I’m a coder groupie 😃`,
    aboutCopy: `I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.`,
    modern: `Modern`,
    bourbon: `Bourbon`,
    groovy: `Groovy`,
    techy: `Techy`,
    corp: `Corp`,
    punk: `Punk`,
    characters: [
      {
        name: 'Leto',
        line: 'Here on Dune we need Desert Power.'
      },
      {
        name: 'Paul',
        line: 'I am the Quizats Hadderach!'
      }
    ]
  }),

  actions: {
    addCharacter(name, line) {
      this.characters.push({
        name,
        line
      });
    }
  },

  getters: {
    getLineByName: state => {
      return name =>
        state.characters.find(character => character.name === name);
    }
  }
});

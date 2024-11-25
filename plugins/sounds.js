// plugins/sounds.js
import { Howl, Howler } from 'howler';

export default defineNuxtPlugin(nuxtApp => {
  // Initialize sounds
  const yeehawSound = new Howl({ src: ['/yeehaw.mp3'], volume: 0.75 });
  const jollyGoodSound = new Howl({ src: ['/jollyGood.mp3'], volume: 0.75 });

  // Function to resume AudioContext if necessary
  const initializeAudioContext = () => {
    if (Howler.ctx && Howler.ctx.state === 'suspended') {
      Howler.ctx.resume().catch(error => {
        console.error('Failed to resume AudioContext:', error);
      });
    }
  };

  // Provide a global playSound function
  nuxtApp.provide('playSound', soundName => {
    initializeAudioContext();

    if (soundName === 'yeehaw') {
      yeehawSound.play();
    } else if (soundName === 'jollyGood') {
      jollyGoodSound.play();
    } else {
      console.warn(`Unknown sound: ${soundName}`);
    }
  });
});

// plugins/clickSound.js
import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  // Load the click sound
  const clickSound = new Howl({
    src: ['/sounds/ayah.mp3'], // Make sure this file is in the `public/sounds/` folder
    volume: 0.1 // Adjust volume as needed
  });

  // Function to play the sound
  const playAyah = () => {
    clickSound.play();
  };

  // Provide the function globally
  return {
    provide: {
      playAyah
    }
  };
});

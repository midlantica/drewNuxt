import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  let clickSound = null;

  const playAyah = () => {
    if (!clickSound) {
      clickSound = new Howl({
        src: ['/sounds/ayah.mp3'],
        volume: 0.1,
        html5: true
      });
    }
    clickSound.play();
  };

  return {
    provide: {
      playAyah
    }
  };
});

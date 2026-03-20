import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  const clickSound = new Howl({
    src: ['/sounds/ayah.mp3'],
    volume: 0.1
  });

  const playAyah = () => {
    clickSound.play();
  };

  return {
    provide: {
      playAyah
    }
  };
});

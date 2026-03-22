import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  let clickSound = null;

  const playNdok = () => {
    if (!clickSound) {
      clickSound = new Howl({
        src: ['/sounds/ndok.mp3'],
        volume: 0.1,
        html5: true
      });
    }
    clickSound.play();
  };

  return {
    provide: {
      playNdok
    }
  };
});

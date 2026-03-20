import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  const clickSound = new Howl({
    src: ['/sounds/ndok.mp3'],
    volume: 0.1
  });

  const playNdok = () => {
    clickSound.play();
  };

  return {
    provide: {
      playNdok
    }
  };
});

export default defineNuxtPlugin(() => {
  let audio = null;

  const playNdok = () => {
    if (!audio) {
      audio = new Audio('/sounds/ndok.mp3');
      audio.volume = 0.1;
    }
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return {
    provide: {
      playNdok
    }
  };
});

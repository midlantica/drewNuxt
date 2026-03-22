export default defineNuxtPlugin(() => {
  let audio = null;

  const playAyah = () => {
    if (!audio) {
      audio = new Audio('/sounds/ayah.mp3');
      audio.volume = 0.1;
    }
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  return {
    provide: {
      playAyah
    }
  };
});

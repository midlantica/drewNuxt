import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  // Dynamically load sound files from folders
  const ukSounds = Object.keys(import.meta.glob('/public/sounds/uk/*.mp3', { eager: true })).map(
    path => path.replace('/public', '')
  );

  const usSounds = Object.keys(import.meta.glob('/public/sounds/us/*.mp3', { eager: true })).map(
    path => path.replace('/public', '')
  );

  // Merge the sounds in alternating order
  const allSounds = [];
  const maxLength = Math.max(ukSounds.length, usSounds.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < usSounds.length) allSounds.push(usSounds[i]);
    if (i < ukSounds.length) allSounds.push(ukSounds[i]);
  }

  // Load the current index from localStorage or initialize it
  let currentIndex = parseInt(localStorage.getItem('currentSoundIndex') || '0', 10);

  // Play the next sound in the alternating order
  const playNextSound = () => {
    const soundPath = allSounds[currentIndex];
    if (!soundPath) return;

    const sound = new Howl({ src: [soundPath], volume: 0.75 });
    sound.play();

    // Update the index and store it
    currentIndex = (currentIndex + 1) % allSounds.length;
    localStorage.setItem('currentSoundIndex', currentIndex.toString());
  };

  return {
    provide: {
      playSound: playNextSound
    }
  };
});

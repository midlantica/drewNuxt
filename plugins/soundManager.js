import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  // Dynamically load sound files from folders
  const ukSounds = Object.keys(
    import.meta.glob('/public/sounds/uk/*.mp3', { eager: true })
  ).map(path => path.replace('/public', ''));

  const usSounds = Object.keys(
    import.meta.glob('/public/sounds/us/*.mp3', { eager: true })
  ).map(path => path.replace('/public', ''));

  // Merge the sounds in alternating order
  const allSounds = [];
  const maxLength = Math.max(ukSounds.length, usSounds.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < usSounds.length) allSounds.push(usSounds[i]);
    if (i < ukSounds.length) allSounds.push(ukSounds[i]);
  }

  // Load the current index from localStorage or initialize it
  let currentIndex = parseInt(
    localStorage.getItem('currentSoundIndex') || '0',
    10
  );

  // Reference for the current sound
  let currentSound = null;
  let isPlaying = false; // Track if a sound is currently playing

  // Play or stop the sound
  const toggleSound = () => {
    if (currentSound && isPlaying) {
      // Stop the current sound
      currentSound.stop();
      isPlaying = false;
    } else {
      // Play the next sound
      const soundPath = allSounds[currentIndex];
      if (!soundPath) return;

      currentSound = new Howl({
        src: [soundPath],
        volume: 0.75,
        onend: () => {
          isPlaying = false; // Reset when sound finishes naturally
        }
      });

      currentSound.play();
      isPlaying = true;

      // Update the index for the next sound and store it
      currentIndex = (currentIndex + 1) % allSounds.length;
      localStorage.setItem('currentSoundIndex', currentIndex.toString());
    }
  };

  return {
    provide: {
      playSound: toggleSound
    }
  };
});

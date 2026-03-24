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

  // Reference for the current Audio element
  let currentAudio = null;

  // Play or stop the sound
  const toggleSound = () => {
    // If a sound is currently playing, stop it (toggle off)
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
      return;
    }

    const soundPath = allSounds[currentIndex];
    if (!soundPath) return;

    // Clean up previous audio element
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
      currentAudio = null;
    }

    const audio = new Audio(soundPath);
    audio.volume = 0.75;
    currentAudio = audio;

    audio.addEventListener('ended', () => {
      currentAudio = null;
    }, { once: true });

    audio.play().catch(err => {
      console.warn('[soundManager] play error:', err);
      currentAudio = null;
    });

    currentIndex = (currentIndex + 1) % allSounds.length;
    localStorage.setItem('currentSoundIndex', currentIndex.toString());
  };

  return {
    provide: {
      playSound: toggleSound
    }
  };
});

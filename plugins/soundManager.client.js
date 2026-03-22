import { Howl, Howler } from 'howler';

export default defineNuxtPlugin(() => {
  // Force Howler to use HTML5 audio globally — bypasses Web Audio API
  // and avoids the AudioContext autoplay policy entirely
  Howler.usingWebAudio = false;

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
  let isPlaying = false;

  // Play or stop the sound
  const toggleSound = () => {
    if (currentSound && isPlaying) {
      currentSound.stop();
      isPlaying = false;
      return;
    }

    const soundPath = allSounds[currentIndex];
    if (!soundPath) return;

    // Unload previous sound to free resources
    if (currentSound) {
      currentSound.unload();
      currentSound = null;
    }

    currentSound = new Howl({
      src: [soundPath],
      volume: 0.75,
      html5: true,
      onplay: () => { isPlaying = true; },
      onend: () => { isPlaying = false; },
      onloaderror: (id, err) => {
        console.warn('[soundManager] load error:', err);
        isPlaying = false;
      },
      onplayerror: (id, err) => {
        console.warn('[soundManager] play error:', err);
        isPlaying = false;
      }
    });

    currentSound.play();

    currentIndex = (currentIndex + 1) % allSounds.length;
    localStorage.setItem('currentSoundIndex', currentIndex.toString());
  };

  return {
    provide: {
      playSound: toggleSound
    }
  };
});

export default defineNuxtPlugin(() => {
  // Static sound paths from /public/sounds — alternating us/uk
  const usSounds = [
    '/sounds/us/a-beautiful-friendship.mp3',
    '/sounds/us/after-all-tomorrow.mp3',
    '/sounds/us/all-men-are-equal.mp3',
    '/sounds/us/ask-not-what-your-country-can-do-for-you.mp3',
    '/sounds/us/do-you-believe-on-miracles.mp3',
    '/sounds/us/i-have-a-dream.mp3',
    '/sounds/us/yeehaw.mp3'
  ];

  const ukSounds = [
    '/sounds/uk/david-niven-tomfoolery.mp3',
    '/sounds/uk/god-save-the-king.mp3',
    '/sounds/uk/jollyGood.mp3',
    '/sounds/uk/never-jokes-about-a-wager.mp3',
    '/sounds/uk/strawberry-fields.mp3',
    '/sounds/uk/you-having-a-laugh.mp3'
  ];

  // Merge in alternating order: us, uk, us, uk...
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
  // Guard against out-of-range index (e.g. if list changed)
  if (currentIndex >= allSounds.length) currentIndex = 0;

  // Reference for the current Audio element
  let currentAudio = null;

  // Click: if playing → stop. If stopped → play next clip in loop.
  const toggleSound = () => {
    // If a sound is currently playing, stop it
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
      return;
    }

    // Clean up any stale audio element
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.src = '';
      currentAudio = null;
    }

    const soundPath = allSounds[currentIndex];
    if (!soundPath) return;

    const audio = new Audio(soundPath);
    audio.volume = 0.75;
    currentAudio = audio;

    audio.addEventListener(
      'ended',
      () => {
        currentAudio = null;
      },
      { once: true }
    );

    audio.play().catch(err => {
      console.warn('[soundManager] play error:', err);
      currentAudio = null;
    });

    // Advance to next track for the next click
    currentIndex = (currentIndex + 1) % allSounds.length;
    localStorage.setItem('currentSoundIndex', currentIndex.toString());
  };

  return {
    provide: {
      playSound: toggleSound
    }
  };
});

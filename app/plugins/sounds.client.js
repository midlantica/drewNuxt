// plugins/sounds.client.js
// Consolidated audio plugin — provides $playSound, $playNdok, $playAyah

export default defineNuxtPlugin(() => {
  // ── Sound Manager ($playSound) ──────────────────────────────────────────
  // Alternating US/UK clips, persisted index, click-to-stop behaviour.

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

  // Interleave US and UK clips: us, uk, us, uk…
  const allSounds = [];
  const maxLength = Math.max(usSounds.length, ukSounds.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < usSounds.length) allSounds.push(usSounds[i]);
    if (i < ukSounds.length) allSounds.push(ukSounds[i]);
  }

  let currentIndex = parseInt(localStorage.getItem('currentSoundIndex') || '0', 10);
  if (currentIndex >= allSounds.length) currentIndex = 0;

  let currentAudio = null;

  const playSound = () => {
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
      return;
    }
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
    audio.addEventListener('ended', () => { currentAudio = null; }, { once: true });
    audio.play().catch(err => {
      console.warn('[sounds] playSound error:', err);
      currentAudio = null;
    });
    currentIndex = (currentIndex + 1) % allSounds.length;
    localStorage.setItem('currentSoundIndex', currentIndex.toString());
  };

  // ── UI click sound ($playNdok) ──────────────────────────────────────────
  // Short UI feedback click — restarts from beginning each call.

  let ndokAudio = null;

  const playNdok = () => {
    if (!ndokAudio) {
      ndokAudio = new Audio('/sounds/ndok.mp3');
      ndokAudio.volume = 0.1;
    }
    ndokAudio.currentTime = 0;
    ndokAudio.play().catch(() => {});
  };

  // ── Ayah sound ($playAyah) ──────────────────────────────────────────────
  // Reserved for future use — same pattern as ndok.

  let ayahAudio = null;

  const playAyah = () => {
    if (!ayahAudio) {
      ayahAudio = new Audio('/sounds/ayah.mp3');
      ayahAudio.volume = 0.1;
    }
    ayahAudio.currentTime = 0;
    ayahAudio.play().catch(() => {});
  };

  return {
    provide: {
      playSound,
      playNdok,
      playAyah
    }
  };
});

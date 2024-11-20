// plugins/sounds.js
import { useSound } from '@vueuse/sound';

export default defineNuxtPlugin(() => {
  const { yeehawSound } = useSound('/public/yeehaw.mp3');
  const { jollyGoodSound } = useSound('/public/jollyGood.mp3');

  return {
    provide: {
      playSound: jollyGoodSound,
      playSound: yeehawSound
    }
  };
});

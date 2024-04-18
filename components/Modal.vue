<template>
  <Teleport to="#modal" v-if="isModalOpen">
    <transition name="modal-fade" appear>
      <div class="modalBg">
        <div class="modal" ref="modal">
          <div class="closeBtn" @click="closeModal">
            <xOut />
          </div>
          <div class="modalInner" v-if="modalItem">
            <div class="icon">
              <component
                :is="modalItem[0]"
                class="icon"
                @mouseleave="hover = false"
              />
            </div>
            <div class="content">
              <h4>{{ modalItem[2] }}</h4>
              <p>{{ modalItem[3] }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
  import { ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import xOut from '../components/Icons/iconXout.vue'
  
  const emits = defineEmits(['closeModal'])
  const modal = ref(null)
  
  const props = defineProps({
    isModalOpen: Boolean,
    modalItem: Array,
  })

  function closeModal() {
    emits('closeModal')
  }
  
  onClickOutside(modal, () => {
    emits('closeModal')
  })

</script>

<style scoped>
  .modalBg {
    @apply fixed w-full top-0 flex justify-center items-center m-auto h-full left-0 right-0 bottom-0 z-50 bg-black/60 animate-[fade_.3s];

    .modal {
      width: clamp(calc(300px - 2rem), 500px, calc(100% - 2rem));
      @apply relative mb-auto mt-[260px] bg-white rounded-[20px]
      bg-gradient-to-b from-[#fff] to-[#E2F2F3] shadow-[0px_6px_10px_0px_#0000004D];

      .closeBtn {
        @apply absolute flex items-center justify-center cursor-pointer bg-white rounded-[20px] w-[40px] h-[40px] border-none text-black/50 top-[-10px] right-[-10px];
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        @apply text-center mt-1 text-black/80;
      }

      h4 {
        @apply text-[1.2rem] tracking-normal;
      }

      p {
        @apply text-[1.1rem] leading-[1.8];
      }

      .modalInner {
        @apply relative flex flex-wrap justify-center items-center justify-items-center mt-4 mx-8 mb-6;

        .icon {
          @apply self-center justify-items-center h-[88px] gap-0;

          svg {
            @apply w-[180px] m-auto;
          }
        }

        .content {
          @apply inline shrink;
        }
      }
    }
  }
  
  .modern #modal .content {
    @apply font-modernCopy;
    
    h4 {
        /*  */
    }
    p { @apply text-[1rem] leading-[1.8]; }
  }

  .bourbon #modal .content {
    @apply font-bourbonCopy;
    
    h4 {
        /*  */
    }
    p {  }
  }
  .groovy #modal .content {
    @apply font-groovyCopy;
    
    h4 {
        /*  */
    }
    p { @apply text-[1.1rem] leading-[1.8] tracking-wide; }
  }
  .techy #modal .content {
    @apply font-techyCopy;
    
    h4 {
        /*  */
    }
    p { @apply text-[1.2rem] leading-[1.8] tracking-wider; }
  }
  .corp #modal .content {
    @apply font-corpCopy;
    
    h4 {
        /*  */
    }
    p { @apply text-[1.15rem] leading-[1.8] tracking-wide; }
  }
  .punk #modal .content {
    @apply font-punkCopy;
    
    h4 {
        /*  */
    }
    p { @apply text-[1.1rem] leading-[1.8] tracking-wide; }
  }

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    @apply opacity-0;
  }

</style>
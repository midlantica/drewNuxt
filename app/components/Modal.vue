<!-- components/Modal.vue -->
<template>
  <Teleport v-if="isModalOpen" to="#modal">
    <transition name="modal-fade" appear>
      <div class="modalBg">
        <div ref="modal" class="modal">
          <div class="closeBtn" @click="closeModal">
            <xOut />
          </div>
          <div v-if="modalItem" class="modalInner">
            <div class="icon">
              <component
                :is="modalItem.component"
                class="icon"
                @mouseleave="hover = false"
              />
            </div>
            <div class="content">
              <h4 v-if="modalItem.url" class="font-semibold">
                <a
                  class="hover:text-blue-800"
                  :href="modalItem.url"
                  target="_blank"
                >
                  {{ modalItem.title }}
                </a>
              </h4>
              <h4 v-else class="font-semibold">
                {{ modalItem.title }}
              </h4>
              <p>{{ modalItem.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
  import { ref } from 'vue';
  import { onClickOutside } from '@vueuse/core';
  import xOut from './Icons/iconXout.vue';

  const emits = defineEmits(['closeModal']);
  const modal = ref(null);

  defineOptions({ name: 'ModalDialog' });
  defineProps({
    isModalOpen: Boolean,
    modalItem: { type: Object, default: null }
  });

  function closeModal() {
    emits('closeModal');
  }

  onClickOutside(modal, () => {
    emits('closeModal');
  });
</script>

<style scoped>
  @reference "../assets/css/tailwind.css";
  .modalBg {
    @apply fixed w-full top-0 flex justify-center items-center m-auto h-full left-0 right-0 bottom-0 z-50 bg-black/60 animate-[fade_.3s];

    .modal {
      width: clamp(calc(300px - 2rem), 500px, calc(100% - 2rem));
      @apply relative mb-auto mt-65 bg-white rounded-[20px]
      bg-linear-to-b from-white to-[#E2F2F3] shadow-[0px_6px_10px_0px_#0000004D];

      .closeBtn {
        @apply absolute flex items-center justify-center cursor-pointer bg-white rounded-[20px] w-10 h-10 border-none text-black/50 -top-2.5 -right-2.5 will-change-transform pointer-events-auto;
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
          @apply self-center justify-items-center h-22 gap-0;

          svg {
            @apply w-45 m-auto;
          }
        }

        .content {
          @apply inline shrink;
        }
      }
    }
  }

  .modern #modal .content {
      @apply font-(family-name:--font-family-modern-copy);

    h4 {
    }
    p {
      @apply text-[1rem] leading-[1.8];
    }
  }

  .bourbon #modal .content {
      @apply font-(family-name:--font-family-bourbon-copy);

    h4 {
    }
    p {
    }
  }
  .groovy #modal .content {
      @apply font-(family-name:--font-family-groovy-copy);

    h4 {
    }
    p {
      @apply text-[1.1rem] leading-[1.8] tracking-wide;
    }
  }
  .techy #modal .content {
      @apply font-(family-name:--font-family-techy-copy);

    h4 {
    }
    p {
      @apply text-[1.2rem] leading-[1.8] tracking-wider;
    }
  }
  .corp #modal .content {
      @apply font-(family-name:--font-family-corp-copy);

    h4 {
    }
    p {
      @apply text-[1.15rem] leading-[1.8] tracking-wide;
    }
  }
  .punk #modal .content {
      @apply font-(family-name:--font-family-punk-copy);

    h4 {
    }
    p {
      @apply text-[1.1rem] leading-[1.8] tracking-wide;
    }
  }

  .modal-fade-enter-from,
  .modal-fade-leave-to {
    @apply opacity-0;
  }
</style>

<template>
  <div class="skillsGrid">
    <Teleport to="#modal">
      <transition
        name="modal-fade"
        appear
      >
        <div
          class="modalBg"
          v-if="isModalOpen"
        >
          <div
            class="modal"
            ref="modal"
          >
            <div
              class="closeBtn"
              @click="closeModal"
            >
              <authenticStamp />
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
  import { ref, markRaw } from 'vue';
  import authenticStamp from './AuthenticStamp.vue';
  import { onClickOutside } from '@vueuse/core';

  const modal = ref(null);

  const modalItem = ref([]);

  function closeModal() {
    isModalOpen.value = false;
  }

  const isModalOpen = ref(false);

  onClickOutside(modal, () => (isModalOpen.value = false));
</script>

<style scoped></style>

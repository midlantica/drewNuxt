<template>
  <div class="skillsGrid">
    <Teleport to="#modal">
      <transition name="modal-fade" appear>
        <div v-if="isModalOpen" class="modalBg">
          <div ref="modal" class="modal">
            <div class="closeBtn" @click="closeModal">
              <authenticStamp />
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import authenticStamp from './AuthenticStamp.vue';
  import { onClickOutside } from '@vueuse/core';
  defineOptions({ name: 'StampModal' });

  const modal = ref(null);

  // const modalItem = ref([]);

  function closeModal() {
    isModalOpen.value = false;
  }

  const isModalOpen = ref(false);

  onClickOutside(modal, () => (isModalOpen.value = false));
</script>

<style scoped></style>

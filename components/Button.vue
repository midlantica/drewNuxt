<script setup>
  import { computed } from 'vue'
  import { cva } from 'class-variance-authority'

  import Spinner from '../components/Icons/spinner.vue'

  const props = defineProps({
    leftIcon: {
      type: Object,
      default: null,
      required: false
    },
    rightIcon: {
      type: Object,
      default: null,
      required: false
    },
    icon: Boolean,
    loading: Boolean,
    disabled: Boolean,
    as: {
      type: [String, Object],
      default: 'button'
    },
    asRouterLink: {
      type: String,
      default: 'router-link',
      required: true
    },
    intent: {
      type: String,
      validator: val => ['primary', 'secondary', 'tertiary', 'danger', 'text'].includes(val),
      default: 'primary',
      required: false
    },
    size: {
      type: String,
      validator: val => ['small', 'normal', 'large', 'largest'].includes(val),
      default: 'normal',
      required: false
    }
  })

  const buttonClass = computed(() => {
    return cva('text-white py-1 px-[.85rem] rounded-[2rem] no-underline uppercase font-normal flex flex-row items-center relative cursor-pointer justify-center',
               {
                 variants: {
                   intent: {
                     primary: 'bg-gradient-to-b from-modern-rubyLight to-modern-rubyDark hover:from-modern-ruby hover:to-modern-rubyDarker',
                     secondary: 'bg-gradient-to-b from-blue-500 to-blue-800 hover:bg-blue-800 hover:from-blue-700 hover:to-blue-950',
                     tertiary: 'bg-gradient-to-b from-green-500 to-green-800 hover:bg-green-800 hover:from-green-700 hover:to-green-950',
                     danger: 'bg-gradient-to-b from-red-500 to-red-900 hover:bg-red-800 hover:from-red-700 hover:to-red-950',
                     text: '!text-modern-rubyDark hover:bg-gray-200 hover:text-modern-rubyDarker !underline underline-offset-4'
                   },
                   icon: {
                     true: 'w-auto h-5 mx-0'
                   },
                   disabled: {
                     true: '!bg-gray-200 !text-gray-400 !cursor-not-allowed bg-none'
                   },
                   size: {
                     small: 'text-[.6rem] tracking-[0.15ch] !leading-regular',
                     normal: 'text-[.75rem] tracking-[0.05ch] !leading-regular',
                     large: 'text-[1rem] tracking-[0.05ch] !leading-regular',
                     largest: 'text-[1.15rem] tracking-[0.05ch] !leading-regular'
                   }
                 }
               }
    )({
      intent: props.intent,
      icon: props.icon,
      disabled: props.disabled,
      size: props.size
    })
  })
</script>

<template>
  <component
    :is="props.as" :disabled="props.disabled"
    :class="buttonClass"
  >
    <!-- SPINNER -->
    <Spinner v-if="props.loading" class="p-[.1rem] h-[1.7rem]" />

    <!-- ICON SOLO -->
    <component v-if="!props.loading" :is="props.icon" :class="['w-auto h-5', { invisible: props.loading }, 'mx-0' ]" />

    <!-- LEFT ICON -->
    <component v-if="!props.loading" :is="props.leftIcon" :class="['w-auto h-5', { invisible: props.loading }, 'mr-1' ]" />

    <!-- CONTENT -->
    <div v-if="!props.loading" :class="{ invisible: props.loading }" class="!mt-[3%] !leading-none">
      <slot />
    </div>

    <!-- RIGHT ICON -->
    <component v-if="!props.loading" :is="props.rightIcon" :class="['w-auto h-5', { invisible: props.loading }, 'ml-1' ]" />
  </component>
</template>

<style scoped>

</style>

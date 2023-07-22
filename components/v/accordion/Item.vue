<template>
  <div class="v-accordion__item">
    <label @click="open = !open">
      {{ item.title }}
      <img
        class="w-8"
        src="/assets/svg/plus.svg"
        :class="{ '-rotate-45': open }"
      />
    </label>
    <div :class="{ hidden: !open }">
      {{ item.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
defineProps<{
  item: Record<string, string>;
}>();
</script>

<style lang="postcss">
.v-accordion__item {
  @apply bg-gray-50 mb-1 rounded-3xl;

  label {
    @apply flex items-center justify-between font-bold p-4 cursor-pointer;
    @apply text-brand-600 font-bold;

    img {
      @apply transform transition duration-500 ease-out mr-2 select-none;
    }
  }

  > div {
    @apply px-4 pb-4 text-sm;
  }
}
</style>

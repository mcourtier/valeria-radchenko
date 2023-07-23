<template>
  <div class="v-accordion__item">
    <label @click="toggle">
      {{ item.title }}
      <img
        class="w-8"
        src="/assets/svg/plus.svg"
        :class="{ '-rotate-45': isOpen }"
      />
    </label>
    <div :style="{ height }" ref="content">
      <p class="pb-16">{{ item.content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

defineProps<{
  item: Record<string, string>;
}>();

const isOpen = ref(false);
const content: Ref<HTMLElement | null> = ref(null);
const height = ref("0");

const toggle = () => (!isOpen.value ? open() : close());
const open = () => {
  clearListeners();
  isOpen.value = true;
  console.log("open");
  nextTick(() => {
    height.value = content.value?.scrollHeight + "px";
    content.value?.addEventListener("transitionend", onOpenEnd);
  });
};
const close = () => {
  clearListeners();
  height.value =
    height.value !== "auto" ? height.value : `${content.value?.scrollHeight}px`;
  setTimeout(() => {
    isOpen.value = false;
    height.value = "0";
    content.value?.addEventListener("transitionend", onCloseEnd);
  }, 100);
};
const onOpenEnd = () => {
  height.value = "auto";
  clearListeners();
};
const onCloseEnd = () => {
  clearListeners();
};
const clearListeners = () => {
  content.value?.removeEventListener("transitionend", onOpenEnd);
  content.value?.removeEventListener("transitionend", onCloseEnd);
};
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
    @apply overflow-hidden px-4 text-sm;
    transition: height 1s ease;
  }
}
</style>

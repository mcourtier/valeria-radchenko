<template>
  <button class="v-button">
    <slot />
  </button>
</template>

<script setup></script>
<style lang="postcss">
.v-button {
  @apply bg-brand-800 active:bg-brand-900 text-brand-50;
  @apply block w-full font-semibold py-3 px-5 rounded-full;
  @apply transition outline-none select-none;
}
</style>

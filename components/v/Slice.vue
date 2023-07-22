<template>
  <section class="v-slice" :class="{ 'v-slice--dark': dark }">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{ dark?: boolean }>();
</script>
<style lang="postcss">
.v-slice {
  @apply px-4 md:px-6 py-12;

  &--dark {
    @apply bg-brand-200;
  }
}
</style>

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
  @apply px-4 py-12;

  @screen md {
    @apply px-6;
  }

  &--dark {
    @apply bg-brand-200;
  }
}
</style>

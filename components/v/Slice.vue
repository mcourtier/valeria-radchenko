<template>
  <section class="v-slice" :class="{ 'v-slice--dark': dark }">
    <div class="v-container">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ dark?: boolean }>();
</script>
<style lang="postcss">
.v-slice {
  @apply px-4 md:px-6;
  @apply py-4 md:py-8;

  &--dark {
    @apply bg-brand-200;
  }
}
</style>

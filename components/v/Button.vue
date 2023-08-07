<template>
  <component :is="component" class="v-button" v-bind="attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{ href: string; target: string }>();
const { href, target } = props;
const component = href ? "a" : "button";
const attrs = href ? { href, target } : {};
</script>
<style lang="postcss">
.v-button {
  @apply bg-brand-800 active:bg-brand-900 text-brand-50;
  @apply block w-full font-semibold py-3 px-5 rounded-full;
  @apply transition outline-none select-none;
}
</style>

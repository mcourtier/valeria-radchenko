<template>
  <div class="v-accordion">
    <VAccordionItem v-for="item in items" :item="item" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Record<string, any>[];
}>();
</script>

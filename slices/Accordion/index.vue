<template>
  <VSlice
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <VAccordion :items="items" />
  </VSlice>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.AccordionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const items = ref(
  props.slice.items.map((item) => ({
    title: item.title,
    content: item.text,
  }))
);
</script>

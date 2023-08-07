<template>
  <VSlice
    class="text-center"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="font-bold">{{ slice.primary.title }}</div>
    <PrismicRichText :field="slice.primary.text" class="mb-4" />
    <div>
      <VButton
        :href="slice.primary.buttonLink.url"
        :target="slice.primary.buttonLink.target"
        >{{ slice.primary.buttonLabel }}</VButton
      >
    </div>
  </VSlice>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AdvertSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

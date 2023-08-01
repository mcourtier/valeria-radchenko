<template>
  <VSlice
    class="text-center"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div>
      <PrismicImage
        :field="slice.primary.image"
        class="w-56 h-56 mx-auto rounded-full overflow-hidden mb-4"
      />
    </div>
    <h1 class="font-title text-4xl font-bold mb-2">
      {{ slice.primary.title }}
    </h1>
    <h2 class="text-xl mb-8">{{ slice.primary.subtitle }}</h2>
    <PrismicRichText :field="slice.primary.text" class="mb-4" />
    <!-- <pre class="text-left text-xs">{{ slice.primary }}</pre> -->
  </VSlice>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

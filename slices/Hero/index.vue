<template>
  <VSlice
    class="text-center"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div>
      <PrismicImage
        :field="slice.primary.image"
        class="w-64 h-64 mx-auto rounded-full overflow-hidden mb-8"
      />
      <!-- <img
        src="/vr-384.jpg"
        class="w-64 h-64 mx-auto rounded-full overflow-hidden mb-8"
        alt="Valeria Radchenko"
      /> -->
    </div>
    <!-- <PrismicText :field="slice.primary" /> -->
    <h1 class="font-title text-6xl font-bold mb-4">
      {{ slice.primary.title }}
    </h1>
    <h2 class="text-xl font-bold mb-8">{{ slice.primary.subtitle }}</h2>
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

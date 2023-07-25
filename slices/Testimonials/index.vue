<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <VSlice>
      <VCarousel :items="items">
        <template #item="{ item }">
          <div
            class="p-4 bg-brand-50 border border-brand-400 rounded-lg mx-2 h-full"
          >
            <div class="font-bold mb-3">{{ item.author }}</div>
            <PrismicText :field="item.text" />
          </div>
        </template>
      </VCarousel>
    </VSlice>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Content } from "@prismicio/client";

const props = defineProps(
  getSliceComponentProps<Content.CarouselSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
const items = ref(
  props.slice.items.map((item) => ({
    author: item.author,
    text: item.text,
  }))
);
</script>

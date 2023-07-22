<template>
  <Carousel>
    <Slide v-for="item in items" class="text-xs">
      <slot name="item" :item="item">
        {{ item }}
      </slot>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts" generic="T extends any">
import { Carousel, Slide } from "@jambonn/vue-concise-carousel";
import "@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css";

const props = defineProps<{
  items: T[];
}>();
</script>

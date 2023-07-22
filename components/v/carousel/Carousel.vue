<template>
  <Carousel class="max-w-xs mx-auto">
    <Slide v-for="item in items" class="text-xs">
      <slot name="slide" :item="{ item }">
        {{ item }}
      </slot>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "@jambonn/vue-concise-carousel";
import "@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css";

const props = defineProps<{
  items: Record<string, string>[];
}>();
</script>

<style lang="postcss"></style>

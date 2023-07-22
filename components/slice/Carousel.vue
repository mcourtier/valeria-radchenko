<template>
  <VSlice>
    <VCarousel :items="items">
      <template name="item"> </template>
    </VCarousel>
  </VSlice>
</template>

<script setup lang="ts">
import { ref } from "vue";
const items = ref([
  {
    title: "Do esse consectetur",
    content:
      "Do esse consectetur est Lorem irure adipisicing laboris Lorem ex ullamco veniam.",
  },
  {
    title: "Culpa dolore nisi",
    content:
      "Culpa dolore nisi ex tempor occaecat ad cupidatat ea culpa amet in occaecat ex cupidatat.",
  },
  {
    title: "Ex amet duis",
    content:
      "Ex amet duis velit aliqua sint laborum adipisicing amet Lorem tempor officia cupidatat laboris.",
  },
  {
    title: "Minim voluptate id",
    content:
      "Minim voluptate id occaecat consectetur laboris esse Lorem commodo et excepteur.",
  },
  {
    title: "Proident sit cupidatat",
    content:
      "Proident sit cupidatat aliqua non magna magna est dolore laboris.",
  },
  {
    title: "Irure duis irure",
    content:
      "Irure duis irure reprehenderit velit mollit esse aliqua qui occaecat.",
  },
  {
    title: "Do esse consectetur",
    content:
      "Do esse consectetur est Lorem irure adipisicing laboris Lorem ex ullamco veniam.",
  },
  {
    title: "Culpa dolore nisi",
    content:
      "Culpa dolore nisi ex tempor occaecat ad cupidatat ea culpa amet in occaecat ex cupidatat.",
  },
  {
    title: "Ex amet duis",
    content:
      "Ex amet duis velit aliqua sint laborum adipisicing amet Lorem tempor officia cupidatat laboris.",
  },
  {
    title: "Minim voluptate id",
    content:
      "Minim voluptate id occaecat consectetur laboris esse Lorem commodo et excepteur.",
  },
  {
    title: "Proident sit cupidatat",
    content:
      "Proident sit cupidatat aliqua non magna magna est dolore laboris.",
  },
  {
    title: "Irure duis irure",
    content:
      "Irure duis irure reprehenderit velit mollit esse aliqua qui occaecat.",
  },
]);
</script>

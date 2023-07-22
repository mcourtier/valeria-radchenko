<template>
  <VSlice>
    <div class="grid grid-cols-2 gap-2">
      <div v-for="item in items" class="text-xs">
        <img :src="item.image" class="object-fit w-full h-32" />
        <div class="font-bold mb-1">{{ item.label }}</div>
        <div class="">{{ item.content }}</div>
      </div>
    </div>
  </VSlice>
</template>
<script setup lang="ts">
type GridItem = {
  label: string;
  content: string;
  image: string;
};

const items = [
  {
    label: "Est pariatur",
    image: "https://picsum.photos/200/300",
    content: "Excepteur tempor dolor pariatur labore sit magna non.",
  },
  {
    label: "Deserunt dolor occaecat",
    image: "https://picsum.photos/200/300",
    content: "Aliqua id ex eu cillum ex excepteur irure.",
  },
  {
    label: "Do qui qui magna minim et",
    image: "https://picsum.photos/200/300",
    content: "Consectetur labore ad Lorem elit sint.",
  },
  {
    label: "Dolore exercitation sunt ullamco",
    image: "https://picsum.photos/200/300",
    content:
      "Aute nostrud Lorem consequat sit esse ipsum incididunt in qui aute.",
  },
];
defineProps<{ items: GridItem[] }>();
</script>

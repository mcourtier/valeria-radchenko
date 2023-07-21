<template>
    <div>
        <label @click="open = !open">
            <img src="/assets/svg/chevron-right.svg" :class="{ 'rotate-90': open }" />
            {{ item.title }}
        </label>
        <div class="pb-4" :class="{ hidden: !open }">
            {{ item.content }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const open = ref(false);
defineProps<{
    item: Record<string, string>,
}>();
</script>

<style lang="postcss">
.v-accordion {
    label {
        @apply flex font-bold py-1 cursor-pointer;

        img {
            @apply transform transition;
        }
    }
}
</style>
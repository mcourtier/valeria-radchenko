<template>
    <div class="v-carousel">
        <div class="v-carousel__rail" :style="{ transform }">
            <div v-for="item in items" :item="item">
                {{ item.title }}
            </div>
        </div>
        <button class="v-carousel__previous" @click="index--"> &lt; </button>
        <button class="v-carousel__next" @click="index++">&gt;</button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const index = ref(0);
defineProps<{
    items: Record<string, string>[],
}>();
const offset = computed(() => -index.value * 2 / 3 * 100 + '%');
const transform = computed(() => `translate3d(${offset.value},0,0)`);
</script>

<style lang="postcss">
.v-carousel {
    @apply max-w-full relative;

    &__rail {
        @apply overflow-hidden flex transform transition duration-1000 ease-out;

        >div {
            @apply flex-none bg-slate-300 text-sm h-32 border-l-2;
            @apply w-2/3;
        }
    }


    button {
        @apply absolute top-3 text-2xl font-bold bg-orange-700 w-12 h-12 rounded-md;
    }

    &__previous {
        @apply -left-4;
    }

    &__next {
        @apply -right-4;
    }
}
</style>
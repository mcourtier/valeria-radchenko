<template>
    <button :class="classes">
        <slot />
    </button>
</template>

<script setup>

const classes = [
    'bg-brand-800 text-brand-50',
    'py-2 px-3',
    'rounded-full',
    'outline:none',
]
</script>
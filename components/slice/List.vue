<template>
    <section class="p-4 md:p-6 text-center">
        <h2 class="font-title text-xl font-bold mb-4"></h2>
        <p class="text-lg">Veniam magna proident ipsum aute ipsum sit. Mollit ut officia aute fugiat Lorem enim quis aliquip velit duis irure anim aliquip.</p>
        <div>
            <VButton>Sign Up</VButton>
        </div>
        <ul class="list mt-8">
            <li class="flex">
                <div class="list-circle"></div> Lorem ipsum
            </li>
            <li class="flex">
                <div class="list-circle"></div> Lorem ipsum
            </li>
            <li class="flex">
                <div class="list-circle"></div> Lorem ipsum
            </li>
            <li class="flex">
                <div class="list-circle"></div> Lorem ipsum
            </li>
            <li class="flex">
                <div class="list-circle"></div> Lorem ipsum
            </li>
            <li class="flex">
                <div class="list-circle"></div> Lorem ipsum
            </li>
            <li class="flex">
                <div class="list-circle"></div> Lorem ipsum
            </li>
        </ul>
    </section>
</template>
<style lang="postcss">
.list-circle {
    @apply flex-none w-4 h-4 rounded-full bg-brand-700 mr-2 relative top-1;
    background-size: 16px 16px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(~/assets/svg/check.svg);
}
</style>
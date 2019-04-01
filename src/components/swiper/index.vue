<template>
    <div class="mod-swiper">
        <swiper
            :list="list"
            :auto="true"
            :loop="true"
            :direction="direction"
            :aspect-ratio="0.3125"
            :show-dots="showDots"
            dots-position="center"></swiper>
    </div>
</template>

<script>
export default {
    name: 'ComSwiper',
    props: {
        list: {
            type: Array,
            default() {
                return [];
            },
        },
        direction: {
            type: String,
            default: 'horizontal',
        },
        showDots: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {

        };
    },
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>


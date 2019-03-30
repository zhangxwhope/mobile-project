<template>
    <div class="mod-swiper">
        <swiper :list="list" :auto="true" :loop="true" :aspect-ratio="0.3125" dots-position="center"></swiper>
    </div>
</template>

<script>
export default {
    name: 'ComSwiper',
    props: {
        list: {
            type: [Array, Object],
            default() {
                return [];
            },
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


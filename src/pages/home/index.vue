<template>
    <div class="mod-home">
        <Header></Header>
        <com-swiper :list="list"></com-swiper>
    </div>
</template>

<script>
import Header from '@/components/header/index.vue';
import ComSwiper from '@/components/swiper/index.vue';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        Header,
        ComSwiper,
    },
    computed: {
        ...mapState({
            list: state => state.home.list,
        }),
    },
    created() {
        this.getSwiper();
    },
    methods: {
        ...mapActions({
            getSwiper: 'home/swiperGet',
        }),
    },
};
</script>

<style lang="scss" scoped>

</style>


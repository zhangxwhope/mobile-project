<template>
    <div class="mod-home">
        <Header></Header>
        <com-swiper :list="list"></com-swiper>
        <flexbox
            v-for="(item, index) in nav"
            :key="index"
            justify="center"
            align="center"
            direction="row">
            <flexbox-item
                v-for="(sub, idx) in item"
                :key="idx">
                <div :class="sub.icon" class="iconfont"></div>
                {{ sub.label }}
            </flexbox-item>
        </flexbox>
        <com-swiper :list="list" direction="vertical" :show-dots="false"></com-swiper>
        <grid
            v-for="(product, index) in products"
            :key="index">
            <grid-item
                v-for="(item, idx) in product"
                :key="idx">
                <flexbox>
                    <flexbox-item v-for="(sub, i) in item" :key="i">
                        {{ sub.title }}
                        <div :class="sub.img" class="iconfont"></div>
                    </flexbox-item>
                </flexbox>
            </grid-item>
        </grid>
        <com-tab></com-tab>
    </div>
</template>

<script>
import Header from '@/components/header/index.vue';
import ComSwiper from '@/components/swiper/index.vue';
import ComTab from '@/components/tab/index.vue';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        Header,
        ComSwiper,
        ComTab,
    },
    data() {
        return {
            value: 'bbb',
        };
    },
    provide() {
        return {
            form: 'abc',
        };
    },
    computed: {
        ...mapState({
            list: state => state.home.list,
            nav: state => state.home.nav,
            products: state => state.home.products,
        }),
    },
    created() {
        this.getSwiper();
        this.getNav();
        this.getProducts();
    },
    mounted() {
        this.$EventBus.$on('change', val => {
            this.value = val;
        });
    },
    methods: {
        ...mapActions({
            getSwiper: 'home/swiperGet',
            getNav: 'home/navGet',
            getProducts: 'home/productsGet',
        }),
    },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>


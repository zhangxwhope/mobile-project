<template>
    <div class="mod-search">
        <search :value="keyword" placeholder="请输入商品名称"></search>
    </div>
</template>

<script>
export default {
    name: 'ComSearch',
    props: {
        value: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            keyword: '',
        };
    },
    inject: ['form'],
    created() {
        this.$emit('update:value', 'bbb');
    },
    mounted() {
        this.change();
    },
    methods: {
        change() {
            this.$EventBus.$emit('change', 'aaa');
        },
    },
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>


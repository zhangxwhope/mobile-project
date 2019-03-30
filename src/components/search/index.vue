<template>
    <div class="mod-search">
        <search :value="keyword" placeholder="请输入商品名称"></search>
    </div>
</template>

<script>
export default {
    name: 'ComSearch',
    data() {
        return {
            keyword: '',
        };
    },
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>


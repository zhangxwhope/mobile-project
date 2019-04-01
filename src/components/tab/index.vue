<template>
    <div class="mod-tab">
        <tab>
            <tab-item
                v-for="(item, index) in tab"
                :key="index">
                {{ item.title }}
            </tab-item>
        </tab>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'ComTab',
    computed: {
        ...mapState({
            tab: state => state.tab.tab,
        }),
    },
    created() {
        this.getTab();
    },
    methods: {
        ...mapActions({
            getTab: 'tab/tabGet',
        }),
    },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>


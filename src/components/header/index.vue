<template>
    <div class="mod-header">
        <grid>
            <grid-item show-lr-borders="false">
                <com-search></com-search>
            </grid-item>
        </grid>
    </div>
</template>

<script>
import ComSearch from '@/components/search/index.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: 'Header',
    components: {
        ComSearch,
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            user: state => state.user.user,
        }),
    },
    created() {
        this.userGet();
    },
    methods: {
        ...mapActions({
            userGet: 'user/userGet',
        }),
    },
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>


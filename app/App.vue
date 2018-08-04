<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import { default as Home } from '@/views/home/index';

export default {
    name: 'App',
    components: {
        Home,
    },
};
</script>

<style lang="scss" scoped>
#app{
    width: 100%;
    height: 100%;
}
</style>


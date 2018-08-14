<template>
    <div class="fx-image-filter">
        <div class="fx-image-filter__header"></div>
    </div>
</template>

<script>
export default {
    name: 'explorer',
    components: {
    },
    data() {
        return {
            minWith: 150,
            maxWidth: 450,
            width: 250,
        }
    },
    created() {
    },
    methods: {
        addFolder() {
            console.log('addFolder')
        }
    }
};
</script>

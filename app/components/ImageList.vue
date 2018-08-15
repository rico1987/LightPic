<template>
    <div class="fx-image-list">
        <div class="fx-image-list__header">
            <span>Title</span>
        </div>
        <div class="fx-image-list__body"
        v-bind:class="{ 'is-drag-enter': isDragenter, 'is-drag-leave': isDragleave }">
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-list',
    components: {
    },
    data() {
        return {
            isDragenter: false,
            isDragleave: false,
        };
    },
    created() {
    },
    methods: {
    },
};
</script>

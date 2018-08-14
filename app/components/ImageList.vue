<template>
    <div class="fx-image-list">
        <div class="fx-image-list__header">
            <span>Title</span>
        </div>
        <div class="fx-image-list__body" v-bind:class="{ 'is-drag-enter': isDragenter, 'is-drag-leave': isDragleave }" @dragenter="dragenter()" @dragleave="dragleave()" @drop="onDrop()">

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
        }
    },
    created() {
    },
    methods: {
        dragenter(event) {
            this.isDragenter = true
            this.isDragleave = false
            debugger
            event.preventDefault()
            console.log(event)
        },
        dragleave(event) {
            this.isDragenter = false
            this.isDragleave = true
            debugger
            event.preventDefault()
            console.log(event)
        },
        onDrop(event) {
            debugger
            event.preventDefault()
            console.log('droped')
            console.log(event)
        }
    }
};
</script>

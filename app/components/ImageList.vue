<template>
    <div class="fx-image-list">
        <div class="fx-image-list__header">
            <span>Title</span>
        </div>
        <div class="fx-image-list__body"
        v-bind:class="{ 'is-drag-enter': isDragenter, 'is-drag-leave': isDragleave }"
        @drop="onDrop"
        @dragover="onDragover"
        @dragenter="onDragenter"
        @dragleave="onDragleave"
        >
            <p class="drag-tip" v-show="isDragenter">将图片拖放到这里进行添加</p>
        </div>
    </div>
</template>

<script>
import config from "@/config";
import {
    getExtension
} from "@/utils"
export default {
    name: 'image-list',
    components: {
    },
    data() {
        return {
            isDragenter: false,
            isDragleave: false,
            supported_formats: [],
        };
    },
    created() {
        this.supported_formats = config.supported_formats;
    },
    mounted() {
    },
    methods: {
        onDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragenter = false;
            this.isDragleave = false;
            console.log(e.dataTransfer.files)
        },
        onDragover(e) {
            e.preventDefault();
            e.stopPropagation();
        },
        onDragenter(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragenter = true;
            this.isDragleave = false;
        },
        onDragleave(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragenter = false;
            this.isDragleave = true;
        },
        checkIsSupported(fileName) {
            return this.supported_formats.some(ele => ele === getExtension(fileName));
        },
    },
};
</script>

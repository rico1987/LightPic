<template>
    <div class="app-wrapper" v-bind:class="{ resizeCursor: isResizing }" @mousedown="onMouseDown" @mouseup="onMouseUp" @mousemove="onMouseMove">
        <Explorer ref="explorer"></Explorer>
        <router-view></router-view>
        <ImageFilter ref="image-filter"></ImageFilter>
        <ImageDetail ref="image-detail"></ImageDetail>
    </div>
</template>

<script>
import { Explorer, ImageFilter, ImageDetail } from './components';
import { constants } from 'http2';

export default {
    name: 'layout',
    components: {
        Explorer,
        ImageFilter,
        ImageDetail,
    },
    data() {
        return {
            isResizing: false,
            isExplorerResizing: false,
        }
    },
    methods: {
        onMouseDown(event) {
            if (event.target.id === 'ExplorerSash') {
                this.isResizing = this.isExplorerResizing = true
            }
        },
        onMouseUp(event) {
            if (this.isExplorerResizing) {
                this.isResizing = this.isExplorerResizing = false
            }
            
        },
        onMouseMove(event) {
            if (this.isExplorerResizing) {
                if (event.clientX < this.$refs['explorer'].minWith) {
                    this.$refs['explorer'].width = this.$refs['explorer'].minWith
                } else if (event.clientX > this.$refs['explorer'].maxWidth) {
                    this.$refs['explorer'].width = this.$refs['explorer'].maxWidth
                } else {
                    this.$refs['explorer'].width = event.clientX
                }
            }
        },
    },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    &.resizeCursor{
        cursor: ew-resize;
    }
}
</style>

<template>
    <div class="app-wrapper" v-bind:class="{ resizeCursor: isResizing }" @mousedown="onMouseDown" @mouseup="onMouseUp" @mousemove="onMouseMove">
        <Explorer ref="explorer"></Explorer>
        <MainContent ref="main">
            <router-view></router-view>
        </MainContent>
        <SideContent ref="side-content"></SideContent>
    </div>
</template>

<script>
import { Explorer, MainContent, SideContent } from './components';

export default {
    name: 'layout',
    components: {
        Explorer,
        MainContent,
        SideContent
    },
    data() {
        return {
            isResizing: false,
            isExplorerResizing: false,
            isSideContentResizing: false,
        }
    },
    mounted() {
    },
    methods: {
        onMouseDown(event) {
            if (event.target.id === 'ExplorerSash') {
                this.isResizing = this.isExplorerResizing = true
            } else if (event.target.id === 'SideContentSash') {
                this.isResizing = this.isSideContentResizing = true
            }
        },
        onMouseUp(event) {
            if (this.isExplorerResizing) {
                this.isResizing = this.isExplorerResizing = false
            } else if (this.isSideContentResizing) {
                this.isResizing = this.isSideContentResizing = false
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
                this.$refs['main'].left = this.$refs['explorer'].width > 250 ? 250 : this.$refs['explorer'].width
            } else if (this.isSideContentResizing) {
                 if (window.innerWidth - event.clientX < this.$refs['side-content'].minWith) {
                    this.$refs['side-content'].width = this.$refs['side-content'].minWith
                } else if (window.innerWidth - event.clientX > this.$refs['side-content'].maxWidth) {
                    this.$refs['side-content'].width = this.$refs['side-content'].maxWidth
                } else {
                    this.$refs['side-content'].width = window.innerWidth - event.clientX
                }
                this.$refs['main'].right = this.$refs['side-content'].width > 250 ? 250 : this.$refs['side-content'].width
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

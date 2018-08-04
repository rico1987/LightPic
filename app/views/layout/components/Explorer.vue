<template>
    <div class="fx-explorer" v-bind:style="{ width: width + 'px'}">
        <div class="fx-explorer__header">
            <p>
                我的图片 
                <font-awesome-icon fa icon="list" />
            </p>
        </div>
        <div class="fx-explorer__category">
            <p>快速浏览</p>
            <ul>
                <li>
                    <font-awesome-icon fa icon="images" />
                    <span>全部图片</span>
                </li>
                <li>
                    <font-awesome-icon fa icon="question" />
                    <span>未分类</span>
                </li>
                <li>
                    <font-awesome-icon fa icon="trash" />
                    <span>垃圾桶</span>
                </li>
            </ul>
            <p class="folder-title">
                我的文件夹
                <font-awesome-icon @click="addFolder()" fa icon="plus" />
            </p>
            <ul class="folders">
                <li>
                    <font-awesome-icon fa icon="folder" />
                    <span>未命名文件夹</span>
                    <font-awesome-icon fa icon="times" />
                </li>
                <li>
                    <font-awesome-icon fa icon="folder" />
                    <span>未命名文件夹</span>
                    <font-awesome-icon fa icon="times" />
                </li>
                <li>
                    <font-awesome-icon fa icon="folder" />
                    <span>未命名文件夹</span>
                    <font-awesome-icon fa icon="times" />
                </li>
            </ul>
        </div>
        <div class="fx-explorer__sash vertical" id="ExplorerSash">
        </div>
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

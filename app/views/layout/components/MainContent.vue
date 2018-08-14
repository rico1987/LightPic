<template>
  <div class="fx-main-content" v-bind:style="{ left: left + 'px', right: right + 'px'}">
      <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'main-content',
    components: {
    },
    data() {
        return {
            left: 250,
            right: 250,
        }
    },
    method: {
    },
};
</script>

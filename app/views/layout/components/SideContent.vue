<template>
  <div class="fx-side-content" v-bind:style="{ width: width + 'px'}">
      <div class="fx-side-content__header">
          <p></p>
      </div>
      <div class="fx-side-content__body">
      </div>
      <div class="fx-side-content__sash vertical" id="SideContentSash">
      </div>
  </div>
</template>

<script>

export default {
    name: 'side-content',
    components: {
    },
    data() {
        return {
            minWith: 150,
            maxWidth: 450,
            width: 250,
        };
    },
    method: {
    },
};
</script>

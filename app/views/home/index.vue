<template>
  <div class="home-container">
      <ImageList ref="image-list"></ImageList>
  </div>
</template>

<script>
import { ImageList } from '@/components';

export default {
    name: 'home',
    components: {
        ImageList,
    },
    method: {
    },
};
</script>
<style lang="scss" scoped>
.home-container{
    height: 100%;
}
</style>


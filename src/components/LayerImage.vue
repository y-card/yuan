<script setup lang="ts">
import LoadingGif from "@/assets/image/load-loading.gif";

defineProps<{
  image: { img: string; is_full: boolean };
}>();
</script>

<template>
  <div class="layer_image_view" @click="$emit('close')">
    <button class="btn_close"></button>
    <div :class="['layer_content', { full: image.is_full }]">
      <img
        :class="['layer_image', { full: image.is_full }]"
        v-lazy="{ src: image.img, loading: LoadingGif }"
      />
    </div>
  </div>
</template>

<style scoped>
.layer_image_view {
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(124, 122, 122, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.layer_content {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
}

.layer_content.full {
  flex-direction: column;
}

.layer_image {
  width: auto;
  height: 100%;
  margin: 0 auto;
}

.layer_image.full {
  width: 200%;
  height: auto;
  transform: translateX(-25%);
}

.btn_close {
  background: url("../assets/image/icon_close.png") no-repeat center center /
    cover;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
}

@media (min-width: 580px) {
  .layer_content {
    height: calc(100% - 100px);
  }
}

img[lazy="loading"] {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
</style>

<script setup lang="ts">
const props = defineProps({
  img: String,
  content: String,
});

function getImageUrl() {
  // This path must be correct for your file
  return new URL(`/src/assets/image/${props.img}`, import.meta.url)?.toString();
}
</script>

<template>
  <div class="tab_content">
    <img :src="getImageUrl()" />
    <div class="content">
      <p v-html="content"></p>
    </div>
  </div>
</template>

<style scoped>
.tab_content {
  width: 100%;
}
img {
  width: 100%;
}
.content {
  padding-top: 10px;
  text-align: center;
  max-width: 370px;
  margin: 0 auto;
}
.content :deep(p) {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(34, 34, 34, 0.6);
}
</style>

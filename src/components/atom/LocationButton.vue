<script setup lang="ts">
const props = defineProps({
  type: String,
  link: String,
});

function getImageUrl() {
  // This path must be correct for your file
  return new URL(
    `/src/assets/image/icon_map_${props.type}.png`,
    import.meta.url
  ).toString();
}
</script>

<template>
  <a :href="props.link" class="btn_location" onclick="onClick()">
    <img class="logo" :src="getImageUrl()" />
    <span><slot></slot></span>
  </a>
</template>

<style scoped>
.logo {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  margin-top: 3px;
}
.btn_location:deep {
  display: flex;
  line-height: 16px;
  flex-grow: 1;
  flex-basis: min-content;
  justify-content: center;
  border: 1px solid #f4f4f4;
  padding: 12px 0;
  background-color: #fafafa;
}
</style>

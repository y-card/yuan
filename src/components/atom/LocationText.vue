<script setup lang="ts">
const props = defineProps({
  title: String,
  emphasis: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="['location_text', { emphasis }]">
    <p class="title">{{ props.title }}</p>
    <slot></slot>
  </div>
</template>

<style scoped>
.location_text {
  margin: 5px 0 20px;
  font-size: 14px;
  color: var(--vt-c-black-mute);
}
.location_text + .location_text {
  padding-top: 20px;
  border-top: 1px dotted #ddd;
}

.location_text.emphasis {
  background-color: var(--vt-c-beige);
}
.title {
  font-family: "Nanum Myeongjo", serif;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #000;
}
</style>

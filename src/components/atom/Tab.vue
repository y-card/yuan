<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  title: string;
  isActive: Boolean;
}>();
</script>

<template>
  <div :class="['tab_button', { active: isActive }]">
    <button>{{ title }}</button>
  </div>
</template>

<style scoped>
button {
  font-family: "Nanum Myeongjo", serif;
  font-size: 14px;
  color: #5a5d3f;
  padding-bottom: 10px;
  font-weight: normal;
  opacity: 0.4;
}

.active button {
  font-weight: 700;
  opacity: 1;
}
</style>

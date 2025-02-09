<script setup lang="ts">
const props = defineProps({
  img: String,
  content: String,
});
</script>

<template>
  <div class="tab_content">
    <slot />
  </div>
</template>

<style scoped>
.tab_content {
  width: 100%;
}
</style>

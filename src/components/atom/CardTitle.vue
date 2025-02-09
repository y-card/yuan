<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String
});
</script>
<template>
  <div class="card-title">
    <p class="title">- {{ props.title }} -</p>
    <p class="subtitle">{{ props.subtitle }}</p>
  </div>
</template>
<style scoped>
.card-title {
    text-align: center;
    font-family: "Nanum Myeongjo", serif;
}
.title {
    color: #c0ae8c;
    font-size: 8px;
    font-style: italic;
    letter-spacing: 0.5px;
    font-weight: 700;
}
.subtitle {
    color: #65674b;
    font-weight: 700;
}
</style>

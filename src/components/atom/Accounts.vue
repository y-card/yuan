<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>
<template>
  <div class="accounts">
    <p class="title">{{ props.title }}</p>
    <slot></slot>
  </div>
</template>
<style scoped>
.accounts {
  padding: 18px 16px;
}

.accounts.m {
  background: #f6f7fb;
}

.accounts.w {
  background: #f9f6f9;
}

.accounts .title {
  font-weight: bold;
}
</style>

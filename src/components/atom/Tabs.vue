<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
  wide?: boolean;
}>();
</script>

<template>
  <div class="tab">
    <slot name="button"></slot>
    <slot name="content"></slot>
  </div>
</template>

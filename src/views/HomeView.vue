<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
const props = defineProps({
  type: String,
});
</script>

<template>
  <main>
    <TheWelcome :type="props.type" />
  </main>
</template>

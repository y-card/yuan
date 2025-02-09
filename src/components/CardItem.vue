<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  wide?: boolean;
}
</script>

<template>
  <div :class="['item', 'fade-in']">
    <div class="header"></div>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 3rem 1rem;
  opacity: 0.1;
  transition: 0.4s all;
}

.item.wide {
  padding: 3rem 0;
}

.header {
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  margin-bottom: 1rem;
}
.header .title {
  font-size: 13px;
  color: var(--vt-c-beige-dark);
  line-height: 25px;
}
.header .description {
  color: var(--vt-c-black-soft);
}

@media (min-width: 580px) {
  .item {
    max-width: 1200px;
    margin: 0 auto;
  }

  .details {
    max-width: 548px;
    margin: 0 auto;
  }
}
</style>

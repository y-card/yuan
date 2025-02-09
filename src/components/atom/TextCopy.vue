<script setup lang="ts">
import icon from "@/assets/image/icon_copy.png";

const props = defineProps<{
  copyText: string;
}>();

async function onClick() {
  try {
    await navigator.clipboard.writeText(props.copyText);
    alert("복사되었습니다.");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
</script>
<template>
  <div class="text_copy">
    <div class="text_wrap">
      <slot></slot>
    </div>
    <div class="btn_wrap">
      <button class="btn_copy" @click="onClick">
        <img class="icon_copy" :src="icon" alt="icon" />
        <span>복사</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.text_copy {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 1rem 0;
}
.btn_wrap {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2px;
  min-width: 72px;
}
.btn_copy {
  font-family: "NanumSquare", sans-serif;
  display: flex;
  color: #555;
  font-weight: 400;
  padding: 11px 12px;
  border-radius: 4px;
  font-size: 15px;
  min-width: 64px;
  border: 1px solid #f5f5f5;
  background-color: #fff;
}
.icon_copy {
  width: 16px;
  margin-right: 6px;
  margin-top: 1px;
}

.default .btn_copy {
  font-size: 13px;
}
.default .icon_copy {
  margin-top: 0;
}
</style>

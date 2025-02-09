<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import TabContent from "./atom/TabContent.vue";
import { Fade, Pagination } from "@egjs/flicking-plugins";
import { ref } from "vue";
import Tab from "./atom/Tab.vue";
import Tabs from "./atom/Tabs.vue";
import TabSlot from "./atom/TabSlot.vue";
import info_1 from "../assets/image/info_1.png";
import info_2 from "../assets/image/info_2.png";
import info_3 from "../assets/image/info_3.png";
import "@egjs/flicking-plugins/dist/pagination.css";

const activeIndex = ref(0);
const flickingContainer = ref(null);

function changeTab(index: number) {
  activeIndex.value = index;
  const flicking: any = flickingContainer.value;
  flicking?.moveTo(index, 500);
}

const contents = [
  "이탈리아의 성지순례로 유명한 아시시(Assisi)에서 영감을 받은 아시시 홀에서 저희 두 사람의 웨딩이 진행됩니다. 라도무스 아트센터 1층에 위치한 단독홀입니다.",
  "1층에 단독으로 사용하는 넓은 연회장에서 여유 있는 식사가 가능합니다. 연회장은 15:30~18:00까지 이용가능합니다. 음주류 무제한이고, 식사 안 하시는 분들을 위해 답례품 준비되어 있습니다.",
  "서대전 IC, 유성 IC에서 10분 거리이고 대전 시내 중심부를 지나지 않아 여유로운 이동이 가능합니다. 주차타워 및 주차장으로 1300대 동시 주차 가능하고 주차시간의 제한이 없습니다.",
];
const plugins = [new Fade(), new Pagination({ type: "bullet" })];

function onChanged({ index }: { index: number }) {
  activeIndex.value = index;
}
const tabs = [
  { name: "a", title: "예식 안내" },
  { name: "b", title: "식사 안내" },
  { name: "c", title: "오시는 길" },
];
</script>

<template>
  <Tabs class="tabs">
    <template #content>
      <Flicking-Items
        ref="flickingContainer"
        class="flicking"
        :options="{ circular: true, align: 'next' }"
        :plugins="plugins"
        @changed="onChanged"
      >
        <TabContent
          v-for="(content, index) in contents"
          :key="`content_${index}`"
          :img="`info_${index + 1}.png`"
          :content="content"
        />
        <template #viewport>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking-Items>
    </template>
  </Tabs>
</template>

<style scoped>
.tabs {
  margin-top: 18px;
}
.tab_buttons {
  display: flex;
  justify-content: space-between;
  margin: 40px 0 10px;
  border-bottom: 1px solid #ebebeb;
  padding: 0 1rem;
}

.flicking:deep .flicking-pagination {
  margin-top: 20px;
  position: unset;
}
.flicking:deep .flicking-pagination-bullet {
  width: 6px;
  height: 6px;
}
.flicking:deep .flicking-pagination-bullet-active {
  background-color: #000;
}

.tab_buttons {
  display: flex;
  justify-content: space-between;
  margin: 10px 16px;
  padding: 15px 0 10px;
  border-top: 1px dotted #ddd;
  border-bottom: 1px dotted #ddd;
}
</style>

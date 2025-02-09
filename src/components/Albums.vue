<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import LayerImage from "./LayerImage.vue";
import { Fade } from "@egjs/flicking-plugins";
import btn_more from "../assets/image/btn_more.png";

const props = defineProps({
  type: String,
});

const showLayerImage = ref(false),
  pickedImage = ref({ img: "", is_full: false });
const tabs = [
  { name: "a", title: "SCENE #1" },
  { name: "b", title: "SCENE #2" },
  { name: "c", title: "SCENE #3" },
];
const plugins = [new Fade()];

function onChanged({ index }: { index: number }) {
  activeIndex.value = index;
}
const activeIndex = ref(0);
const flickingContainer = ref(null);
const showMore = ref({ a: false, b: false, c: false });

function changeTab(index: number) {
  activeIndex.value = index;
  const flicking: any = flickingContainer.value;
  flicking?.moveTo(index, 500);
}

const showLayer = (index: number, prefix: string) => {
  showLayerImage.value = true;
  pickedImage.value = {
    img: pictureOf(index, prefix),
    is_full: isFullImage(index),
  };
};
const closeLayer = () => (showLayerImage.value = false);
const pictureOf = (index: number, prefix: string) => {
  return new URL(
    `/src/assets/image/albums/${prefix}_${index}.png`,
    import.meta.url
  ).href;
};
const isFullImage = (index: number) => {
  return index === 1 || index === 12;
};

const albumCountsTop = Array.from({ length: 12 }, (v, k) => k + 1);
const albumCountsBottom = Array.from({ length: 12 }, (v, k) => k + 7);

function loadMore(tab: string) {
  switch (tab) {
    case "a":
      showMore.value.a = true;
      return;
    case "b":
      showMore.value.b = true;
      return;
    case "c":
      showMore.value.c = true;
      return;
  }
}
function isLoaded(tab: string) {
  switch (tab) {
    case "a":
      return showMore.value.a;
    case "b":
      return showMore.value.b;
    case "c":
      return showMore.value.c;
  }
}
</script>

<template>
   <div class="albums first">
    <div
      :class="['picture', { full: isFullImage(index) }]"
      v-for="index in albumCountsTop"
      :key="`pic_${index}`"
    >
      <img
        v-lazy="{
          src: pictureOf(index, 'a'),
        }"
        @click="showLayer(index, 'a')"
      />
    </div>
  </div>
  <!-- <img
    v-if="!isLoaded('a')"
    :src="btn_more"
    class="btn_more"
    @click="loadMore('a')"
  /> -->
  <!-- <div class="albums" v-if="isLoaded('a')">
    <div
      :class="['picture', { full: isFullImage(index) }]"
      v-for="index in albumCountsBottom"
      :key="`pic_${index}`"
    >
      <img
        v-lazy="{
          src: pictureOf(index, 'a'),
        }"
        @click="showLayer(index, 'a')"
      />
    </div>
  </div> -->

  <LayerImage
    v-if="showLayerImage"
    :image="pickedImage"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    @close="closeLayer"
  />
</template>

<style scoped>
.albums {
  width: 100%;
  margin-bottom: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 4px;
  column-gap: 4px;
}
.albums.first {
  margin-top: 20px;
}
.albums .picture {
  height: auto;
  border-radius: 3px;
  transition: 0.7s all;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.albums .picture.full {
  grid-column: span 2;
}

.albums img {
  object-fit: contain;
  width: 100%;
}

img[lazy="loading"] {
  /* width: 30px;
  height: 30px;
  margin: 0 auto; */
}

.tab_buttons {
  display: flex;
  justify-content: space-between;
  margin: 10px 16px;
  padding: 12px 0 10px;
  border-top: 1px dotted #ddd;
  border-bottom: 1px dotted #ddd;
}

.tab_buttons:deep button {
  padding-bottom: 2px;
}

.btn_more {
  width: auto;
  max-width: 358px;
  margin: 20px auto 0;
  display: block;
}
</style>

<script setup lang="ts">
import CardItem from "./CardItem.vue";
import CardTitle from "./atom/CardTitle.vue";
import Information from "./Informations.vue";
import MainVisual from "./MainVisual.vue";
import MainComment from "./MainComment.vue";
import Location from "./Location.vue";import ForYourHeart from "./ForYourHeart.vue";
import { onMounted, onUnmounted } from "vue";
import { isElemVisible } from "../utils/common";
import { defineAsyncComponent } from "vue";

const Albums = defineAsyncComponent(() => import("./Albums.vue"));

const props = defineProps({
  type: String,
});

var fadeInElements: any[] = [];

onMounted(() => {
  fadeInElements = Array.from(document.getElementsByClassName("fade-in"));
  document.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  for (var i = 0; i < fadeInElements.length; i++) {
    var elem = fadeInElements[i];
    if (isElemVisible(elem, window.innerHeight)) {
      elem.style.opacity = 1;
      fadeInElements.splice(i, 1); // only allow it to run once
    } else {
      elem.style.opacity = 0.1;
    }
  }
}
</script>

<template>
  <MainVisual :type="props.type" />

  <CardItem> <MainComment class="main_comment" /> </CardItem>

  <!-- <CardItem class="calendar" style="max-width: 1200px">
    <img class="img_calendar" :src="calendar" />
  </CardItem> -->

  <CardItem v-if="type === 'default'" element-ref="card0" :wide="true">
    <CardTitle :title="'gallery'" :subtitle="'Yuan\'s photos'"/>
    <Albums :type="props.type" />
  </CardItem>

  <!-- <CardItem element-ref="card1" :style="{ 'background-color': '#fbfaf6' }">
    <img class="img_title_information" :src="title_information" />
    <Information />
  </CardItem> -->

  <!-- <CardItem
    element-ref="card2"
    title="For Your Heart"
    description="마음 전하실 곳"
  >
    <img class="img_title_heart" :src="title_heart" />
    <ForYourHeart :type="props.type" />
  </CardItem> -->

  <CardItem element-ref="card3" class="last-card">
    <CardTitle :title="'location'" :subtitle="'오시는 길'"/>
    <Location :type="props.type" />
  </CardItem>

  <!-- <Footer /> -->
</template>
<style scoped>
.img_comment,
.img_calendar,
.img_title_album,
.img_title_information,
.img_title_heart,
.img_title_location {
  width: auto;
  max-width: 358px;
  margin: 0 auto;
  display: block;
}

.card_titles {
  position: relative;
  font-family: "Gamja Flower", serif;
  font-weight: bolder;
  text-align: center;
}
.card_titles .title {
  font-size: 15px;
}

.card_titles .description {
  font-size: 20px;
  margin: 5px;
}

.calendar {
  background: #fbfaf6;
}

@media (min-width: 580px) {
}

.last-card {
  margin-bottom: 100px;
}
</style>

<script setup lang="ts">
import KakaoMap from "./atom/KakaoMap.vue";
import LocationButton from "./atom/LocationButton.vue";
import LocationText from "./atom/LocationText.vue";
import TextCopy from "./atom/TextCopy.vue";
const props = defineProps({
  type: String,
});
</script>

<template>
  <KakaoMap />
  <TextCopy
    :class="['location_copy', type]"
    copy-text="경기 성남시 수정구 위례광장로 300 위례중앙타워 12층"
  >
    <slot>
      <p><em>플로렌스 위례점</em></p>
      <p>경기 성남시 수정구 위례광장로 300 위례중앙타워 12층</p>
    </slot>
  </TextCopy>
  <div :class="['btn_locations', type]">
    <LocationButton type="kakao" link="https://kko.kakao.com/yzt-E30SVi"
      ><span class="loc_text">카카오네비</span></LocationButton
    >
    <LocationButton type="tmap" link="https://tmap.life/6544754c"
      ><span class="loc_text">티맵</span></LocationButton
    >
    <LocationButton type="naver" link="https://naver.me/5xjfp8Uq"
      ><span class="loc_text">네이버지도</span></LocationButton
    >
  </div>
  <div :class="['text_locations', type]">
    <LocationText title="주차안내">
      <p class="text">
        - 돌잔치 당일 현장에서 방문차량 등록 가능합니다. (주차지원 3시간 )
      </p>
      <br/>
    </LocationText>
  </div>
</template>

<style>
.btn_locations {
  display: flex;
  gap: 4px;
  margin: 0 auto;
}
.text_locations {
  margin-top: 30px;
}

.location_copy,
.text_locations .text {
  font-family: "NanumSquare", sans-serif;
  font-size: 12px;
}

.location_copy em {
  font-style: normal;
  font-weight: bold;
}

.btn_locations .text {
  font-size: 13px;
}

.location_copy.default,
.btn_locations.default .text,
.text_locations.default .text {
  font-family: "NanumSquare", sans-serif;
  font-size: 12px;
  color: #000;
  font-weight: 400;
}

.text_locations.default .text {
  font-size: 16px;
  font-weight: 400;

}

.loc_text {
  font-size: 11px;
  font-family: "NanumSquare", sans-serif;
  color: #222;
}
</style>

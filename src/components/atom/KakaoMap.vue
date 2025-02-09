<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=a90544705bba1d2a422e52f5365f33b5";
      document.head.appendChild(script);
      setTimeout(() => {
        this.initMap();
      }, 1000);
    }
  },
  methods: {
    initMap() {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.47345459596338, 127.14271661958976), // 지도의 중심좌표
          level: 4, // 지도의 확대 레벨
        };

      // 지도를 생성합니다
      var map = new kakao.maps.Map(mapContainer, mapOption);

      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      var markerPosition = mapOption.center;

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      map.setCenter(mapOption.center);
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  max-height: 400px;
  margin: 20px auto 0;
}

#map::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>

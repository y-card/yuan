<scrpt setup lang="ts"></scrpt>
<template>
  <section class="footer">
    <div class="bg"></div>
  </section>
</template>
<style scoped>
.footer {
  font-family: "Nanum Myeongjo", serif;
  text-align: center;
  padding: 80px 0;
  background: url("../assets/image/footer.png") no-repeat center center / cover;
  color: #fff;
  height: 198px;
  position: relative;
}
.footer .title {
  margin-bottom: 10px;
}
.footer .copy {
  font-size: 10px;
  margin-top: 30px;
}

.texts {
  z-index: 2;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 272px;
  display: flex;
  justify-content: start;
  flex-direction: column;
}

.bg {
  opacity: 0.2;
  height: 100%;
  background: #333;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
</style>

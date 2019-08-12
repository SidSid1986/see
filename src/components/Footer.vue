<template>
  <div class="Footer">
      <div class="footerLeft"></div>
      <div class="footerMiddle">
        <a href="#">雷达监控</a>
        <a href="#">HSOM</a>  
        <a href="#">MDOS</a>
        <a href="#">一体化</a>
      </div>
      <div class="footerRight"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.Footer {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content:space-between
}

.footerMiddle a {
  color:#FFFFFF;
  text-decoration: none;
  font-weight: bold;
}

.footerMiddle a:hover {
  color:#00BDB1;
}

.footerMiddle {
  width:50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

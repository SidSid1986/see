<template>
  <div class="HomePage">
    <Nav />

    <div class="HomeFlex">
      <div class="FirstLineGroup">
        <div class="FirstLineLeft">
          <Temp />
          <RH />
        </div>
        <div class="FirstLineMiddle">
          <!-- <Lines3 /> -->
          <!-- <SDmap/> -->
          <!-- <SDmap2/> -->
          <!-- <SDmap3/> -->
          <YTmap/>
        </div>
        <div class="FirstLineRight">
          <UPS />
          <!-- <UPS2 /> -->
          <!-- <Alarm/> -->
          <ScrollView/>
          <!-- <UPS /> -->
          

        </div>
      </div>
      <!-- 底部一行 -->
      <div class="SecondLineGroup">
        <div class="SecondLineLeft red">
          <Table1/>
        </div>
        <div class="SecondLineMiddleLeft yellow">
          <Table2/>
        </div>

        <div class="SecondLineMiddleRight blue">
         <Table3/>
        </div>
          <div class="SecondLineRight green">
         <Table4/>
        </div>
      </div>

      <Footer/>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Temp from "../components/Temp";
import RH from "../components/RH";
import Lines from "../components/Lines/Lines";
import Lines2 from "../components/Lines2/Lines2";
import Lines3 from "../components/Lines3/Lines3";

import SDmap from '../components/SDmap/SDmap';
import SDmap2 from '../components/SDmap2/SDmap2'
import SDmap3 from '../components/SDmap3/SDmap3'
import YTmap from '../components/YTmap/YTmap'


import UPS from "../components/UPS.vue";
import UPS2 from "../components/UPS2.vue";

import ScrollView from '../components/ScrollView'

import Table1 from '../components/Table/Table1/Table1'
import Table2 from '../components/Table/Table2/Table2'
import Table3 from '../components/Table/Table3/Table3'
import Table4 from '../components/Table/Table4'

import Alarm from '../components/Alarm/Alarm'

import Footer from '../components/Footer'

export default {
  data() {
    return {};
  },
  components: {
    Nav,
    Temp,
    RH,
    Lines,
    Lines2,
    Lines3,
    Alarm,
    UPS,
    UPS2,
    ScrollView,
    Table1,
    Table2,
    Table3,
    Table4,
    SDmap,
    SDmap2, 
    SDmap3,
    YTmap,

    Footer
  }
};
</script>

<style scoped>
/* .red{
  background-color: red;
  
}
.yellow{
  background-color: yellow;
  
}
.blue{
  background-color: blue;
  
}
.green{
  background-color: green;
  
} */
.HomeFlex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.FirstLineGroup {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.FirstLineLeft {
  width: 25%;
}

.FirstLineMiddle {
  width: 50%;
}

.FirstLineRight {
  width: 25%;
}

/* 第二行 */
.SecondLineGroup {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* width:75%; */
}

.SecondLineLeft {
  width: 25%;
}

.SecondLineMiddleLeft {
  width: 25%;
}

.SecondLineMiddleRight {
  width: 25%;
}
.SecondLineRight {
  width: 25%;
}
</style>

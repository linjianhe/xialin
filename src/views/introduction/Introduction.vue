<template>
  <div class="box">
    <p class="text">
      {{this.positionIntro}}
    </p>
    <p class="text">
      {{this.villageIntro}}
    </p>
    <img class="shuyuan-img" src="../../assets/img/shuyuan.jpg"/>
  </div>
</template>

  <script>
  export default {
    name: 'introduction',
  data() {
    return {
      positionIntro: '  溪南镇地处漳平市东北部，溪南溪（即感化溪）中下游，因在溪之南段，故名溪南。东邻象湖镇，南和西南与芦芝乡、和平镇接壤，西和西北与新桥镇毗邻，东北紧连吾祠乡。处北纬25°32′，东经117°41′，距离市区36公里。为漳平市四大乡镇之一。辖16个行政村，1个居委会，1个林果场。“莆永”高速、省道203线贯穿全境，是离厦漳泉及龙岩仅1小时经济圈范围之内, 交通便利，是闽西对闽南沿海招商和产业转移的桥头堡.',
      villageIntro: '下林村位于溪南镇南部，九龙江上游感化溪畔。全村共有面积25500亩，其中林地面积16300 亩(生态公益林面积7600亩)，耕地面积759亩，毛竹面积2500 亩。全村共有7个自然村9个村民小组，428户1566人。'
    }
  }
  }
  </script>

  <style>
  .box{
    text-align: center;
    width: 990px;
    margin: 0 auto;
    height: 500px;
    overflow: scroll;
  }
  .text{
    text-align: left;
  }
  .shuyuan-img{
    margin: 0 auto;
    width: 900px;
  }
  </style>

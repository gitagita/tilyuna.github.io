<template>
<div class="header_nav english">
  <b-navbar class="nav_bar" toggleable="lg" variant="faded" type="light">
    <div class="ynkTitle"><a href="/"><strong class="title" >YunaTil</strong></a></div>
    <!-- <div>
        <div class="hangul">메뉴</div>
        <select>
          <option>고도몰</option>
          <option>Vue</option>
          <option>React</option>
          <option>Node.js</option>
        </select>
    </div> -->
  </b-navbar>
  <h1 class="sub_title">Today I Learned</h1>
</div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Do+Hyeon&family=Hahmlet:wght@100&display=swap');

.header_nav {
  background-image: url(./../../assets/img/banner.png);
  background-size: 100%;
  background-position-y: center;
  width: 100%;
  height: 300px;
  border: 2px solid;
}
.hangul{
  font-family: 'Hahmlet', serif;
  font-size: 13px;
}
.hangul_title{
  font-family: 'Do Hyeon', sans-serif;
}
.english{
  font-family: 'Acme', sans-serif;
}
.sub_title{
  position: absolute;
  top: 50px;
  margin: 50px 20px;
  font-size: 60px;
  text-shadow: 2px 2px #f0f0f0;
}
.view_img{
  width: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  top:0;
}
.title{
  margin-left: 20px;
  text-shadow: 1px 1px #f0f0f0;
}
a{
  text-decoration: none;
  color: black;
  font-size: 20px;
}
.ynkTitle{
  padding-top: 14px;
}
</style>
<template>
    <div v-if="board">
    <div v-for="(data, index) in board" :key="index">
      <div class="view" v-if="data.id == $route.params.id">
      <div class="view_header">
        <strong class="ynkTitle hangul_title">{{data.title}}    </strong>
        <span class="ynkType hangul">{{data.type}}</span>
        <span class="ynkRegDt hangul">{{data.regDt}}</span>
      </div>
      <hr>
      <div class="view_contents">
        <div class="ynkKey hangul">[{{data.key}}]  </div>
        <div class="ynkContent hangul" v-html="data.content"></div>
      </div>
      <div class="ynkCode" v-if="!(data.code=='<pre></pre>')"><code v-html="data.code"></code></div>
      <div class="listBtn"><router-link class="hangul_title md" to="/">목록보기</router-link></div>
      </div>
  </div>
  </div>
</template>
<script>
import board from './../assets/data/board';

export default {
  data () {
    return {
      board: board
    }
  },
  name: 'View'
}
</script>
<style scoped>
.view{
  margin-top: 30px;
  padding-bottom: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
}
.view_header{
  margin-bottom: 10px;
}
hr{
  height: 1px;
  background:#9E5D5D ;
}
.ynkType{
  background: #d78b7d;
  border-radius: 25% 10%;
  padding: 2px;
  font-weight: 700;
}
.ynkRegDt{
  float: right;
}
.view_contents{
  margin-bottom: 20px;
}
.ynkCode{
  width: 98%;
  padding: 10px;
  overflow-x: scroll;
  background: #343434;
}
.ynkCode::-webkit-scrollbar{
  height:7px;
}
.ynkCode::-webkit-scrollbar-thumb{
  background-color: #9E5D5D;
}
.ynkCode::-webkit-scrollbar-track{
  background-color: #5b5959;
}
.ynkCode code{
  color: #9E5D5D;
}
.listBtn{
  margin-top: 20px;
  padding: 5px;  
}
.listBtn:hover{
  width: fit-content;
  padding: 5px;
  border-radius: 3px;
  background:#d78b7d;
}

@media (max-width: 900px) {
  .view{
    margin-top: 30px;
    padding-bottom: 30px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
  }
}
</style>
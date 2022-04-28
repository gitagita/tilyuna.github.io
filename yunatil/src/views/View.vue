<template>
  <div class="view">
      <div class="view_header">
        <strong class="ynkTitle hangul_title">{{board.title}}    </strong>
        <span class="ynkType hangul">{{board.type}}</span>
        <span class="ynkRegDt hangul">{{board.regDt}}</span>
      </div>
      <hr>
      <div class="view_contents">
        <div class="ynkKey hangul">[{{board.key}}]  </div>
        <div class="ynkContent hangul" v-html="board.content"></div>
      </div>
      <div class="ynkCode" v-if="!(board.code=='<pre></pre>')"><code v-html="board.code"></code></div>
      <div class="listBtn"><router-link class="hangul_title" to="/">목록</router-link></div>
  </div>
</template>
<script>
export default {
  name: 'View',
  props: {
    board:{
      type: Object,
      default() {
          return {}
      }
    }
  }
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
</style>
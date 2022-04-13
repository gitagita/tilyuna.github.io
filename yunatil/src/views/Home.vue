<template>
<div class="list_contents">
  <div class="card_group_list" v-for="(value, index) in board" :key="index">
    <div>
      <div class="hangul_title">
        <strong>{{value.title}}</strong>
        <div class="hangul">{{value.content}}</div>
      </div>
      <div class="ynkCode" v-if="!(value.code=='<pre></pre>')"><code v-html="value.code"></code></div>
    </div>
  </div>
</div>
</template>
<script>
import board from './../assets/data/board';
export default {
  data(){
    return {
      board: board
    }
  },
  methods: {}
};

</script>
<style scoped>
.card_group_list{
  width: 48%;
  padding: 10px 10px;
  display: inline-block;
} 
.ynkCode{
  height: 130px;
  padding: 10px;
  overflow-x: scroll;
  background: #343434;
}
.ynkCode::-webkit-scrollbar{
  height:7px;
  width: 7px;
}
.ynkCode::-webkit-scrollbar-thumb{
  background-color: rgb(186, 80, 80);
}
.ynkCode::-webkit-scrollbar-track{
  background-color: #5b5959;
}
.ynkCode code{
  color:rgb(158, 93, 93);
}
	
@media (max-width: 1032px) {
  .card_group_list{
    width: 100%;
    margin: 0;
  }
}
</style>
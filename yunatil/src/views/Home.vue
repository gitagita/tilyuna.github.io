<template>
<div class="list_contents">
  <div>
    <input id="keyword" type="text"  placeholder="Search" @keyup="filter">
  </div>
  <div class="card_group_list" v-for="(value, index) in board" :key="index">
    <div class="card_contents">
      <div class="hangul_title">
        <div>
          <strong class="ynkTitle">{{value.title}}    </strong>
          <span class="ynkType hangul">{{value.type}}</span>
        </div>
        <div>
          <span class="ynkKey hangul">[{{value.key}}]  </span>
          <span class="ynkContent hangul">{{value.content}}</span>
        </div>
      </div>
      <div class="ynkCode" v-if="!(value.code=='<pre></pre>')"><code v-html="value.code"></code></div>
    </div>
  </div>
</div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
import board from './../assets/data/board';
export default {
  data(){
    return {
      board: board
    }
  },
  methods: {
    filter(){
      var value, keyword, item, i;

      value = document.getElementById("keyword").value.toUpperCase();
      item = document.getElementsByClassName("card_group_list");

      for(i=0; i<item.length; i++){
        //전체 검색
        keyword = item[i].getElementsByClassName("card_contents");

        //type 검색
        //keyword = item[i].getElementsByClassName("ynkType");

        if(keyword[0].innerHTML.toUpperCase().indexOf(value) > -1){
          item[i].style.display = "flex";
        } else{
          item[i].style.display = "none";
        }
      }
    }
  }
};
</script>
<style scoped>
.card_group_list{
  width: 48%;
  padding: 10px 10px;
  display: inline-block;
}
.ynkType{
  background: #d78b7d;
  border-radius: 25% 10%;
  padding: 2px;
  font-weight: 700;
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
  background-color: #9E5D5D;
}
.ynkCode::-webkit-scrollbar-track{
  background-color: #5b5959;
}
.ynkCode code{
  color: #9E5D5D;
}
	
@media (max-width: 1032px) {
  .card_group_list{
    width: 100%;
    margin: 0;
  }
}
</style>
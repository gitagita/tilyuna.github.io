<template>
<div class="list_contents">
  <div>
    <input id="keyword" class="searchForm" type="text"  placeholder="Search" @keyup="filter">
  </div>
  <div class="card_group_list" v-for="(value, index) in board" :key="index">
    <div class="card_contents">
      <div class="hangul_title">
        <div class="click_view" @click="getView(value)">
          <strong class="ynkTitle">{{value.title}}    </strong>
          <span class="ynkType hangul">{{value.type}}</span>
        </div>
        <div class="list_contents">
          <span class="ynkKey hangul">[{{value.key}}]  </span>
          <span class="ynkContent hangul">{{value.content}}</span>
        </div>
      </div>
      <!-- <div class="ynkCode" v-if="!(value.code=='<pre></pre>')"><code v-html="value.code"></code></div> -->
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
          item[i].style.display = "inline-block";
        } else{
          item[i].style.display = "none";
        }
      }
    },getView(board) {
      this.$router.push({name: 'View', params: {board: board}})
    },
  }
};
</script>
<style scoped>
.card_group_list{
  width: 48%;
  padding: 10px 10px;
  /* display: inline-block; */
  float: left;
}
.card_contents{
  width: 100%;
}
.ynkType{
  background: #d78b7d;
  border-radius: 25% 10%;
  padding: 2px;
  font-weight: 700;
}
.list_contents{
  /* width: 200px; */
  overflow: hidden;
  white-space : nowrap;
  text-overflow: ellipsis;
}
.ynkCode{
  width: 98%;
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
.click_view:hover{
  background:#ffeae7;
}
.searchForm{
  width: 200px;
  margin: 20px;
  padding: 0.8em 0.5em;
  font-family: inherit;
  border: 2px solid #9E5D5D;
  outline-style: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
	
@media (max-width: 1032px) {
  .card_group_list{
    width: 100%;
    margin: 0;
  }
}
</style>
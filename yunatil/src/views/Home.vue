<template>
<div class="list_contents">
  <div>
    <input id="keyword" class="searchForm" type="text"  placeholder="Search" @keyup="filter">
    <div class="selectBox">
        <select id="selectbox" class="hangul select" @change="selectOption($event)">
          <option value="">전체</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
          <option value="type">태그</option>
          <option value="key">주제</option>
        </select>
    </div>
  </div>
  <div class="card_group_list" v-for="(value, index) in board" :key="index">
    <router-link :to="`/view/`+value.id">
      <div class="card_contents">
      <div class="hangul_title">
        <div class="click_view">
          <strong class="ynkTitle lg">{{value.title}}    </strong>
          <span class="ynkType hangul">{{value.type}}</span>
        </div>
        <div class="list_contents">
          <span class="ynkKey hangul">[{{value.key}}]  </span>
          <span class="ynkContent hangul">{{value.content}}</span>
        </div>
      </div>
      </div>
    </router-link>
  </div>
</div>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
import board from './../assets/data/board';
export default {
  data(){
    return {
      board: board,
      menu: ""
    }
  },
  name: 'Home',
  methods: {
    selectOption(event){
      this.menu =  event.target.value;
      this.filter();
    },
    filter(){
      var value, keyword, item, i;

      value = document.getElementById("keyword").value.toUpperCase();
      item = document.getElementsByClassName("card_group_list");
      
      for(i=0; i<item.length; i++){
        switch (this.menu) {
          case "title":
            keyword = item[i].getElementsByClassName("ynkTitle");
            break;
          case "content":
            keyword = item[i].getElementsByClassName("ynkContent");
            break;
          case "type":
            keyword = item[i].getElementsByClassName("ynkType");
            break;
          case "key":
            keyword = item[i].getElementsByClassName("ynkKey");
            break;
          default:
            keyword = item[i].getElementsByClassName("card_contents");
        }

        if(keyword[0].innerHTML.toUpperCase().indexOf(value) > -1){
          item[i].style.display = "flex";
          item[i].style.display = "inline-block";
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
  width: 650px;
  margin: 20px;
  padding: 6px 5px;
  font-family: inherit;
  font-size: 14px;
  border: 2px solid #9E5D5D;
  border-radius: 4px;
  outline-style: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.selectBox{
  margin: 20px 0 0 20px;
  float: left;
  position: relative;
  width: 100px;
  height: 32px;
  border-radius: 4px;
  border: 2px solid #9E5D5D;
}
.selectBox .select {
  width: inherit;
  height: inherit;
  background: transparent;
  border: 0 none;
  outline: 0 none;
  padding: 0 5px;
  position: relative;
  z-index: 3;
}
.selectBox .select option {
  padding: 3px 0;
}
@media (max-width: 1032px) {
  .card_group_list{
    width: 100%;
    margin: 0;
  }
  .searchForm{
    width: 300px;
  }
}
@media (max-width: 520px) {
  .searchForm{
    width: 170px;
  }
  .selectBox{
    width: 80px;
  }
}
</style>
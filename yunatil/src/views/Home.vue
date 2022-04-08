<template>
<div>
  <div class="card_group_list">
    <b-card-group deck class="card_group" >
      <b-card v-for="(value, index) in board" :key="index" :header="value.title"  class="text-center hangul_title">
        <b-card-text class="hangul">{{value.content}}</b-card-text>
        <div><code v-html="value.code"></code></div>
      </b-card>
    </b-card-group>
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
  width: 100%;
  margin: 0 10px 0 10px;
}
.card_group{
  margin: 0 10px 0 10px;
}
.card{
  width: 50%;
  height: 240px;
  margin-bottom: 5px;
  float: left;
}

	
@media (max-width: 991.5px) {
  .card_group_list{
    width: 100%;
    margin: 0;
  }
  .card{
    width: 100%;
    margin-bottom: 5px;
    display: block;
  }
}
</style>
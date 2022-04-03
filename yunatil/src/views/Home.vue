<template>
<div>
    <div>
        <b-badge pill variant="primary">Primary</b-badge>
    </div>
  <div>
    <b-card-group deck class="card_group" >
      <b-card v-for="(value, index) in board" :key="index" bg-variant="dark" :header="value.title" text-variant="white" class="text-center">
        <b-card-text>{{value.content}}</b-card-text>
      <b-card-text>{{value.code}}</b-card-text>
      </b-card>
    </b-card-group>   

    <b-card-group deck class="card_group">
      <b-card bg-variant="dark" header="Dark" text-variant="white" class="text-center">
        <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
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
.card_group{
  width: 50%;
  float: left;
}
</style>
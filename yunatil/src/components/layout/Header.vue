<template>
<div>
  <b-navbar class="nav_bar" toggleable="lg" variant="faded" type="light">
    <b-navbar-brand class="title" href="#">YunaTil</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar type="light" >
            <b-form-input class="mr-sm-2" size="sm"  placeholder="Search"></b-form-input>
            <b-button variant="outline-success" size="sm"  class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-navbar>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>메뉴</em>
          </template>
          <b-dropdown-item href="#">고도몰</b-dropdown-item>
          <b-dropdown-item href="#">Vue</b-dropdown-item>
          <b-dropdown-item href="#">React</b-dropdown-item>
          <b-dropdown-item href="#">Node.js</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div>
    <h1 class="sub_title">Today I Learned</h1>
    <img class="view_img" src="./../../assets/img/bg-masthead.jpg" alt="..." />
  </div>
</div>
</template>

<script>
export default {
    name: "header",
};
</script>

<style>
.nav_bar{
  z-index: 10;
}
.sub_title{
  color: white;
}
.view_img{
  width: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  top:0;
  z-index:1;
}
.title{
  margin-left: 20px;
}
</style>
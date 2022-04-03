<template>
<div class="header_nav">
  <b-navbar class="nav_bar" toggleable="lg" variant="faded" type="light">
    <b-navbar-brand class="title" href="/">YunaTil</b-navbar-brand>

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
  <h1 class="sub_title">Today I Learned</h1>
</div>
</template>

<script>
export default {
    name: "header",
};
</script>

<style>
.header_nav {
  background-image: url(./../../assets/img/bg-masthead.jpg);
  background-size: 100%;
  width: 100%;
  height: 300px;
  border: 2px solid;
  color: pink;
}
.sub_title{
  margin: 50px 20px;
  color: white;
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
}
</style>
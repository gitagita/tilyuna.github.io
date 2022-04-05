<template>
<div class="header_nav english">
  <b-navbar class="nav_bar" toggleable="lg" variant="faded" type="light">
    <b-navbar-brand class="title" href="/">YunaTil</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar type="light" >
            <b-form-input class="mr-sm-2" size="sm"  placeholder="Search"></b-form-input>
            <b-button variant="outline-dark" size="sm" class="search_btn" type="submit">Search</b-button>
        </b-navbar>

        <b-nav-item-dropdown right>
          <template #button-content>
            <em class="hangul">메뉴</em>
          </template>
          <b-dropdown-item class="hangul" href="#">고도몰</b-dropdown-item>
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
@import url('https://fonts.googleapis.com/css2?family=Acme&family=Do+Hyeon&family=Hi+Melody&display=swap');.header_nav {
  background-image: url(./../../assets/img/bg-masthead.jpg);
  background-size: 100%;
  width: 100%;
  height: 300px;
  border: 2px solid;
}
.hangul{
  font-family: 'Hi Melody', cursive;
  font-size: 20px;
}
.hangul_title{
  font-family: 'Do Hyeon', sans-serif;
}
.english{
  font-family: 'Acme', sans-serif;
}
.sub_title{
  margin: 50px 20px;
  font-size: 60px;
  text-shadow: 3px 3px #f0f0f0;
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
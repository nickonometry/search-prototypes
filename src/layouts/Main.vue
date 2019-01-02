<template>
<div>
  <!-- Learn about this code on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout -->
<div class="mainContainer">
<div class="wrapper">
        <header class="main-head">
          <md-toolbar class="md-primary">
          <span class="md-title">Advanced Search Prototype</span>
      </md-toolbar>
        </header>
        <nav class="main-nav">
            <NavbarComponent></NavbarComponent>
        </nav>
        <article class="content">
          <transition name="slide-fade">
              <router-view></router-view>
          </transition>    
        </article> 
        <!-- <aside class="side">Sidebar</aside>
        <div class="ad">Advertising</div> -->
</div>
</div>
</div>
</template>


<script>

export default {
  watch: {
    $route(to, from) {
      const currentPath = this.$route.path;  
      this.menuVisible = false;
    }
  },
  data: () => ({
    menuVisible: false,
  }),
};
</script>

<style lang="scss">
.mainContainer {
  height: 100vh;
  width: 100vw;
}
.main-head {
  grid-area: header;
}
.content {
  grid-area: content;
  background-color: #FFFFFF;
}
.main-nav {
  grid-area: nav;
  background-color: #F9F9F9;
  border-right: 1px solid #CDCDCD;
}
.side {
  grid-area: sidebar;
}
.ad {
  grid-area: ad;
}
.main-footer {
  grid-area: footer;
}
.wrapper {
  display: grid;
  grid-template-areas: 
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
    grid-template-rows: 64px 100vh 
              1fr
              30px;
}
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
  }
}
@media (min-width: 700px) {
  .wrapper {
    grid-template-columns: 1fr 6fr 0fr;
    grid-template-areas: 
      "header header  header"
      "nav    content sidebar"
      "nav    content ad"
      "footer footer  footer"
   }
}


</style>

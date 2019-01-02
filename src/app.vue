<template>
  <div id="app">
      <component :is="layout"></component>
  </div>
</template>

<script>
const default_layout = "Main"

export default {
  name: "app",
  computed: {
      layout(){
          return (this.$route.meta.layout || default_layout);
      }
  },

};
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine.scss"; // Import the theme engine

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(indigo, 500),
    accent: md-get-palette-color(amber, 500),
    secondary: md-get-palette-color(amber, 500)
  )
);

@import "~vue-material/dist/theme/all.scss"; // Apply the theme


.md-app {
  max-height: 100vh
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(64px);
  opacity: 0;
}



.md-app-drawer {
  width: 304px;
  max-width: calc(100vw - 125px);
  border-right: 1px solid #e0e0e0;
}

.fiftyFour {
  color: rgba(0, 0, 0, 0.54);
}

@media screen and (max-width: 600px) {
  .byeOnMobile {
    display: none;
  }
  .md-app-content {
    padding: 28px 32px 48px 32px;
    height: 100vh;
    border: 0px;
  }
}

@media screen and (min-width: 600px) {
  .hamburgerBye {
    display: none;
  }
  .md-title {
    margin-left: 0px !important;
  }
}
</style>

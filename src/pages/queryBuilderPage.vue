<template>
  <div>
    <md-toolbar md-elevation="0" class="secondaryToolbar" style="z-index: 0; padding-left: 32px;">
      <h3 class="md-headline">Query builder</h3>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>history</md-icon>
        </md-button>
  
        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>
  
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </div>
    </md-toolbar>
  
    <div class="container">
      <!-- <QueryBuilder></QueryBuilder>       -->
      <QueryCreator></QueryCreator>
    </div>  
  </div>
</template>

<script>
  import MainLayout from "../layouts/Main.vue";
  
  export default {
    components: {
      MainLayout
    },
    data: () => ({}),
  };
</script>

<style lang="scss" scoped>
  @import "~vue-material/src/components/MdAnimation/variables.scss";
  @import "~vue-material/src/theme/engine.scss";
  .secondaryToolbar {
    border-bottom: 1px solid #dfe0df;
    background-color: #fff;
  }
  
  .container {
    margin: 24px;
    width: 100%;
    max-width: 1024px;
    padding: 0px;
  }

  
  .queryRow {
    margin-bottom: 0px;
  }
</style>

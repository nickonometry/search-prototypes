<template>
<div>    
  <div class="listContainer">
      <md-list>
        <md-list-item router-link v-bind:to="'/#'">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>
        <!-- <md-list-item router-link v-bind:to="'/basicsearch'">
          <md-icon>search</md-icon>
          <span class="md-list-item-text">Basic search</span>
        </md-list-item> -->
        <md-list-item  router-link v-bind:to="'/advancedsearch'">
          <md-icon>find_in_page</md-icon>
          <span class="md-list-item-text">Advanced search V1</span>
        </md-list-item>
        <md-list-item  router-link v-bind:to="'/advancedsearchv2'">
          <md-icon>find_in_page</md-icon>
          <span class="md-list-item-text">Advanced search V2</span>
        </md-list-item>
        <md-list-item  router-link v-bind:to="'/advancedsearchv3'">
          <md-icon>find_in_page</md-icon>
          <span class="md-list-item-text">Advanced search V3</span>
        </md-list-item>
        <md-list-item  router-link v-bind:to="'/querybuilder'">
          <md-icon>build</md-icon>
          <span class="md-list-item-text">Query builder V1</span>
        </md-list-item>
      </md-list>
    </div>
  </div>


</template>

<script>
export default {
    name: 'NavbarComponent',
  }
</script>


<style lang="scss" scoped>
.secondaryToolbar {
  border-bottom: 1px solid #DFE0DF;
  background-color: #f5f5f5;
  height: 64px;
  z-index: 0;
}

.listContainer {
  max-width: 300px;
}
.md-list {
  background-color: #F9F9F9;
}
.md-list-item-content>.md-icon:first-child {
    margin-right: 24px;
}
</style>
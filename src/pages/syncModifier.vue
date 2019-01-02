<template>
  <div>

    <md-toolbar md-elevation="0" class="secondaryToolbar" style="z-index: 0;">
      <h3 class="md-headline">Sync Modifier</h3>
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
        <!-- <div v-for="(line, index) in grantorArray" v-bind:key="index">
            <p>Grantor {{line.operatorSelected}} {{line.searchString}} {{line.andOrValue}}</p>
            
        </div> -->
        <!-- <md-chips v-model="grantorArray" md-static></md-chips> -->
        <p>Formatted array from the child component:</p>
        <div v-for="(line, index) in componentRows" v-bind:key="index">
            <p>Row #{{index + 1}}: {{line.operatorSelected}} {{line.searchString}}</p>
            <p>{{line.andOrValue}}</p>
        </div>
      <md-card>
        <div class="searchCategoryWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
                <RowComponentSync :componentRows.sync="this.componentRows"></RowComponentSync>
            </div>
          </div>
        </div>

        <md-card-actions>
          <md-button>CANCEL</md-button>
          <md-button class="md-raised md-primary">SAVE</md-button>
        </md-card-actions>
      </md-card>

    </div>
    

    
    
  </div>
</template>

<script>
import MainLayout from "../layouts/Main.vue";

export default {
  components: {
    MainLayout
  },
  data: () => ({
    grantorArray: [],
    documentNumber: null,
    grantor: null,
    componentRows: [],
    grantee: null,
    modalOperator: null,
    grantorModal: false,
    granteeModal: false,
    selectedStartDate: null,
    selectedEndDate: null,
    value: null,
    formattedArrayHTML: null,
    grantorModalFields: {
      exact: null,
      containsAny: [],
      containsAll: [],
      beginsWith: '',
      excludes: ''
    },
    granteeModalFields: {
      exact: null,
      containsAny: [],
      containsAll: [],
      beginsWith: '',
      excludes: ''
    },
    counter: 0,
    operator: null,
  }),
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "~vue-material/src/components/MdAnimation/variables.scss";
@import "~vue-material/src/theme/engine.scss";

.modalContainer {
  overflow-y: scroll;
}
.modalInput {
  margin-bottom: 16px;
}

.secondaryToolbar {
  border-bottom: 1px solid #dfe0df;
  background-color: #fff;
}

.searchCategoryWrapper {
  padding: 16px;
  width: 100%;
  max-width: 960px;
  height: auto;
}

.modalWrapper {
  width: 100%;
}

.container {
  padding: 32px;
  width: 100%;
  max-width: 960px;
}

.md-toolbar {
  padding: 0 0 0 32px;
  max-height: 64px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
}

.md-button {
  margin: 0px;
}

.md-dialog {
max-width: 960px;

  .md-field {
    margin-bottom: 48px;
  }
}
</style>

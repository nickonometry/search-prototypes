<template>
  <div>

      <md-dialog :md-active.sync="grantorModal">
      <md-dialog-title>Grantor</md-dialog-title>

      <!-- GRANTOR MODAL!!! -->
      <md-dialog-content>
        <p style="margin:0px 0px 16px 0px;">
          Please enter all of your known search criteria and we will build your search for you. You may also build your own wildcard searches directly in the search fields.</p>
        <div class="modalWrapper">
          <div class="queryRow">
            <RowComponentModalGrantor></RowComponentModalGrantor>     
        </div>
        </div>

        <md-dialog-actions style="margin-top: 16px;">
          <md-button class="md-raised" @click="grantorModal = false;" style="margin-right: 8px;">Close</md-button>
          <md-button class="md-primary md-raised" @click="grantorModal = false;">Save</md-button>
        </md-dialog-actions>
      </md-dialog-content>
    </md-dialog>

    <md-dialog :md-active.sync="granteeModal">
      <md-dialog-title>Grantee</md-dialog-title>

      <!-- GRANTOR MODAL!!! -->
      <md-dialog-content>
        <p style="margin:0px 0px 16px 0px;">
          Please enter all of your known search criteria and we will build your search for you. You may also build your own wildcard searches directly in the search fields.</p>
        <div class="modalWrapper">
          <div class="queryRow">
            <RowComponentModalGrantee></RowComponentModalGrantee>     
        </div>
        </div>

        <md-dialog-actions style="margin-top: 16px;">
          <md-button class="md-raised" @click="granteeModal = false;" style="margin-right: 8px;">Close</md-button>
          <md-button class="md-primary md-raised" @click="granteeModal = false;">Save</md-button>
        </md-dialog-actions>
      </md-dialog-content>
    </md-dialog>


    <md-toolbar md-elevation="0" class="secondaryToolbar" style="z-index: 0;">
      <h3 class="md-headline">Advanced search V2</h3>
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
      <md-card>
        <div class="searchCategoryWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Document number</label>
                <md-input></md-input>
              </md-field>
            </div>
          </div>
        </div>

        <div class="searchCategoryWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-datepicker v-model="selectedStartDate">
      <label>Start date</label>
    </md-datepicker>
            </div>
            <div class="md-layout-item">
                <md-datepicker v-model="selectedEndDate">
      <label>End date</label>
    </md-datepicker>
            </div>
          </div>
        </div>

        <div class="searchCategoryWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Grantor</label>
                <div class="md-helper-text">Wildcard searching available, click the icon for assistance.</div>
                <md-textarea v-model="formattedGrantorArrayHTML" md-autogrow>{{formattedGrantorArrayHTML}}</md-textarea>
                <md-button v-if="grantorArray.constructor === Array && grantorArray.length <= 0" @click="grantorModal = true" class="md-icon-button">
                  <md-icon v-if="grantorArray.constructor === Array && grantorArray.length <= 0">tune</md-icon>
                  <md-icon v-if="grantorArray.constructor === Array && grantorArray.length > 0">edit</md-icon>
                </md-button>
                <md-button v-if="grantorArray.constructor === Array && grantorArray.length > 0" @click="grantorModal = true" class="md-icon-button">
                  <md-icon v-if="grantorArray.constructor === Array && grantorArray.length <= 0">tune</md-icon>
                  <md-icon v-if="grantorArray.constructor === Array && grantorArray.length > 0">edit</md-icon>
                </md-button>
              </md-field>
            </div> 
          </div>
        </div>

        <div class="searchCategoryWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Grantee</label>
                <div class="md-helper-text">Wildcard searching available, click the icon for assistance.</div>
                <md-textarea v-model="formattedGranteeArrayHTML" md-autogrow>{{formattedGranteeArrayHTML}}</md-textarea>
                <md-button v-if="granteeArray.constructor === Array && granteeArray.length <= 0" @click="granteeModal = true" class="md-icon-button">
                  <md-icon v-if="granteeArray.constructor === Array && granteeArray.length <= 0">tune</md-icon>
                  <md-icon v-if="granteeArray.constructor === Array && granteeArray.length > 0">edit</md-icon>
                </md-button>
                <md-button v-if="granteeArray.constructor === Array && granteeArray.length > 0" @click="granteeModal = true" class="md-icon-button">
                  <md-icon v-if="granteeArray.constructor === Array && granteeArray.length <= 0">tune</md-icon>
                  <md-icon v-if="granteeArray.constructor === Array && granteeArray.length > 0">edit</md-icon>
                </md-button>
              </md-field>
            </div> 
          </div>
        </div>

        <div class="searchCategoryWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>All names</label>
                <md-input></md-input>
              </md-field>
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
    granteeArray: [],
    documentNumber: null,
    grantor: null,
    grantee: null,
    modalOperator: null,
    grantorModal: false,
    granteeModal: false,
    selectedStartDate: null,
    selectedEndDate: null,
    value: null,
    formattedGrantorArrayHTML: null,
    formattedGranteeArrayHTML: null,
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
  mounted: function() {
    this.$EventBus.$on('grantorQuery', data => {
            this.grantorArray = data;
            var array = this.grantorArray;
            this.formattedGrantorArrayHTML = "";

            for (var i = 0; i < array.length; i++) { 
      
                if (array[i].operatorSelected) {
                  this.formattedGrantorArrayHTML += array[i].operatorSelected
                }
                if (array[i].searchString) {
                  this.formattedGrantorArrayHTML += array[i].searchString + " "
                }
                if (array[i].andOrValue) {
                  this.formattedGrantorArrayHTML += array[i].andOrValue + " "
                }
                } 
            return this.formattedGrantorArrayHTML;

        });
        this.$EventBus.$on('granteeQuery', data => {
            this.granteeArray = data;
            var array = this.granteeArray;
            this.formattedGranteeArrayHTML = "";

            for (var i = 0; i < array.length; i++) { 
      
                if (array[i].operatorSelected) {
                  this.formattedGranteeArrayHTML += array[i].operatorSelected
                }
                if (array[i].searchString) {
                  this.formattedGranteeArrayHTML += array[i].searchString + " "
                }
                if (array[i].andOrValue) {
                  this.formattedGranteeArrayHTML += array[i].andOrValue + " "
                }
                } 
            return this.formattedGranteeArrayHTML;

        });
  },
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
  max-width: 700px;
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

.md-field.md-theme-default .md-helper-text, .md-field.md-theme-default .md-count, .md-field.md-theme-default label {
    color: rgba(0, 0, 0, 0.87);
}

</style>

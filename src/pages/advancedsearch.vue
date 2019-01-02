<template>
  <div>
    <md-dialog :md-active.sync="grantorModal">
      <md-dialog-title>Grantor</md-dialog-title>

      <!-- GRANTOR MODAL!!! -->
      <md-dialog-content>
        <p style="margin:0px 0px 16px 0px;">
          Please enter all of your known search criteria and we will build your search for you. You may also build your own wildcard searches directly in the search fields.</p>
        <div class="modalWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Exact</label>
                <md-input v-model="grantorModalFields.exact"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <!-- <md-field>
      <label>Contains any</label>
      <md-input v-model="containsAny"></md-input>
              </md-field>-->
              <md-chips v-model="grantorModalFields.containsAny" md-placeholder="Contains any">
                <label>Contains any</label>
                <div class="md-helper-text">* Enter in a keyword and press enter. Multiple keywords are allowed here.</div>
              </md-chips>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-chips v-model="grantorModalFields.containsAll" md-placeholder="Contains all">
                <div class="md-helper-text">* Enter in a keyword and press enter. Multiple keywords are allowed here.</div>
              </md-chips>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Begins with</label>
                <md-input v-model="grantorModalFields.beginsWith"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Excludes</label>
                <md-input v-model="grantorModalFields.excludes"></md-input>
              </md-field>
            </div>
          </div>
        </div>

        <md-dialog-actions>
          <md-button class="md-primary" @click="grantorModal = false; onGrantorCancel()">Close</md-button>
          <md-button class="md-primary" @click="grantorModal = false; onGrantorConfirm()">Save</md-button>
        </md-dialog-actions>
      </md-dialog-content>
    </md-dialog>
    

    <!-- GRANTEE MODAL!!! -->
    <md-dialog :md-active.sync="granteeModal">
      <md-dialog-title>Grantee</md-dialog-title>
      <md-dialog-content>
        <p style="margin:0px 0px 16px 0px;">
          Please enter all of your known search criteria and we will build your search for you. You may also build your own wildcard searches directly in the search fields.</p>
        <div class="modalWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Exact</label>
                <md-input v-model="granteeModalFields.exact"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <!-- <md-field>
      <label>Contains any</label>
      <md-input v-model="containsAny"></md-input>
              </md-field>-->
              <md-chips v-model="granteeModalFields.containsAny" md-placeholder="Contains any">
                <label>Contains any</label>
                <div class="md-helper-text">Enter in a keyword and press enter. Multiple keywords are allowed here.</div>
              </md-chips>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-chips v-model="granteeModalFields.containsAll" md-placeholder="Contains all">
                <div class="md-helper-text">Enter in a keyword and press enter. Multiple keywords are allowed here.</div>
              </md-chips>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Begins with</label>
                <md-input v-model="granteeModalFields.beginsWith"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Excludes</label>
                <md-input v-model="granteeModalFields.excludes"></md-input>
              </md-field>
            </div>
          </div>
        </div>

        <md-dialog-actions>
          <md-button class="md-primary" @click="granteeModal = false; onGranteeCancel()">Close</md-button>
          <md-button class="md-primary" @click="granteeModal = false; onGranteeConfirm()">Save</md-button>
        </md-dialog-actions>
      </md-dialog-content>
    </md-dialog>
    
    <md-toolbar md-elevation="0" class="secondaryToolbar" style="z-index:0;">
      <h3 class="md-headline">Advanced search V1</h3>
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
                <md-textarea v-model="grantor" md-autogrow>{{grantor}}</md-textarea>
                <md-button @click="grantorModal = true" class="md-icon-button">
                  <md-icon>tune</md-icon>
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
                <md-textarea v-model="grantee" md-autogrow>{{grantee}}</md-textarea>
                <md-button @click="granteeModal = true" class="md-icon-button">
                  <md-icon>tune</md-icon>
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

        <div class="searchCategoryWrapper">
          <div class="md-layout md-gutter">
            <div class="md-layout-item">
              <md-field>
                <label>Document types</label>
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
    documentNumber: null,
    grantor: null,
    grantee: null,
    grantorModal: false,
    granteeModal: false,
    selectedStartDate: null,
    selectedEndDate: null,
    value: null,
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
  }),
  methods: {
    onGrantorConfirm() {
      var dataGrantor = {
        exact: this.grantorModalFields.exact,
        containsAny: this.grantorModalFields.containsAny,
        containsAll: this.grantorModalFields.containsAll,
        beginsWith: this.grantorModalFields.beginsWith,
        excludes: this.grantorModalFields.excludes,
        };

      var dataGrantorCombined = [];

      if (dataGrantor.exact) dataGrantorCombined.push("\"" + "+" + dataGrantor.exact + "\"");
      if (dataGrantor.containsAny && dataGrantor.containsAny.constructor === Array && dataGrantor.containsAny.length > 0) dataGrantorCombined.push("and (+" + dataGrantor.containsAny.join(", or +") + ")");
      if (dataGrantor.containsAll && dataGrantor.containsAll.constructor === Array && dataGrantor.containsAll.length > 0) dataGrantorCombined.push("and (+" + dataGrantor.containsAll.join(", and +") + ")");
      if (dataGrantor.beginsWith) dataGrantorCombined.push("and ^" + dataGrantor.beginsWith);
      if (dataGrantor.excludes) dataGrantorCombined.push("and -" + dataGrantor.excludes);

      this.grantor = dataGrantorCombined.join(" ");


    },

    onGrantorCancel() {
      this.grantor = "";
      this.grantorModalFields.exact = "";
      this.grantorModalFields.containsAny = [];
      this.grantorModalFields.containsAll = [];
      this.grantorModalFields.beginsWith = "";
      this.grantorModalFields.excludes = "";
    },

onGranteeConfirm() {
      var dataGrantee = {
        exact: this.granteeModalFields.exact,
        containsAny: this.granteeModalFields.containsAny,
        containsAll: this.granteeModalFields.containsAll,
        beginsWith: this.granteeModalFields.beginsWith,
        excludes: this.granteeModalFields.excludes,
        };

      var dataGranteeCombined = [];

      if (dataGrantee.exact) dataGranteeCombined.push("\"" + "+" + dataGrantee.exact + "\"");
      if (dataGrantee.containsAny && dataGrantee.containsAny.constructor === Array && dataGrantee.containsAny.length > 0) dataGranteeCombined.push("and (+" + dataGrantee.containsAny.join(", or +") + ")");
      if (dataGrantee.containsAll && dataGrantee.containsAll.constructor === Array && dataGrantee.containsAll.length > 0) dataGranteeCombined.push("and (+" + dataGrantee.containsAll.join(", and +") + ")");
      if (dataGrantee.beginsWith) dataGranteeCombined.push("and ^" + dataGrantee.beginsWith);
      if (dataGrantee.excludes) dataGranteeCombined.push("and -" + dataGrantee.excludes);

      this.grantee = dataGranteeCombined.join(" ");


    },

    onGranteeCancel() {
      this.grantee = "";
      this.granteeModalFields.exact = "";
      this.granteeModalFields.containsAny = [];
      this.granteeModalFields.containsAll = [];
      this.granteeModalFields.beginsWith = "";
      this.granteeModalFields.excludes = "";
    },
  }
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
max-width: 768px;

  .md-field {
    margin-bottom: 48px;
  }
}

.md-field.md-theme-default .md-helper-text, .md-field.md-theme-default .md-count, .md-field.md-theme-default label {
    color: rgba(0, 0, 0, 0.87);
}

</style>

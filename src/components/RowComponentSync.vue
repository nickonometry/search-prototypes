<template>
  <div>
    <div v-for="(line, index) in componentRows" v-bind:key="index">
      <div class="row">
        <div class="md-layout md-gutter md-alignment-center-space-between">
          <div class="md-layout-item">
            <md-field>
              <md-select v-model="line.operatorSelected" name="fields" id="fields" placeholder="Select an operator">
                <md-option value="Starts with ">Starts With</md-option>
                <md-option value="Contains ">Contains</md-option>
                <md-option value="Exact match ">Exact Match</md-option>
                <md-option value="Excludes ">Excludes</md-option>
              </md-select>
            </md-field>
          </div>
  
          <div class="md-layout-item">
            <md-field>
              <label>Search string</label>
              <md-input v-model="line.searchString"></md-input>
            </md-field>
          </div>
  
          <div class="md-layout-item">
            <div class="buttonContainer">
              <md-button v-if="componentRows.length > 1" @click="removeLine(index)" icon="delete">Remove</md-button>
              <md-button class="md-primary" v-if="index + 1 === componentRows.length" v-on:click="addComponentRow(); line.showAndOr = !line.showAndOr; line.andOrValue = 'and'">Add Row</md-button>
            </div>
          </div>
        </div>
      </div>
      <transition name="slide-fade">
        <div class="andOrContainer" v-if="line.showAndOr">
          <div class="seperator">
            <div class="verticalLine"></div>
          </div>
          <div class="andOrBlock">
            <md-field>
              <md-select v-model="line.andOrValue" name="and" id="and">
                <md-option value="and">And</md-option>
                <md-option value="or">Or</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="seperator">
            <div class="verticalLine"></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      componentRows: {
        type: Array
      }
    },
    data() {
      return {
        blockRemoval: true,
        count: 0,
      };
    },
    watch: {
      componentRows() {
        this.blockRemoval = this.componentRows.length <= 1;
      }
    },
    methods: {
      addComponentRow() {
        // let checkEmptyLines = this.componentRows.filter(
        //   line => line.operatorSelected === null
        // );
  
        // //Check if the user has selected an operator to enable the ADD ROW functionality
        // if (checkEmptyLines.length >= 1 && this.componentRows.length > 0) return;
  
        this.componentRows.push({
          operatorSelected: null,
          searchString: null,
          showAndOr: false,
          andOrValue: null
        });
      },
  
      removeLine(lineId) {
        console.log("removing " + lineId);
        if (!this.blockRemoval) {
          if (lineId > 0) {
            this.componentRows[lineId].showAndOr = false;
          }
          this.componentRows.splice(lineId, 1);
        }
      }
    },
    mounted() {
      this.addComponentRow();
    },
  
  };
</script>


<style lang="scss" scoped>
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  
  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.1, 0.1, 1);
  }
  
  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
  
  {
    transform: translateY(-1px);
    opacity: 0;
  }
  
  .dropdown {
    border: 1px solid #fff;
    /* For debugging */
    width: 900px;
  }
  
  .row {
    border: 1px solid #ececec;
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .buttonContainer {
    display: flex;
    justify-content: flex-end;
  }
  
  .md-button {
    margin-top: 16px;
    margin-left: 16px;
  }
  
  .andOrContainer {
    margin-left: 32px;
  }
  
  .andOrBlock {
    width: 150px;
    height: 32px;
    margin-left: 16px;
    background-color: #efefef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px 0px 16px;
    .md-field {
      min-height: 32px;
      margin: 0px;
      padding: 0px;
    }
    .md-field:after {
      display: none;
    }
    .md-field:before {
      display: none;
    }
  }
  
  .seperator {
    height: 16px;
    width: 150px;
    background-color: #ffffff;
    transition: visibility 0s, opacity 0.5s linear;
  }
  
  .verticalLine {
    width: 2px;
    height: 100%;
    background-color: #efefef;
    margin-left: 48px;
  }
</style>
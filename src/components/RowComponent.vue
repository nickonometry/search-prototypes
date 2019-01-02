<template>
<div>

<div class="row">
    <md-card>
<div class="md-layout md-gutter">
      <div class="md-layout-item md-size-20">
        <md-field>
          <md-select v-model="fields" name="fields" id="fields" placeholder="Select a field">
            <md-option value="firstName">First name</md-option>
            <md-option value="lastName">Last name</md-option>
            <md-option value="grantee">Grantee</md-option>
            <md-option value="grantor">Grantor</md-option>
            <md-option value="notes">Notes</md-option>
            <md-option value="receptionNumber">Reception number</md-option>
            <md-option value="book">Book</md-option>
            <md-option value="page">Page</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item md-size-20">
        <md-field>
          <md-select v-model="operator" name="operator" id="operator" placeholder="Select an operator">
            <md-option value="equals">Equals</md-option>
            <md-option value="contains">Contains</md-option>
            <md-option value="doesNotContain">Does not contain</md-option>
            <md-option value="startsWith">Starts with</md-option>
            <md-option value="excludes">Excludes</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item md-size-30">
        <md-field>
      <label>Search string</label>
      <md-input v-model="searchString"></md-input>
    </md-field>
      </div>

    <div class="md-layout-item">
    <div class="buttonContainer">
        <md-button v-if="disabledRemoveButton == false" disabled>Remove Row</md-button>
        <md-button v-if="disabledRemoveButton == true" class="md-primary" v-bind:class="{ disabled: disabledRemoveButton,  }" v-on:click="disabledRemoveButton = !disabledRemoveButton">Remove Row</md-button>
        <md-button v-if="disabledAddButton == false" class="md-primary" v-bind:class="{ disabled: disabledAddButton,  }" v-on:click="$emit('add-row'),disabledAddButton = !disabledAddButton, disabledRemoveButton = !disabledRemoveButton">Add Row</md-button>
        <md-button v-if="disabledAddButton == true" disabled>Add Row</md-button>
    </div>
    </div>

    </div>
    </md-card>
   
   <transition name="slide-fade">
    <div class="andOrContainer" v-if="disabledAddButton">
        <div class="seperator">
            <div class="verticalLine"></div>
        </div>
        <div class="andOrBlock">
            <!-- <div class='label'>And</div>
            <div class='downArrow'>
                <md-icon>arrow_drop_down</md-icon> 
            </div>      -->
            <md-field>
          <md-select v-model="and" name="and" id="and" placeholder="And">
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
    name: 'RowComponent',
    data: () => ({
      searchString: null,
      fields: null,
      operator: null,
      firstName: null,
      lastName: null,
      grantee: null,
      grantor: null,
      notes: null,
      receptionNumber: null,
      book: null,
      page: null,
      equals: null,
      contains: null,
      doesNotContain: null,
      startsWith: null,
      excludes: null,
      rowAdded: false,
      disabledAddButton: false,
      disabledRemoveButton: false,
    }),
  }
</script>


<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-1px);
  opacity: 0;
}

.dropdown {
  border: 1px solid #fff;  /* For debugging */
  width: 900px;
}
.md-card {
  height: 72px;
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
    background-color: #EFEFEF;
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
    background-color: #EFEFEF;
    margin-left: 48px;
}
</style>
<template>
    <div>
        <div v-for="(line, index) in lines" v-bind:key="index" style="margin-left: 24px;">
            <div class="md-layout md-gutter md-alignment-center-center">
                <div class="md-layout-item md-size-25">
                    <md-field>
                        <label for="movie">Select a field</label>
                        <md-select v-model="line.fieldName" name="movie" id="movie">
                            <md-option value="firstname">First Name</md-option>
                            <md-option value="lastname">Last Name</md-option>
                            <md-option value="grantor">Grantor</md-option>
                            <md-option value="grantee">Grantee</md-option>
                            <md-option value="notes">Notes</md-option>
                            <md-option value="receptionnumber">Reception number</md-option>
                            <md-option value="book">Book</md-option>
                            <md-option value="page">Page</md-option>
                        </md-select>
                    </md-field>
                </div>
    
                <div class="md-layout-item md-size-25">
                    <md-field>
                        <label for="movie">Operator</label>
                        <md-select v-model="line.operator" name="movie" id="movie">
                            <md-option value="starts-with">Starts with</md-option>
                            <md-option value="contains">Contains</md-option>
                            <md-option value="exact-match">Exact match</md-option>
                            <md-option value="Excludes">Excludes</md-option>
                        </md-select>
                    </md-field>
                </div>
    
                <div class="md-layout-item md-size-35">
                    <md-field>
                        <label>Search string</label>
                        <md-input v-model="line.searchString"></md-input>
                    </md-field>
                </div>
    
                <div class="md-layout-item">
    
    
    
    
                    <div class='button-container'>
                        <div class='buttons'>
                            <div class='remove'>
                                <md-button @click="removeLine(index)" class="md-icon-button md-raised">
                                    <md-icon>delete</md-icon>
                                    <md-tooltip md-direction="top">Delete row</md-tooltip>
                                </md-button>
                            </div>
                            <div class='add'>
                                <md-button v-if="index + 1 === lines.length" @click="addLine(); toggleAndOr(index)" class="md-icon-button md-raised md-primary">
                                    <md-icon>playlist_add</md-icon>
                                    <md-tooltip md-direction="top">Add new row</md-tooltip>
                                </md-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <transition name="slide-fade">
                <div class="andOrContainer" v-if="line.andOrVisible">
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

        <div class="submitButtonContainer">
        <div><md-button class="md-dense md-primary" disabled>Clear all</md-button></div>
        <div><md-button class="md-dense md-raised md-primary">Search</md-button></div>
    </div>

    </div>
</template>

<script>
    export default {
        name: 'QueryCreator',
        data() {
            return {
                lines: [],
                blockRemoval: true,
            }
        },
        watch: {
            lines() {
                this.blockRemoval = this.lines.length <= 1
            }
        },
        methods: {
            toggleAndOr(arrayIndex) {
                if (this.lines[arrayIndex].fieldName && this.lines[arrayIndex].operator && this.lines[arrayIndex].searchString) {
                    this.lines[arrayIndex].andOrVisible = true;
                }
            },
            addLine() {
                let checkEmptyLine = this.lines.filter(line => line.searchString === null)
                let checkEmptyfieldName = this.lines.filter(line => line.fieldName === null)
                let checkEmptyoperator = this.lines.filter(line => line.operator === null)
    
                if (checkEmptyLine.length >= 1 && this.lines.length > 0) return
                if (checkEmptyfieldName.length >= 1 && this.lines.length > 0) return
                if (checkEmptyoperator.length >= 1 && this.lines.length > 0) return
    
                this.lines.push({
                    fieldName: null,
                    searchString: null,
                    operator: null,
                    andOrVisible: false,
                    andOrValue: 'and',
                })
            },
    
            removeLine(lineId) {    
                if (!this.blockRemoval) this.lines.splice(lineId, 1);
                this.lines[lineId].andOrVisible = false;
            }
        },
        mounted() {
            this.addLine()
        }
    }
</script>

<style lang="scss" scoped>
    @import "~vue-material/dist/theme/engine";
    .button-container {
        display: flex;
        justify-content: space-around;
    }
    
      .submitButtonContainer {
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    width: 1048px;
  }

    .buttons {
        border: 1px solid #fff;
        /* For debugging */
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    
    .md-layout {
        height: 90px;
        border: 1px solid #cdcdcd;
        border-radius: 4px;
    }
    
    .container {
        width: 100%;
    }
    
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

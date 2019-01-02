<template>
    <div>
        <div class="modal-wrapper">
            <div class="search-wrapper">
                <md-field>
                    <label>Filter document types</label>
                    <md-input v-model="search"></md-input>
                </md-field>
            </div>
            <div class="docTypeContainer">
                <md-content class="md-scrollbar">
                    <md-list>
                        <md-list-item v-for="(item) in filteredList" :key="item.name">
                            <md-checkbox v-model="docTypesSelected" :value="item.value" />
                            <span class="md-list-item-text">{{item.value}}</span>
                        </md-list-item>
                    </md-list>
                </md-content>
            </div>
        </div>
    </div>
</template>

<script>
    import documentTypes from "../json/docTypes.json";
    
    export default {
        props: {
            docTypesSelected: {
                type: Array
            }
        },
        data() {
            return {
                docTypes: documentTypes,
                checkbox: false,
                notification: null,
                toggle: [],
                search: '',
            };
        },
        computed: {
            filteredList() {
                return this.docTypes.filter(doc => {
                    return doc.value.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    };
</script>


<style lang="scss" scoped>
    .docTypeContainer {
        height: 302px;
        border: 1px solid #cecece;
    }
    
    .md-content {
        max-height: 300px;
        overflow: auto;
    }
    
    .modal-wrapper {
        min-width: 560px;
        min-height: 350px;
        .md-field {
            max-height: 64px;
        }
    }
</style>
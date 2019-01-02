<template>
<div>

 <md-toolbar md-elevation="0" class="secondaryToolbar" style="z-index:0;">
      <h3 class="md-headline">Home</h3>
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

<div class="pageWrapper">

<h1>Hi</h1>

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
    people: [
{"id":1,"Description":"The original machine had a base plate of pre-famulated amulite surmounted by a malleable logarithmic casing in such a way that the two spurving bearings were in a direct line with the panametric fan. The latter consisted simply of six hydrocoptic marzlevanes, so fitted to the ambifacient lunar waneshaft that side fumbling was effectively prevented. The main winding was of the normal lotus-o-delta type placed in panendermic semi-boloid slots of the stator, every seventh conductor being connected by a non-reversible tremie pipe to the differential girdle spring on the “up” end of the grammeters.","Number":"5494324699","VendorNumber":"31660","Date":"3/10/2018"},
{"id":2,"Description":"Fall into well, initial encounter","Number":"9853278618","VendorNumber":"1376","Date":"5/18/2018"},
{"id":3,"Description":"Hypertrophy of bone, left humerus","Number":"3657251391","VendorNumber":"20517","Date":"3/25/2018"},
{"id":4,"Description":"Poisoning by pyrazolone derivatives, accidental (unintentional)","Number":"2811441042","VendorNumber":"42","Date":"11/27/2017"},
{"id":5,"Description":"Isolated proteinuria with diffuse membranous glomerulonephritis","Number":"2147841366","VendorNumber":"5","Date":"2/17/2018"},
{"id":6,"Description":"Pathological fracture in neoplastic disease, unspecified femur, subsequent encounter for fracture with routine healing","Number":"8043007950","VendorNumber":"2","Date":"9/26/2018"},
{"id":7,"Description":"Relapsing panniculitis [Weber-Christian]","Number":"4114669221","VendorNumber":"1528","Date":"8/7/2018"},
{"id":8,"Description":"Hydroxyapatite deposition disease","Number":"8967228449","VendorNumber":"8","Date":"12/29/2017"},
{"id":9,"Description":"Displaced osteochondral fracture of left patella, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing","Number":"5142034880","VendorNumber":"36","Date":"1/10/2018"},
{"id":10,"Description":"Corrosion of third degree of multiple sites of unspecified lower limb, except ankle and foot, subsequent encounter","Number":"4777286800","VendorNumber":"5849","Date":"4/8/2018"}],

  }),
  computed: {
    filteredList() {
      return this.people.filter(person => {
        return person.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
};



</script>

<style lang="scss" scoped>
@import "~vue-material/src/theme/engine";

.pageWrapper {
  padding: 24px;
}
.secondaryToolbar {
  border-bottom: 1px solid #dfe0df;
  background-color: #fff;
}

.flex-container {
  background-color: #fff;  /* Blue */
  display: flex;
  justify-content: space-between;
  max-width: 1264px;
  padding: 12px 16px 16px 16px;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 16px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.topRow {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  width: 100%;
}

.doctype-flex-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 2;
  flex-wrap: nowrap;
  overflow: hidden;
  white-space: nowrap;
  max-width: 436px;
}

.doctype {
  margin-left: 16px;
}

.chips-flex-container {
  display: flex;
  justify-content: flex-end;
  flex: 2;
  flex-wrap: nowrap;
  margin: 0px 16px 0px 16px;
}

.actions-container {
  display: flex;
  justify-content: space-between;
  min-width: 104px;
  align-items: center;
  flex: 0;
  flex-wrap: wrap;
}

.chip {
  margin-right: 16px;
}

.doctype-flex-item {
  display: flex;
  justify-content: space-around;
}


.flexItem {
  height: 32px;
  width: 32px;
}

.avatar {
  height: 40px;
  width: 40px;
}

.contentRow{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 16px;
  margin-left: 56px;
}

.metaDataColumn {
  margin-right:8px;
  margin-left: 8px;
  max-width: 280px;
  flex: 4;
}

.metaDataColumn:first-child {
  margin-left: 0px;
}

.metaDataColumn:last-child {
  margin-right:0px;
}

.md-chip {
  height: 20px;
  font-size: 11px;
  font-weight: 500;
  line-height: 20px;
}

.value {
  font-size: 14px;
  color: rgba(0,0,0,0.87);
  text-overflow: ellipsis;
  white-space:nowrap;
  overflow:hidden;
}

.label {
  font-size: 13px;
  color: rgba(0,0,0,0.54)
}

</style>



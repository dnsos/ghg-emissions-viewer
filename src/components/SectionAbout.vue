<template>
  <article class="grid--12-columns chapter chapter--about">
    <section class="footer--metadata">
      <h3>Dataset</h3>
      <p>Pollutants: Greenhouse gases (CO<sub>2</sub>, N2O in CO<sub>2</sub> equivalent, CH4 in CO<sub>2</sub> equivalent, HFC in CO<sub>2</sub> equivalent, PFC in CO<sub>2</sub> equivalent, SF6 in CO<sub>2</sub> equivalent, NF3 in CO<sub>2</sub> equivalent).</p>
      <p>Sector: All sectors and indirect CO<sub>2</sub> (excluding LULUCF and memo items, including international aviation).</p>
      <p>Data source: <a href="http://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-089165_QID_27EC5B7B_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;AIRPOL,L,Z,1;AIREMSECT,L,Z,2;INDICATORS,C,Z,3;&zSelection=DS-089165AIRPOL,GHG;DS-089165AIREMSECT,TOTX4_MEMONIA;DS-089165INDICATORS,OBS_FLAG;DS-089165UNIT,THS_T;&rankName1=UNIT_1_2_-1_2&rankName2=AIRPOL_1_2_-1_2&rankName3=AIREMSECT_1_2_-1_2&rankName4=INDICATORS_1_2_-1_2&rankName5=TIME_1_0_0_0&rankName6=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23">eurostat</a></p>
      <h3>Licensing</h3>
      <p>Source code</p>
      <p>License for graphics: CC-BY-SA</p>
    </section>
    <section class="footer--credits">
        <p>Created by <a href="https://dnsos.info" target="_blank">Dennis Ostendorf</a></p>
    </section>
    <section class="footer--update">
        <p>Last updated in April 2019</p>
    </section>
  </article>
</template>

<script>
export default {
  name: 'SectionAbout',
  props: [],
  data: function () {
    return {

    }
  }
}
</script>

<style scoped>
.footer--metadata {
    grid-column: span 7;
    font-size: var(--font-size-small);
    border-top: .1rem solid white;
}

.footer--credits {
    grid-column: span 6;
}

.footer--update {
    grid-column: span 6;
    text-align: right;
}
</style>

<template>
  <article class="grid--12-columns chapter chapter--about">
    <section class="chapter__block about__wrapper">
      <p>This project is a work of personal interest, with a non-commercial purpose and without links to any organisation. The data used originates from the <a href="http://appsso.eurostat.ec.europa.eu/nui/show.do?query=BOOKMARK_DS-089165_QID_27EC5B7B_UID_-3F171EB0&layout=TIME,C,X,0;GEO,L,Y,0;UNIT,L,Z,0;AIRPOL,L,Z,1;AIREMSECT,L,Z,2;INDICATORS,C,Z,3;&zSelection=DS-089165AIRPOL,GHG;DS-089165AIREMSECT,TOTX4_MEMONIA;DS-089165INDICATORS,OBS_FLAG;DS-089165UNIT,THS_T;&rankName1=UNIT_1_2_-1_2&rankName2=AIRPOL_1_2_-1_2&rankName3=AIREMSECT_1_2_-1_2&rankName4=INDICATORS_1_2_-1_2&rankName5=TIME_1_0_0_0&rankName6=GEO_1_2_0_1&sortC=ASC_-1_FIRST&rStp=&cStp=&rDCh=&cDCh=&rDM=true&cDM=true&footnes=false&empty=false&wai=false&time_mode=NONE&time_most_recent=false&lang=EN&cfo=%23%23%23%2C%23%23%23.%23%23%23" target="_blank">eurostat</a> database. The license for re-using parts of this project is <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">CC BY-NC-SA</a>. Source code available on <a href="https://github.com/dnsos/ghg-emissions-viewer">GitHub</a>.</p>
      <p>Created by <a href="https://dnsos.info" target="_blank">Dennis Ostendorf</a></p>
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
.chapter--about {
  text-align: center;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-small);
  color: white;
}

.about__wrapper {
  padding-top: calc(var(--grid-spacing) * 4);
}
</style>

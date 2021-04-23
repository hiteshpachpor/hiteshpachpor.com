<template>
  <div class="footer">
    <p>Hitesh Pachpor</p>
    <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
  </div>
</template>

<style lang="less">
.footer {
  color: #FFF;
  background-color: #111;
  margin-top: 2em;
  padding: 1em;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

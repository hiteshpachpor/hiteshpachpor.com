<template>
  <div class="default">
    <header>
      <slot name="header">
        <Header :portfolio="portfolio"/>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer">
        <Footer :portfolio="portfolio"/>
      </slot>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.default {
  height: 100vh;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/page/Header.vue";
import Footer from "@/components/page/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class DefaultLayout extends Vue {
  @Prop() portfolio!: any;
}
</script>

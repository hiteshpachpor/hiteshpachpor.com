<template>
  <div class="home">
    <DefaultLayout :portfolio="portfolio">
      <div class="content">
        <Jobs :jobs="portfolio.jobs" />
      </div>
    </DefaultLayout>
  </div>
</template>

<style lang="less" scoped>
.content {
  margin: 0 auto;
  padding: 1em;
  max-width: 40rem;
}
</style>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import DefaultLayout from "@/layouts/Default.vue";
import Jobs from "@/components/Jobs.vue";
import portfolio from '@/data/Portfolio';
import { Portfolio } from '@/types/Portfolio';

@Component({
  components: {
    DefaultLayout,
    Jobs,
  },
})
export default class Home extends Vue {
  portfolio: Portfolio = portfolio;
}
</script>

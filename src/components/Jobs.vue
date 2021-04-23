<template>
  <div class="jobs" :style="style">
    <h2>Work Experience</h2>

    <div v-for="job in jobs" :key="job">
      <Job :job="job" />
    </div>
  </div>
</template>

<style lang="less" scoped>
h2 {
  margin: 0.5rem 0 1rem 0;
}

.jobs {
  > div {
    & + div {
      border-top: 1px solid var(--light-text-color);
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Job from "@/components/Job.vue";

@Component({
  components: {
    Job,
  }
})
export default class Header extends Vue {
  @Prop() jobs!: any;
}
</script>

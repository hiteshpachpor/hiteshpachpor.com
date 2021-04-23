<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Paragraph from the Home component.
    </p>
    <hr>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() private msg!: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>

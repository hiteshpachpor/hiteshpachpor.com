<template>
  <div class="tag">
    {{ tag }}
  </div>
</template>

<style lang="less" scoped>
.tag {
  font-size: 0.85rem;
  font-weight: 700;
  border-radius: 1em;
  color: var(--white);
  background-color: var(--light-text-color);
  padding: 0.15em 0.85em 0.3em;
  margin: 0 0.5em 0 0;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag extends Vue {
  @Prop() tag!: any;
}
</script>

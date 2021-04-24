<template>
  <div class="tags">
    <Tag v-for="tag in tags" :tag="tag" :key="tag" />
  </div>
</template>

<style lang="less" scoped>
.tags {
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 0 0 1rem;
  overflow-x: scroll;
  white-space: nowrap;

  .tag:first-child {
    margin-left: 1em;
  }

  .tag:last-child {
    margin-right: 1em;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Tag from "@/components/Tag.vue";

@Component({
    components: {
        Tag,
    },
})
export default class TagList extends Vue {
  @Prop() tags!: any;
}
</script>

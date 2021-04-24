<template>
  <div class="tags">
    <Tag v-for="tag in tags" :tag="tag" :key="tag" />
  </div>
</template>

<style lang="less" scoped>
.tags {
  display: flex;
  flex-basis: row;
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

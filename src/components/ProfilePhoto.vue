<template>
  <div class="profile-photo" :style="style">
    <!--  -->
  </div>
</template>

<style lang="less">
.profile-photo {
  height: calc(100vw * 0.6 - 0.7em);
  width: 60%;
  max-height: 12em;
  max-width: 12em;
  border-radius: 50%;
  overflow: hidden;
  border: 0.35em solid var(--white);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25)
    , inset 0px 0px 12px rgba(0, 0, 0, 0.25);
  background-size: cover;

  img {
    display: block;
    width: 100%;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() src!: any;

  get style() {
    return `background-image: url(${require(`@/assets/${this.src}`)});`;
  }
}
</script>

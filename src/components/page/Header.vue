<template>
  <div class="header">
    <div class="image">
      <ProfilePhoto :src="portfolio.me.photo" />
    </div>
    <div class="text">
      <h1>{{ portfolio.me.name }}</h1>
      <p>{{ portfolio.me.about }}</p>
    </div>
  </div>
</template>

<style lang="less">
.header {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue-background);
  color: var(--grey-background)
}

.image {
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text {
  margin-bottom: 1em;
  text-align: center;
  max-width: 40em;
}

h1 {
  padding: 1rem;
  font-weight: 700;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProfilePhoto from "@/components/ProfilePhoto.vue";

@Component({
  components: {
    ProfilePhoto,
  },
})
export default class Header extends Vue {
  @Prop() portfolio!: any;
}
</script>

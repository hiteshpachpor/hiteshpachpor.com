<template>
  <div class="header">
    <div class="image">
      <ProfilePhoto :src="portfolio.me.photo" />
    </div>

    <div class="text">
      <h1>{{ portfolio.me.name }}</h1>
      <p>{{ portfolio.me.about }}</p>

      <div class="location">
        <font-awesome-icon icon="map-marked" />
        {{ portfolio.me.location }}
      </div>
    </div>

    <div class="contact">
      <a :href="portfolio.me.social.email" target="_blank">
        <font-awesome-icon icon="envelope" />
      </a>

      <a :href="portfolio.me.social.linkedin" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <a :href="portfolio.me.social.github" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>

      <a :href="portfolio.me.social.medium" target="_blank">
        <font-awesome-icon :icon="['fab', 'medium']" />
      </a>

      <a :href="portfolio.me.social.stackExchange" target="_blank">
        <font-awesome-icon :icon="['fab', 'stack-exchange']" />
      </a>
    </div>

    <div class="links">
      <router-link class="link" to="/">Resume</router-link>
      <router-link class="link" to="/">Side Projects</router-link>
      <router-link class="link" to="/">Hobbies</router-link>
      <router-link class="link" to="/">Posts</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
h1 {
  padding: 1rem;
  font-weight: 700;
}

.header {
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue-background);
  color: var(--white);
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

.location {
  margin: 2rem 0 1rem;
  color: rgba(255, 255, 255, 0.6);

  > * {
    margin-right: 0.25rem;
  }
}

.contact {
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.4);

  > a:hover {
    color: rgba(255, 255, 255, 1);
  }

  > * {
    font-size: 2rem;

    + * {
      margin-left: 1.5rem;
    }
  }
}

.links {
  margin: 2rem 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  .link {
    text-align: center;

    + .link {
      margin-left: 2em;
    }
  }
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

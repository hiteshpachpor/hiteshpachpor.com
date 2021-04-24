<template>
  <div class="job">
    <div class="position">
      <h3>{{ job.position }}</h3>
    </div>

    <div class="period">
      {{ fromDate }} - {{ toDate }} ({{ duration }})
    </div>

    <div class="company">
      <div class="logo-and-name">
        <div class="logo">
          <img :src="require(`@/assets/${job.company.logo}`)" :alt="job.company.name">
        </div>

        <div class="name">
          <h4>
            {{ job.company.name }}

            <a class="link" :href="job.company.website" target="_blank">
              <font-awesome-icon icon="external-link-alt" />
            </a>
          </h4>

          <div class="location">
            {{ job.company.location }}
          </div>
        </div>
      </div>

      <div class="about">
        <span class="quote-icon">
          <font-awesome-icon icon="quote-left" />
        </span>

        {{ job.company.about }}
      </div>
    </div>

    <div class="key-results">
      <h4>Key Results</h4>

      <ul>
        <li v-for="keyResult in job.keyResults" :key="keyResult">
          {{ keyResult }}
        </li>
      </ul>
    </div>

    <div class="tag-list">
      <TagList :tags="job.tags" />
    </div>
  </div>
</template>

<style lang="less" scoped>
ul {
  margin: 0.5em 0 1em;
  padding-left: 1em;

  li {
    margin: 0.25em 0;
  }
}

.job {
  margin-top: 1rem;
}

.company {
  margin-top: 1rem;

  .logo-and-name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .logo {
    width: 50px;

    img {
      display: block;
      width: 100%;
    }
  }

  .name {
    margin-left: 0.5em;

    .link {
      margin-left: 0.25rem;
      font-size: 0.75em;
      color: var(--light-text-color);
    }
  }

  .location {
    font-size: 0.85rem;
    color: var(--light-text-color);
  }

  .about {
    margin: 1rem 0;
    color: var(--light-text-color);

    .quote-icon {
      font-size: 0.5em;
      vertical-align: text-top;
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TagList from "@/components/TagList.vue";
import moment from 'moment';

@Component({
  components: {
    TagList,
  },
})
export default class Header extends Vue {
  @Prop() job!: any;

  get fromDate() {
    return moment(this.job.period.from).format("MMM YYYY");
  }

  get toDate() {
    if (this.job.current) {
      return 'Current';
    }

    return moment(this.job.period.to).format("MMM YYYY");
  }

  get duration() {
    let from = this.job.period.from;
    let to = this.job.period.to;

    if (!to) {
      to = moment.now();
    }

    const years = moment.duration(moment(to).diff(moment(from))).years();
    const months = moment.duration(moment(to).diff(moment(from))).months();

    let duration = [];

    if (years == 1) {
      duration.push(`${years} year`);
    } else if (years > 0) {
      duration.push(`${years} years`);
    }

    if (months == 1) {
      duration.push(`${months} month`);
    } else if (months > 0) {
      duration.push(`${months} months`);
    }

    return duration.join(' ');
  }
}
</script>

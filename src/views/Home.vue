<template>
  <div class="home">
    <DefaultLayout :portfolio="portfolio">
      <div class="content">
        <Jobs :jobs="portfolio.jobs" />
      </div>
    </DefaultLayout>
  </div>
</template>

<style lang="less">
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

const portfolio = {
  me: {
    name: "Hitesh Pachpor",
    about: "Seasoned engineering manager with over 9 years of work experience in the eCommerce domain. I've led engineering teams of 12+ people at multiple organisations.",
    photo: "dp.jpeg",
    location: "Dubai, UAE",
    contact: {
      email: "hiteshspac@gmail.com",
    },
    social: {
      github: "",
      linkedin: "",
    },
  },
  jobs: [
    {
      company: {
        name: "Hello Chef",
        about: "Fresh ingredients, great recipes delivered weekly to your home.",
        location: "Dubai, UAE",
        website: "https://hellochef.me",
        logo: "companies/hello-chef.jpeg",
      },
      period: {
        from: new Date(2020, 9),
        to: null,
      },
      current: true,
      position: "Engineering Manager",
      keyResults: [
        "Improved API test coverage from 0% to 45%",
        "Redesigned and reimplemented the ERP functionality",
        "Grew the team from 4 to 8",
      ],
    },
    {
      company: {
        name: "Paytm Insider",
        about: "Paytm Insider is a platform that helps you discover and buy the best in sports, music, comedy, travel, food & lots more in your city.",
        location: "Mumbai, India",
        website: "https://insider.in",
        logo: "companies/paytm-insider.png",
      },
      period: {
        from: new Date(2020, 9),
        to: new Date(2019, 7),
      },
      current: false,
      position: "Engineering Manager",
      keyResults: [
        "Managed engineering work on consumer facing applications in Paytm Insider's Events vertical using AWS, Microservices, Node.js, Javascript, MongoDB, React.",
        "Delivered the monument ticket sales feature on insider.in.",
        "Helped deliver a seamless event ticket purchase flow on Paytm app's Events section.",
        "Managed technology for offline box-offices at several high profile events. Streamlined and scaled technical support processes.",
      ],
    },
    {
      company: {
        name: "USTRAA",
        about: "Ustraa is a range of grooming products for men. Helping our Bros look their best since 2015.",
        location: "New Delhi, India",
        website: "https://ustraa.com",
        logo: "companies/ustraa.png",
      },
      period: {
        from: new Date(2019, 7),
        to: new Date(2015, 7),
      },
      current: false,
      position: "Software Development Manager",
      keyResults: [
        "Managed the entire engineering team comprising of Web, iOS, Android developers and test engineers to build & manage the eCommerce platform for the product.",
        "Built brand new ustraa.com website & mobile apps to handle 3X more traffic in the same infra budget using AWS, Magento, Laravel, PHP, MySQL, Less.js.",
        "Built an in-house marketing automation tool inspired from Mixpanel & CleverTap using the MEAN stack.",
        "Built an in-house RTO management tool to reduce order returns & customer grievances using Python & MEAN stack.",
        "Implemented SCRUM for engineering and product teams.",
      ],
    },
    {
      company: {
        name: "Iksula Services Pvt Ltd",
        about: "Iksula helps brands build and manage their eCommerce experiences.",
        location: "Mumbai, India",
        website: "https://iksula.com",
        logo: "companies/iksula.png",
      },
      period: {
        from: new Date(2013, 1),
        to: new Date(2015, 6),
      },
      current: false,
      position: "Team Lead",
      keyResults: [
        "Worked with clients from India, USA, Canada to build their eCommerce platforms using the Magento framework.",
        "Set up standard practices in VCS, coding standards, client requirement management for the entire department.",
        "Helped happilyunmarried.com scale 20x on their website using Magento, PHP, MySQL, HTML, CSS.",
        "Built a platform for SonicSense Pro Audio to help customers compare audio equipments and musical instruments using Laravel, MySQL, Angular.js, HTML, Less.js",
      ],
    },
  ],
};

@Component({
  components: {
    DefaultLayout,
    Jobs,
  },
})
export default class Home extends Vue {
  portfolio: any = portfolio;
}
</script>

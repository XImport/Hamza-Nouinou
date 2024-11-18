<template>
  <div class="bg-lines">
    <AppBar />

    <HeaderCompo />

    <SilderCompo />
    <!-- <h1>hello world</h1> -->
    <div>
      <BannerCompo />
    </div>
    <div class="bg-background">
      <StatisticsCompo />
    </div>
    <div class="bg-background">
      <div>
        <h1
          class="text-center manrope-font typing-effect text-center"
          style="font-size: 54px; font-weight: 800; text-transform: capitalize"
        >
          Why Choose
          <span style="color: yellow"> Me </span>
        </h1>
        <v-container
          class="mx-auto d-flex"
          style="min-height: 50vh; max-width: 70%"
        >
          <v-card
            v-for="(card, index) in Cards"
            :key="index"
            style="
              max-width: 400px;
              max-height: 350px;
              background-color: #232323;
            "
            class="rounded-xl pa-12 mx-auto justify-center align-center"
          >
            <v-img :src="card.Img" height="120" width="120" class="mx-auto" />
            <h2 class="text-center py-1">{{ card.title }}</h2>
            <p class="text-center py-4">
              {{ card.description }}
            </p>
          </v-card>
        </v-container>
        <h1
          class="text-center manrope-font typing-effect text-center"
          style="font-size: 54px; font-weight: 800; text-transform: capitalize"
        >
          Frequently Asked
          <span style="color: yellow"> Questions </span>
        </h1>
        <v-container class="bg-background" style="max-width: 70%">
          <v-row no-gutters>
            <v-col
              v-for="(question, index) in Top10AskedQuestions"
              :key="index"
              cols="12"
              sm="6"
              class="pa-2"
            >
              <v-expansion-panels>
                <v-expansion-panel>
                  <!-- Panel Title -->
                  <v-expansion-panel-title expand-icon="mdi-plus">
                    {{ question.Q }}
                  </v-expansion-panel-title>

                  <!-- Panel Content -->
                  <v-expansion-panel-text>
                    {{ question.A }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <h3
            class="text-center manrope-font text-center py-4"
            style="
              font-style: normal;
              font-weight: 800;
              font-size: 18px;
              line-height: 25px;
            "
          >
            Still have question?
          </h3>
          <p
            class="text-center manrope-font text-center py-2"
            style="color: rgba(255, 255, 255, 0.53)"
          >
            Can't find what you're looking for ? Please chat to my friendly
            <span style="color: yellow"> Discord Server </span>
          </p>
        </v-container>
        <div style="padding-top: 1.5% !important" />
        <v-container
          class="pa-6 bg-black rounded-xl"
          style="max-width: 70%; max-height: 40vh"
        >
          <v-row class="fill-height align-center justify-center">
            <v-col cols="12" md="6" class="pa-8" style="margin-top: -20%">
              <div class="text-h4 font-weight-bold text-white mb-2">
                Transform Your Business into the Future
                <span class="d-block">
                  In the
                  <span class="text-lime-accent-3">Real World</span>
                </span>
              </div>

              <v-sheet
                class="pa-2 mb-6 rounded text-caption bg-black"
                width="fit-content"
              >
                Get Started with the Easiest and Most Secure Platform
              </v-sheet>

              <v-btn
                class="text-capitalize bg-lime-accent-3 ml-2 rounded-xl pl-6 pr-6"
                size="large"
              >
                Get Started
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>

            <v-col
              cols="12"
              md="6"
              class="pa-8 position-relative"
              style="margin-top: -5%"
            >
              <v-img
                src="https://themesflat.co/html/open9/assets/images/box-icon/iphone.png"
                class="phone-image"
                contain
                height="600"
              />

              <!-- Floating coin decorations -->
              <v-img
                src="../assets/Icons/bitcoin.png"
                class="floating-coin-1"
                width="60"
                height="60"
              />
              <v-img
                src="../assets/Icons/nft.png"
                class="floating-coin-2"
                width="60"
                height="60"
              />
              <v-img
                src="../assets/Icons/reactjs.png"
                class="floating-coin-3"
                width="60"
                height="60"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div style="height: 15vh; background-color: #161616"></div>
    <div>
      <FooterCompo />
    </div>
  </div>
</template>

<script>
import AppBar from "@/components/GlobalComponents/AppBar.vue";
import HeaderCompo from "../components/HomeUI/HeaderCompo.vue";
import SilderCompo from "../components/HomeUI/SildersCompo.vue";
import ServicesCompo from "@/components/HomeUI/ServicesCompo.vue";
import BannerCompo from "@/components/HomeUI/BannerCompo.vue";
import StatisticsCompo from "@/components/HomeUI/StatisticsCompo.vue";
import FooterCompo from "@/components/GlobalComponents/FooterCompo.vue";
export default {
  components: {
    AppBar,
    HeaderCompo,
    SilderCompo,
    ServicesCompo,
    BannerCompo,
    StatisticsCompo,
    FooterCompo,
  },
  data() {
    return {
      Cards: [
        {
          Img: "https://themesflat.co/html/open9/assets/images/item-background/about-01.png",
          title: "Flexible payment",
          description:
            "I provide flexible payment options, allowing customers to choose the method that suits them best, including installments and digital wallets.",
        },
        {
          Img: "https://i.ibb.co/0ykSprj/time.png",
          title: "No delay in delivering ",
          description:
            "I offer flexible payment options with no delay in project delivery, ensuring timely completion,while accommodating various payment methods.",
        },
        {
          Img: "https://i.ibb.co/VB2x1kr/happy.png",
          title: "Happy Client",
          description:
            "My flexible payment options and timely project delivery ensure a smooth experience, leaving clients happy and satisfied with the results",
        },
      ],
      Top10AskedQuestions: [
        {
          Q: "What services do you offer?",
          A: "I offer a range of web development services, including custom website design, front-end and back-end development, e-commerce solutions, mobile app development, and API integration.",
        },
        {
          Q: "How long does it take to complete a website project?",
          A: "The timeline depends on the complexity and scope of the project. I work closely with clients to set realistic deadlines and ensure timely delivery.",
        },
        {
          Q: "What technologies do you use for web development?",
          A: "I work with technologies such as React, Vue.js, Angular, Node.js, Laravel, and WordPress, based on the project requirements and client needs.",
        },
        {
          Q: "How much does a website cost?",
          A: "The cost varies depending on the features, functionality, and design of the website. I provide customized quotes after discussing the project’s scope and goals.",
        },
        {
          Q: "Can you help with SEO and digital marketing?",
          A: "Yes, I offer SEO optimization and digital marketing services to help websites rank higher on search engines and drive more traffic.",
        },
        {
          Q: "Do you provide ongoing website maintenance?",
          A: "Yes, I offer website maintenance services to keep your site up-to-date, secure, and performing at its best.",
        },
        {
          Q: "Will my website be mobile-friendly?",
          A: "Absolutely! I design and develop responsive websites that function seamlessly across all devices, including smartphones and tablets.",
        },
        {
          Q: "Can you integrate third-party tools or APIs into my website?",
          A: "Yes, I can integrate various third-party tools, payment gateways, CRM systems, and APIs to enhance the functionality of your website.",
        },
        {
          Q: "What happens if I need changes after the project is completed?",
          A: "I offer post-launch support and am happy to assist with any changes or updates needed after the website goes live.",
        },
        {
          Q: "How do you ensure the security of my website?",
          A: "I implement best practices for website security, such as SSL certificates, regular updates, and secure hosting, to protect your site from vulnerabilities.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
}

.v-expansion-panel-title {
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 25px;
}

.v-expansion-panel-text {
  font-style: normal;
  font-weight: 400;
  color: rgb(145, 145, 145);
  font-size: 14px;
  line-height: 22px;
}

.phone-image {
  transform: rotate(-5deg);
}

.floating-coin-1 {
  position: absolute;
  top: 10%;
  right: 20%;
  animation: float 3s ease-in-out infinite;
}

.floating-coin-2 {
  position: absolute;
  top: 30%;
  right: 10%;
  animation: float 4s ease-in-out infinite;
}

.floating-coin-3 {
  position: absolute;
  top: 50%;
  right: 25%;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>

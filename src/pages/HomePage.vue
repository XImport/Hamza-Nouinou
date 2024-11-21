<template>
  <div class="bg-lines">
    <AppBar />

    <HeaderCompo />

    <SilderCompo />
    <!-- <h1>hello world</h1> -->
    <div class="bg-lines">
      <BannerCompo />
    </div>
    <div class="bg-background">
      <StatisticsCompo />
    </div>
    <div class="bg-background">
      <div>
        <!-- Title -->
        <h1 class="text-center manrope-fontt typing-effect" style="">
          Why Choose <span style="color: yellow"> Me </span>
        </h1>

        <!-- Cards Section -->
        <v-container
          class="mx-auto d-flex cards-container justify-center align-center"
          style="min-height: 50vh"
        >
          <v-row class="d-flex" style="gap: 16px; margin: 0">
            <v-col
              v-for="(card, index) in Cards"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="3"
              :class="{
                'justify-center': smAndDown && index === 2,
              }"
            >
              <v-card
                class="rounded-xl pa-12 justify-center align-center card"
                style="background-color: #232323; margin: 0"
              >
                <v-img
                  :src="card.Img"
                  height="120"
                  width="120"
                  class="mx-auto"
                />
                <h2 class="text-center py-1">{{ card.title }}</h2>
                <p class="text-center py-4">{{ card.description }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <!-- FAQ Section -->
        <h1
          class="text-center manrope-font typing-effect"
          style="font-size: 54px; font-weight: 800; text-transform: capitalize"
        >
          Frequently Asked <span style="color: yellow"> Questions </span>
        </h1>
        <v-container class="bg-background faq-container">
          <v-row>
            <v-col
              v-for="(question, index) in Top10AskedQuestions"
              :key="index"
              cols="12"
              sm="6"
              class="pa-2"
            >
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-title expand-icon="mdi-plus">
                    {{ question.Q }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    {{ question.A }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <h3
            class="text-center manrope-font py-4"
            style="font-weight: 800; font-size: 18px; line-height: 25px"
          >
            Still have questions?
          </h3>
          <p
            class="text-center manrope-font py-2"
            style="color: rgba(255, 255, 255, 0.53)"
          >
            Can't find what you're looking for? Please chat with my friendly
            <span style="color: yellow"> Discord Server </span>
          </p>
        </v-container>

        <!-- Call-to-Action Section -->
        <v-container
          class="pa-6 bg-black rounded-xl cta-container d-none d-sm-flex"
          style="max-width: 80%"
        >
          <v-row class="fill-height align-center justify-center">
            <v-col cols="12" md="6" class="pa-8 cta-text">
              <div class="text-h3 font-weight-bold text-white mb-2">
                Transform Your Business into the Future
                <span class="d-block">
                  In the <span class="text-lime-accent-3">Real World</span>
                </span>
              </div>
              <div
                class="text-h6 pa-2 mb-6 rounded bg-black text-center mx-auto"
                width="fit-content"
              >
                Get Started with the Easiest and Most Secure Platform
              </div>
              <v-container class="container-btn">
                <v-btn
                  class="text-capitalize bg-lime-accent-3 ml-2 rounded-sm pl-6 pr-6"
                  size="large"
                  block
                >
                  Get Started
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <div
      style="height: 5vh; background-color: #161616"
      class="d-none d-sm-flex"
    ></div>
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
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png") !important;
  background-position: center !important;
  background-repeat: repeat !important;
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

.container-btn {
  max-width: 50%;
}

/* .phone-image {
  transform: rotate(-5deg);
} */

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

/* Cards Section */
.cards-container {
  max-width: 100%;
  gap: 0px !important;
  margin-left: 10% !important;
  /* margin: auto !important; */
}

.card {
  max-width: 100%;
  margin-bottom: 1rem;
}

/* FAQ Section */
.faq-container {
  max-width: 90%;
}

/* CTA Section */
.cta-container {
  max-width: 90%;
}

.cta-text {
  margin-top: 1rem;
  text-align: center;
}

.cta-image {
  margin-top: 2rem;
  text-align: center;
}

.phone-image {
  position: absolute !important;
  top: 500px !important;
  left: 50px !important;
  height: 500px !important;
  widows: 500px !important;
}

.floating-coin-1,
.floating-coin-2,
.floating-coin-3 {
  display: none;
}

/* Responsive Adjustments */
@media (max-width: 900px) {
  .cta-text {
    font-size: 1.2rem;
    margin-top: 0;
  }

  .cta-image {
    margin-top: 1rem;
    height: 50% !important;
    background-color: aqua !important;
  }

  .cards-container {
    max-width: 100%;
    gap: 0px !important;
    margin-left: 0% !important;
    /* margin: auto !important; */
  }
  .container-btn {
    max-width: 100%;
  }
}

@media (max-width: 834px) {
  .cards-container {
    max-width: 100%;
    gap: 0 !important;
    /* background-color: red !important; */
    margin-left: 0 !important;
  }

  .v-col-sm-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* min-width:801px */

.manrope-fontt {
  font-size: 54px;
  font-weight: 800;
  text-transform: capitalize;
}
</style>

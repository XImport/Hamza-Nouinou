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

      <div :class="`bg-banner ${ThemeMode}`">
        <!-- Title -->
        <div data-aos="fade-in">
          <h1 class="text-center manrope-fontt typing-effect" style="">
            Why Choose <span class="text-primary"> Me </span>
          </h1>
        </div>

        <!-- Cards Section -->
        <div
          class="mx-auto d-flex cards-container justify-center align-center"
          style="min-height: 50vh"
          data-aos="fade-up"
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
                class="rounded-xl pa-2 justify-center align-center card"
                style="margin: 0"
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
        </div>
      </div>
      <!-- FAQ Section -->
      <div :class="`${ThemeMode}`">
        <div data-aos="fade-in">
          <h1
            class="text-center manrope-font typing-effect"
            style="
              font-size: 54px;
              font-weight: 800;
              text-transform: capitalize;
            "
          >
            Frequently Asked <span class="text-primary"> Questions </span>
          </h1>
        </div>

        <v-container class="bg-background faq-container" data-aos="fade-up">
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
          <p class="text-center manrope-font py-2" style="">
            Can't find what you're looking for? Please chat with my friendly
            <span class="text-primary"> Discord Server </span>
          </p>
        </v-container>
      </div>

      <!-- Call-to-Action Section -->
      <v-container
        class=""
        :class="`pa-6 rounded-xl cta-container d-none d-sm-flex bg-DominateColor`"
        style="max-width: 80%"
      >
        <v-row class="fill-height align-center justify-center">
          <v-col cols="12" md="6" class="pa-8 cta-text">
            <div class="text-h3 font-weight-bold mb-2">
              Transform Your Business into the Future
              <span class="d-block">
                In the <span class="text-primary">Real World</span>
              </span>
            </div>
            <div
              class="text-h6 pa-2 mb-6 rounded text-center mx-auto"
              width="fit-content"
            >
              Get Started with the Easiest and Most Secure Platform
            </div>
            <v-container class="container-btn">
              <v-btn
                class="text-capitalize bg-primary ml-2 rounded-sm pl-6 pr-6"
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

    <div style="height: 5vh" class="d-none d-sm-flex bg-container"></div>
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
  computed: {
    ThemeMode() {
      // Return a class name based on the current theme
      return this.$vuetify.theme.global.name === "CustomLightTheme"
        ? "bg-lines-light-bg"
        : "bg-lines-dark";
    },
    SecondThemeMode() {
      // Return a class name based on the current theme
      return this.$vuetify.theme.global.name === "CustomLightTheme"
        ? "bg-lines-light-Banner"
        : "bg-lines-dark";
    },
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
            "My flexible payment options, transparent communication, and commitment to timely project delivery ensure a smooth and stress-free experience, leaving clients happy .",
        },
      ],
      Top10AskedQuestions: [
        {
          Q: "What industries or business types do you specialize in working with?",
          A: "I work with a wide range of industries, including startups, small businesses, and large enterprises. My focus is on creating tailored solutions that fit the unique needs of each client, regardless of their industry.",
        },
        {
          Q: "How do you ensure project timelines are met?",
          A: "I rely on a structured development process that includes clear milestones, regular updates, and open communication. This approach allows me to stay on track and adapt quickly if changes are needed.",
        },
        {
          Q: "What technologies do you use for web development?",
          A: "I work with technologies such as React, Vue.js, Angular, Node.js, Laravel, and WordPress, based on the project requirements and client needs.",
        },
        {
          Q: "Can you provide maintenance and support after project completion",
          A: "Yes, I offer ongoing maintenance and support to ensure that your application or system runs smoothly. This includes updates, bug fixes, and feature enhancements as needed.",
        },
        {
          Q: "What technologies do you use for web development projects?",
          A: "I use a variety of modern tools and frameworks, such as Vue.js, React.js, and Node.js, along with HTML, CSS, and JavaScript. For content management, I can also work with platforms like WordPress.",
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
          Q: "Can you create advanced Excel tools with macros and data visualization?",
          A: "Yes, I can build Excel tools with advanced functionalities, including custom macros, automated calculations, and dynamic charts. These solutions can help you analyze and manage your data more effectively.",
        },
        {
          Q: "What platforms do you support for desktop app development?",
          A: "I develop desktop applications for Windows, macOS, and cross-platform environments using tools like Electron.js. My goal is to create applications that are reliable, efficient, and easy to use.",
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
/* .bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png") !important;
  background-position: center !important;
  width: 100%;
  background-repeat: repeat !important;
} */

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
  margin-left: 20% !important;
  /* margin: auto !important; */
}

.card {
  max-width: 100%;
  margin-bottom: 1rem;
  box-shadow: none;
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
  .v-container {
    min-width: 100%;
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

<template>
  <div>
    <AppBar />
    <HeaderAboutCompo />
    <div class="bg-DominateColor EmptyDiv" />
    <div :class="`bg-background ${ThemeMode} `">
      <div data-aos="fade-up">
        <h1
          class="text-center text-center"
          style="font-size: 54px; font-weight: 800; text-transform: capitalize"
        >
          Who Am <span class="text-primary">I ?</span>
        </h1>

        <v-container class="container-text" data-aos="fade-down">
          <div class="fade-dots img-5 d-none d-lg-flex">
            <img src="../assets/Icons/reactjs.png" alt="logo" width="120" />
          </div>
          <div class="fade-dots img-6 d-none d-lg-flex">
            <img src="../assets/Icons/python.png" alt="logo" width="120" />
          </div>
          <h3 class="text-center pb-4 poppins-regular">
            "Full Stack Developer with expertise in building dynamic, end-to-end
            web applications. Skilled in both front-end and back-end
            development, bringing creativity and efficiency to each project to
            deliver seamless user experiences and robust functionality."
          </h3>
          <div>
            <v-divider class=""></v-divider>
          </div>
          <h3 class="text-center pt-4 poppins-regular">
            As a Full Stack Developer, I bring a unique blend of front-end and
            back-end skills tailored to meet complex development needs. With
            deep expertise in Python, I deliver efficient data processing,
            insightful analytics, and reliable API integrations that power
            data-driven applications. On the front end, I excel in Vue.js,
            creating seamless, interactive experiences, while my proficiency in
            React and advanced knowledge of React Native enable me to build
            versatile, cross-platform solutions for web and mobile.
          </h3>
        </v-container>
        <div class="text-center">
          <h1
            class="text-center"
            style="
              font-size: 54px;
              font-weight: 800;
              text-transform: capitalize;
              padding-bottom: 1%;
            "
          >
            Meet Me<span class="text-primary"> AT :</span>
          </h1>
          <v-avatar color="grey" rounded="50" size="150" class="mx-auto">
            <v-img src="../assets/Me.png" cover class="mx-auto"></v-img>
          </v-avatar>

          <v-container class="mx-auto pt-12 vvv">
            <v-row class="d-flex justify-center" dense align="center">
              <v-col
                v-for="(card, index) in Cards"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <v-card
                  style="max-width: 400px; max-height: 400px; box-shadow: none"
                  class="rounded-xl pa-12 mx-auto d-flex flex-column justify-center align-center"
                >
                  <v-img
                    :src="card.Img"
                    height="120"
                    width="120"
                    class="mx-auto hover-move"
                  />
                  <h2 class="text-center py-1">{{ card.title }}</h2>
                  <p class="text-center py-4">
                    {{ card.description }}
                  </p>
                  <v-container style="max-width: 80%" class="mx-auto">
                    <v-btn class="bg-primary pa-4" block>
                      Join Me Now <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
    <FooterAboutCompo />
  </div>
</template>

<script>
import AppBar from "../components/GlobalComponents/AppBar.vue";
import HeaderAboutCompo from "@/components/AboutUI/HeaderAboutCompo.vue";
import FooterAboutCompo from "@/components/GlobalComponents/FooterCompo.vue";
import { computed } from "vue";
export default {
  components: { AppBar, HeaderAboutCompo, FooterAboutCompo },
  computed: {
    ThemeMode() {
      // Return a class name based on the current theme
      return this.$vuetify.theme.global.name === "CustomLightTheme"
        ? "bg-background"
        : "bg-lines";
    },
  },
  data() {
    return {
      Cards: [
        {
          Img: "https://i.imgur.com/W7oAbeQ.png",
          title: "Discord Server",
          description:
            "Welcome to my Discord server! This is a vibrant hub for developers, tech enthusiasts, and creatives to connect.",
        },
        {
          Img: "https://i.imgur.com/Te8O2No.png",
          title: "Instagram Account ",
          description:
            "Follow my Instagram for a behind-the-scenes look at my journey as a developer! From showcasing my latest web, mobile.",
        },
        {
          Img: "https://i.imgur.com/Fu08XBE.png",
          title: "Business E-mail",
          description:
            "Reach out to me via e-mail for professional inquiries, project discussions, or collaboration opportunities.",
        },
        {
          Img: "https://i.imgur.com/6Y1cR3v.png",
          title: "Telegram Channel",
          description:
            "Stay updated with my latest projects, development tips, and automation insights by joining my Telegram channel.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Poppins&display=swap");

.EmptyDiv {
  height: 8vh;
  border-radius: 0 0 50% 50%; /* Curve only the bottom corners */
}

.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
}

.poppins-regular {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}

.dm-mono-regular {
  font-family: "DM Mono", serif;
  font-weight: 400;
  font-style: normal;
}

.hover-move {
  transition: transform 0.3s ease-in-out;
  position: relative;
}

/* Hover animation using keyframes */
@keyframes moveLeftRight {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  75% {
    transform: translatey(10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Apply animation on hover */
.hover-move:hover {
  animation: moveLeftRight 1.5s ease-in-out infinite;
}

/* Optional: Add a smooth transition when animation ends */
.hover-move:not(:hover) {
  transform: translateX(0);
  transition: transform 0.3s ease-out;
}

.fade-dots {
  position: absolute;
  opacity: 0.3;

  animation: fadeInOut 4s ease-in-out infinite;
}

@keyframes moveImg5 {
  0%,
  100% {
    top: 65%;
    left: 15%;
  }
  50% {
    top: 75%;
    left: 17%;
  }
}

.img-5 {
  animation-name: moveImg5;
}

@keyframes moveImg6 {
  0%,
  100% {
    top: 65%;
    left: 78%;
  }
  50% {
    top: 75%;
    left: 75%;
  }
}

.img-6 {
  animation-name: moveImg6;
}

.container-text {
  max-width: 50%;
}

@media (max-width: 600px) {
  .container-text {
    max-width: 100%;
  }
}

@media (max-width: 834px) {
  .container-text {
    max-width: 90%;
  }
}
</style>

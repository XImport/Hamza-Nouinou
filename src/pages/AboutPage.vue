<template>
  <div>
    <AppBar />
    <HeaderAboutCompo />
    <div class="bg-background bg-lines">
      <div>
        <h1
          class="text-center text-center"
          style="font-size: 54px; font-weight: 800; text-transform: capitalize"
        >
          Who Am <span style="color: yellow">I ?</span>
        </h1>
        <v-container style="max-width: 50%" class="">
          <div class="fade-dots img-5">
            <img src="../assets/Icons/reactjs.png" alt="logo" width="120" />
          </div>
          <div class="fade-dots img-6">
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
            Meet Me<span style="color: yellow"> AT :</span>
          </h1>
          <v-avatar color="grey" rounded="50" size="150" class="mx-auto">
            <v-img src="../assets/Me.png" cover class="mx-auto"></v-img>
          </v-avatar>
          <v-container
            class="mx-auto d-flex pt-12 vvv"
            style="min-height: 50vh; max-width: 90%"
          >
            <v-card
              v-for="(card, index) in Cards"
              :key="index"
              style="
                max-width: 400px;
                max-height: 400px;
                background-color: #232323;
              "
              class="rounded-xl pa-12 mx-auto justify-center align-center"
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
                <v-btn class="bg-primary pa-4" block
                  >Join Me Now <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </v-container>
            </v-card>
          </v-container>
        </div>
      </div>
    </div>
    <FooterAboutCompo />
  </div>
</template>

<script>
import AppBar from "../components/AboutUI/AppBar.vue";
import HeaderAboutCompo from "@/components/AboutUI/HeaderAboutCompo.vue";
import FooterAboutCompo from "@/components/HomeUI/FooterCompo.vue";
export default {
  components: { AppBar, HeaderAboutCompo, FooterAboutCompo },
  data() {
    return {
      Cards: [
        {
          Img: "https://i.ibb.co/j5LRkHB/discord.png",
          title: "Discord Server",
          description:
            "Welcome to my Discord server! This is a vibrant hub for developers, tech enthusiasts, and creatives to connect.",
        },
        {
          Img: "https://i.ibb.co/LdK3Gc8/instagram.png",
          title: "Instagram Account ",
          description:
            "Follow my Instagram for a behind-the-scenes look at my journey as a developer! From showcasing my latest web, mobile.",
        },
        {
          Img: "https://i.ibb.co/smj1Wmd/mail.png",
          title: "Business E-mail",
          description:
            "Reach out to me via e-mail for professional inquiries, project discussions, or collaboration opportunities.",
        },
        {
          Img: "https://i.ibb.co/XxK86W6/telegram.png",
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
</style>

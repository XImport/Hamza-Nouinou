<template>
  <div :class="`bg-background  ${ThemeMode}`">
    <AppBar />
    <HeaderContactCompo />
    <div
      class="bg-DominateColor EmptyDiv"
      v-if="$vuetify.theme.global.name === 'CustomLightTheme'"
    />
    <h1
      class="text-center manrope-font text-center animate__animated animate__fadeInUp animate__duration-2s"
      style="font-size: 54px; font-weight: 800; text-transform: capitalize"
    >
      Information
    </h1>

    <v-container
      class="container-text animate__animated animate__fadeInUp animate__duration-2s"
    >
      <p
        class="text-center azeret-mono-font"
        style="
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.53);
        "
      >
        Get to know more about me, my skills, and my journey as a developer.
        Discover how I can help bring your ideas to life with tailored solutions
        and expertise.
      </p>
    </v-container>
    <v-container
      class="mx-auto card-container animate__animated animate__fadeInUp animate__duration-2s"
      style="min-height: 30vh"
    >
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
            style="min-width: 300px; max-height: 300px; box-shadow: none"
            class="rounded-xl pa-6 d-flex flex-column justify-center align-center"
          >
            <v-img :src="card.Img" height="120" width="120" class="mx-auto" />
            <h2 class="text-center py-1">{{ card.title }}</h2>
            <p class="text-center text-grey azeret-mono-font">
              {{ card.description }}
            </p>
            <p class="text-center text-grey azeret-mono-font">
              {{ card.subdescription }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div data-aos="fade-up">
      <h1
        class="text-center manrope-font text-center"
        style="font-size: 54px; font-weight: 800; text-transform: capitalize"
      >
        Contact Me
      </h1>
      <v-container class="container-text">
        <p
          class="text-center azeret-mono-font"
          style="
            font-size: 18px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.53);
          "
        >
          Have A Question? Need Help? Don't Hesitate, Drop Us A Line
        </p>
      </v-container>
    </div>

    <ContactForm />
    <div style="height: 100px" />
    <div>
      <FooterCompo />
    </div>
  </div>
</template>

<script>
import AppBar from "@/components/GlobalComponents/AppBar.vue";
import HeaderContactCompo from "@/components/Contact/HeaderContactCompo.vue";
import ContactForm from "@/components/Contact/ContactForm.vue";
import FooterCompo from "@/components/GlobalComponents/FooterCompo.vue";
export default {
  components: { AppBar, HeaderContactCompo, ContactForm, FooterCompo },
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
          Img: "https://themesflat.co/html/open9/assets/images/box-icon/address.png",
          title: "Office address",
          description: "1901 Thornridge Cir. Shiloh,",
          subdescription: " Hawaii 81063.",
        },
        {
          Img: "https://themesflat.co/html/open9/assets/images/box-icon/email.png",
          title: "Email",
          description: "hamza.nouinou98@gmail.com",
          subdescription: "zed.robot99@gmail.com",
        },
        {
          Img: "https://themesflat.co/html/open9/assets/images/box-icon/phone.png",
          title: "Phone number",
          description: "(212) 601-545409",
          subdescription: "(212) 662-721411",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&display=swap");

.azeret-mono-font {
  font-family: "Azeret Mono", monospace !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  font-style: normal !important;
}

.EmptyDiv {
  height: 8vh;
  border-radius: 0 0 50% 50%; /* Curve only the bottom corners */
}
.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
}

.card-container {
  max-width: 80%;
}
.container-text {
  max-width: 50%;
}

@media (max-width: 600px) {
  .container-text {
    max-width: 100%;
  }
  .card-container {
    max-width: 100%;
  }
}

@media (max-width: 834px) {
  .container-text {
    max-width: 90%;
  }
}
</style>

<template>
  <div ::class="` ${ThemeMode} `">
    <AppBar />
    <HeaderServicesCompo />
    <div
      class="bg-DominateColor EmptyDiv"
      v-if="$vuetify.theme.global.name === 'CustomLightTheme'"
    />
    <div :class="`${ThemeMode}`">
      <h1
        class="text-center text-center animate__animated animate__fadeInUp animate__duration-2s"
        style="font-size: 54px; font-weight: 800; text-transform: capitalize"
      >
        BOOST YOUR PRESENCE
      </h1>
      <h1
        class="text-center text-center animate__animated animate__fadeInUp animate__duration-2s"
        style="font-size: 54px; font-weight: 800; text-transform: capitalize"
      >
        ON THE
        <span
          class="text-primary animate__animated animate__fadeInUp animate__duration-2s"
          >INTERNET</span
        >
      </h1>
    </div>
    <v-container
      :class="` ${ThemeMode} d-flex justify-center align-center card-container animate__animated animate__fadeInUp animate__duration-2s  `"
    >
      <v-row class="gap-1">
        <v-col
          v-for="(card, index) in Cards"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="4"
        >
          <v-card
            class="pa-6 mx-auto mt-4"
            style="max-width: 100%; box-shadow: none"
          >
            <v-icon
              size="75"
              class="mx-auto"
              :color="card.color"
              style="margin-left: 35% !important"
              >{{ card.Img }}</v-icon
            >
            <h2 class="text-center py-1">{{ card.title }}</h2>
            <p class="text-center py-4">
              {{ card.description }}
            </p>
            <div :class="`pt-1 bg-${card.color}`" />
            <v-container style="max-width: 80%" class="mx-auto"></v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <FooterCompo class="mt-12" />
  </div>
</template>

<script>
import AppBar from "@/components/GlobalComponents/AppBar.vue";
import HeaderServicesCompo from "@/components/ServicesUI/HeaderServicesCompo.vue";
import FooterCompo from "@/components/GlobalComponents/FooterCompo.vue";
export default {
  components: { AppBar, HeaderServicesCompo, FooterCompo },
  ThemeMode() {
    // Return a class name based on the current theme
    return this.$vuetify.theme.global.name === "CustomLightTheme"
      ? "bg-lines-light-bg"
      : "bg-lines-dark";
  },
  data() {
    return {
      Cards: [
        {
          Img: "mdi-webpack",
          title: "Web Developpment",
          color: "primary",
          description:
            "Custom website design and development, ensuring responsive, high-performance web applications tailored to your Pro business needs.",
        },
        {
          Img: "mdi-android",
          title: "Mobile Applications ",
          color: "orange",
          description:
            "Creating custom, user-friendly apps for iOS and Android, designed to deliver seamless, high-performance experiences on mobile devices.",
        },
        {
          Img: "mdi-monitor",
          title: "Desktop Applications",
          color: "green",
          description:
            "developing custom, high-performance desktop software for Windows, macOS, or Linux, tailored to meet specific business needs.",
        },
        {
          Img: "mdi-auto-fix",
          title: "Automation Scripts",
          color: "blue",
          description:
            "custom scripts to automate repetitive tasks, streamline workflows, and improve efficiency by reducing manual effort and errors.",
        },
        {
          Img: "mdi-lightning-bolt-circle",
          title: "Excel Sheets",
          color: "purple",
          description:
            "custom spreadsheet solutions, including data analysis, reporting, automation, and complex formula integration .",
        },
        {
          Img: "mdi-creation",
          title: "Logo Creation",
          color: "red",
          description:
            "custom logo design that reflects your brand's identity, combining creativity and strategy to deliver a unique .",
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

.EmptyDiv {
  height: 8vh;
  border-radius: 0 0 50% 50%; /* Curve only the bottom corners */
}

.card-container {
  max-width: 70%;
  margin: auto !important;
}

@media (max-width: 834px) {
  .card-container {
    max-width: 100%;
  }
}
</style>

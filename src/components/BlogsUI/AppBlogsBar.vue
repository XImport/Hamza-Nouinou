<template>
  <v-app style="max-height: 14vh">
    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer v-model="drawer" app temporary dark color="background">
      <v-list>
        <v-list-item
          v-for="(btn, index) in NavbarButtons"
          :key="index"
          :to="btn.link"
          link
        >
          <v-list-item-title class="py-2">{{ btn.text }}</v-list-item-title>
        </v-list-item>

        <!-- Mobile Contact Button -->
        <v-list-item>
          <v-btn
            block
            class="bg-primary manrope-font mt-4"
            style="font-size: small; font-weight: bolder"
          >
            Contact Me
            <v-icon size="24" class="ml-2">mdi-phone-in-talk</v-icon>
          </v-btn>
        </v-list-item>

        <!-- Mobile Action Icons -->
        <v-list-item>
          <v-row justify="space-around" class="mt-4">
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon v-show="GetDarkThemeState">
              <v-icon>mdi-weather-night</v-icon>
            </v-btn>
            <v-btn icon v-show="GetLightThemeState">
              <v-icon>mdi-white-balance-sunny</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
          </v-row>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat color="background" dark class="py-2" app>
      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>

      <!-- Logo Section -->
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-toolbar-title>
          <img src="../../assets/logo.png" alt="logo" height="63" />
        </v-toolbar-title>
      </v-col>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <!-- Desktop Nav Links -->
      <div class="hidden-sm-and-down">
        <v-btn
          v-for="(btn, index) in NavbarButtons"
          :key="index"
          :to="btn.link"
          text
          class="mx-1"
          style="text-transform: none"
        >
          {{ btn.text }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <!-- Desktop Contact Button -->
      <div class="ml-6 hidden-sm-and-down">
        <v-btn
          class="bg-primary manrope-font px-4"
          style="font-size: small; font-weight: bolder"
        >
          Contact Me
          <v-icon size="24" class="ml-2">mdi-phone-in-talk</v-icon>
        </v-btn>
      </div>

      <!-- Desktop Action Icons -->
      <div class="hidden-sm-and-down ml-4">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon class="ml-1" v-show="GetDarkThemeState">
          <v-icon color="white">mdi-weather-night</v-icon>
        </v-btn>
        <v-btn icon class="ml-1" v-show="GetLightThemeState">
          <v-icon color="white">mdi-white-balance-sunny</v-icon>
        </v-btn>
        <v-btn icon class="ml-1">
          <v-icon>mdi-filter-variant</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      NavbarButtons: [
        { text: "Home", link: "/" },
        { text: "Services", link: "/services" },
        { text: "Explore", link: "/explore" },
        { text: "About Me", link: "/about" },
        { text: "Blogs", link: "/blogs" },
      ],
    };
  },
  computed: {
    GetLightThemeState() {
      return this.$store.getters.GetLightTheme;
    },
    GetDarkThemeState() {
      return this.$store.getters.GetdarkTheme;
    },
  },
};
</script>

<style scoped>
.v-btn--active {
  color: #ddf247 !important;
  background-color: transparent !important;
  box-shadow: none !important;
}

/* Responsive adjustments */
.v-toolbar__content {
  padding: 0 16px;
}

@media (max-width: 600px) {
  .v-toolbar__content {
    padding: 0 8px;
  }
}

/* Smooth transitions */
.v-navigation-drawer {
  transition: transform 0.3s ease-in-out;
}

.v-btn {
  transition: all 0.2s ease-in-out;
}
</style>

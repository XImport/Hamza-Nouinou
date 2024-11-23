<template>
  <v-app style="max-height: 14vh">
    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      color="background"
      :width="drawerWidth"
    >
      <v-list>
        <img src="../../assets/logo.png" alt="logo" height="75" />
      </v-list>
      <v-list>
        <v-divider></v-divider>

        <v-list-item
          v-for="(btn, index) in NavbarButtons"
          :key="index"
          :to="btn.link"
          class="mt-2"
          link
        >
          <v-list-item-title class="py-2">{{ btn.text }}</v-list-item-title>
          <v-divider></v-divider>
        </v-list-item>

        <!-- Mobile Contact Button -->
        <v-list-item>
          <v-btn
            to="/contact"
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
            <v-btn
              icon
              v-show="GetDarkThemeState"
              @click="$vuetify.theme.global.name = 'CustomLightTheme'"
            >
              <v-icon>mdi-weather-night</v-icon>
            </v-btn>
            <v-btn
              icon
              v-show="GetLightThemeState"
              @click="$vuetify.theme.global.name = 'CustomDarkTheme'"
            >
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
      <v-spacer></v-spacer>

      <!-- Desktop Nav Links -->
      <div class="hidden-sm-and-down">
        <v-btn
          v-for="(btn, index) in NavbarButtons"
          :key="index"
          :to="btn.link"
          text
          class="mx-1 text-FontText"
          :class="{ 'custom-v-btn--active': CheckTheme }"
          style="text-transform: none"
        >
          {{ btn.text }}
        </v-btn>

        <v-btn
          v-show="$route.path == '/contact'"
          class="manrope-font px-4"
          style="font-size: small; font-weight: bolder; text-transform: none"
          to="/contact"
        >
          Contact Me
        </v-btn>
      </div>
      <!-- <v-spacer v-if="$route.path == '/contact'" /> -->

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <!-- Desktop Contact Button -->
      <div class="ml-6 hidden-sm-and-down" v-show="$route.path != '/contact'">
        <v-btn
          class="bg-primary manrope-font px-4"
          style="font-size: small; font-weight: bolder"
          to="/contact"
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
        <v-btn
          icon
          class="ml-1"
          v-show="GetDarkThemeState"
          @click="$vuetify.theme.global.name = 'CustomLightTheme'"
        >
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
        <v-btn
          icon
          class="ml-1"
          v-show="GetLightThemeState"
          @click="$vuetify.theme.global.name = 'CustomDarkTheme'"
        >
          <v-icon>mdi-white-balance-sunny</v-icon>
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
import { useDisplay } from "vuetify";

export default {
  data() {
    return {
      DarkMode: true,

      drawer: false,
      display: null,
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
      return this.$vuetify.theme.global.name === "CustomLightTheme";
    },
    GetDarkThemeState() {
      return this.$vuetify.theme.global.name === "CustomDarkTheme";
    },
    drawerWidth() {
      if (this.display.xs) {
        return 300;
      } // Mobile

      return 500; // Default for tablet or other sizes
    },
    CheckTheme() {
      if (this.$vuetify.theme.global.name === "CustomDarkTheme") {
        return true;
      }
      return false;
    },
  },
  created() {
    // Initialize the Vuetify display composable
    this.display = useDisplay();
  },
};
</script>

<style scoped>
.v-btn--active--Light {
  color: #ddf247 !important;
  background-color: #000 !important;
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

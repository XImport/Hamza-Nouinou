<template>
  <v-app style="max-height: 8vh">
    <!-- Navigation Drawer for Mobile -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="bg-DominateColor"
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
          <v-row justify="space-around" class="pa-6">
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

    <v-app-bar flat dark class="py-2 bg-DominateColor" app>
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
      <!-- -- Light Theme -->
      <div class="hidden-sm-and-down">
        <v-btn
          v-for="(btn, index) in NavbarButtons"
          :key="index"
          :to="btn.link"
          text
          class="manrope-font px-4"
          style="font-size: small; font-weight: bolder; text-transform: none"
        >
          {{ btn.text }}
        </v-btn>

        <v-btn
          class="manrope-font px-4"
          style="font-size: small; font-weight: bolder; text-transform: none"
          to="/contact"
        >
          Contact
        </v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <!-- Desktop Contact Button -->

      <!-- Desktop Action Icons -->
      <div class="hidden-sm-and-down ml-4">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
          icon
          class="ml-1"
          v-show="GetDarkThemeState"
          @click="handleThemeChange('CustomLightTheme')"
        >
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
        <v-btn
          icon
          class="ml-1"
          v-show="GetLightThemeState"
          @click="handleThemeChange('CustomDarkTheme')"
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
      drawer: false,
      display: null,
      currentTheme: "CustomLightTheme", // Add local theme tracking
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
    // Detect light or dark theme
    isLightTheme() {
      return this.$vuetify.theme.global.name === "CustomLightTheme";
    },
    isDarkTheme() {
      return this.$vuetify.theme.global.name === "CustomDarkTheme";
    },
    // Calculate drawer width based on display size
    drawerWidth() {
      // Ensure 'display' is initialized before accessing it
      return this.display && this.display.xs ? 300 : 500;
    },
    GetLightThemeState() {
      return this.$vuetify.theme.global.name === "CustomLightTheme";
    },
    GetDarkThemeState() {
      return this.$vuetify.theme.global.name === "CustomDarkTheme";
    },
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    handleThemeChange(newTheme) {
      this.$vuetify.theme.global.name = newTheme;
      // Force re-evaluation of active classes
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },
    getActiveClass(link) {
      const isActive = this.$route.path === link;
      if (isActive) {
        return this.isLightTheme ? "v-btn--active-light" : "v-btn--active-dark";
      }
      return "";
    },
  },
  mounted() {
    // Initialize theme state
    this.currentTheme = this.$vuetify.theme.global.name;
    this.display = useDisplay();
  },
  // watch: {
  //   // Watch for theme changes
  //   "$vuetify.theme.global.name": {
  //     immediate: true,
  //     handler() {
  //       this.$forceUpdate();
  //     },
  //   },
  //   // Watch for route changes
  //   currentRoute: {
  //     immediate: true,
  //     handler() {
  //       this.$forceUpdate();
  //     },
  //   },
  // },

  // created() {
  //   // Initialize Vuetify's display composable
  //   this.display = useDisplay();
  // },
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

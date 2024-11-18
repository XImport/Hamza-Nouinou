<template>
  <v-footer class="bg-black pt-16">
    <v-container>
      <v-row>
        <!-- Marketplace Section -->
        <v-col cols="12" sm="3">
          <h6 class="text-h6 text-white mb-4">Home</h6>
          <v-list class="bg-transparent pa-0">
            <v-list-item
              v-for="item in Home"
              :key="item"
              :title="item"
              class="text-grey px-0"
              density="compact"
            ></v-list-item>
          </v-list>
        </v-col>

        <!-- Resource Section -->
        <v-col cols="12" sm="3">
          <h6 class="text-h6 text-white mb-4">Explore</h6>
          <v-list class="bg-transparent pa-0">
            <v-list-item
              v-for="item in Explore"
              :key="item"
              :title="item"
              class="text-grey px-0"
              density="compact"
            ></v-list-item>
          </v-list>
        </v-col>

        <!-- Account Section -->
        <v-col cols="12" sm="3">
          <h6 class="text-h6 text-white mb-4">Blogs</h6>
          <v-list class="bg-transparent pa-0">
            <v-list-item
              v-for="item in Blogs"
              :key="item"
              :title="item"
              class="text-grey px-0"
              density="compact"
            ></v-list-item>
          </v-list>
        </v-col>

        <!-- Company Section -->
        <v-col cols="12" sm="3">
          <h6 class="text-h6 text-white mb-4">Services</h6>
          <v-list class="bg-transparent pa-0">
            <v-list-item
              v-for="item in Services"
              :key="item"
              :title="item"
              class="text-grey px-0"
              density="compact"
            ></v-list-item>
          </v-list>

          <div class="mt-4">
            <h6 class="text-h6 text-white mb-4">Join the community</h6>
            <v-row class="mt-2">
              <v-col cols="auto" v-for="icon in socialIcons" :key="icon">
                <v-btn icon variant="text" color="grey">
                  <v-icon>{{ icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <!-- Bottom Section -->
      <v-row class="mt-8 py-4">
        <v-col cols="12" sm="6" class="text-grey">
          © 2023 Open9 - Made By Themesflat
        </v-col>
        <v-col cols="12" sm="6" class="text-right">
          <v-btn variant="text" color="grey" class="mr-2">
            Privacy Policy
          </v-btn>
          <v-btn variant="text" color="grey"> Terms of Service </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const Home = [
  "All NFTs",
  "Virtual worlds",
  "Domain names",
  "Photography",
  "Digital art",
  "Music",
];

const Explore = [
  "Help center",
  "Platform status",
  "Partners",
  "Discount community",
  "Live auctions",
  "Discover",
];

const Blogs = [
  "Authors",
  "My Collection",
  "Author Profile",
  "Go to dashboard",
  "Collection",
  "Create Collection",
];

const Services = ["Help center", "Platform status"];

const socialIcons = [
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-forum",
  "mdi-youtube",
];
</script>

<style scoped>
.v-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.v-list-item {
  min-height: 32px;
}
</style>

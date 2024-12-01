<template>
  <div>
    <h1
      class="text-center text-center animate__animated animate__fadeInUp animate__duration-2s"
      style="font-size: 54px; font-weight: 800; text-transform: capitalize"
    >
      {{ title }}
    </h1>

    <h1
      class="text-center text-center animate__animated animate__fadeInUp animate__duration-2s"
      style="font-size: 54px; font-weight: 800; text-transform: capitalize"
    >
      <span class="text-primary"> {{ subtitle }} </span>
    </h1>
    <v-container
      class="mx-auto d-flex flex-column blogs-container animate__animated animate__fadeInUp animate__duration-2s"
    >
      <v-row no-gutters>
        <v-col
          v-for="(blog, index) in paginatedBlogs"
          :key="index"
          cols="12"
          sm="4"
        >
          <v-card
            max-width="400"
            class="mx-auto rounded-lg mb-6"
            style="box-shadow: none"
          >
            <!-- Image Container -->
            <v-img
              :src="blog.image"
              height="200"
              cover
              class="rounded-xl"
            ></v-img>

            <!-- Card Content -->
            <v-card-text class="pa-4">
              <!-- Category and Date -->
              <div class="d-flex align-center mb-2">
                <v-icon
                  icon="mdi-folder"
                  color="success"
                  size="small"
                  class="mr-2"
                ></v-icon>
                <span class="text-success text-body-2 mr-4">{{
                  blog.category
                }}</span>
                <v-icon
                  icon="mdi-clock-outline"
                  size="small"
                  color="grey"
                  class="mr-2"
                ></v-icon>
                <span class="text-grey text-body-2">{{ blog.date }}</span>
              </div>

              <!-- Title -->
              <div class="text-h6 text-TextFont font-weight-bold mb-4">
                <router-link
                  :to="{ name: 'BlogPage', params: { title: blog.title } }"
                  style="text-decoration: none"
                  class="text-TextFont"
                >
                  {{ blog.title }}</router-link
                >
              </div>
              <v-divider></v-divider>
              <!-- Author Section -->
              <div class="d-flex align-center justify-space-between pt-2">
                <div class="d-flex align-center">
                  <v-avatar size="32" class="mr-2">
                    <v-img src="../../assets/Me.png"></v-img>
                  </v-avatar>
                  <div>
                    <div class="text-grey text-caption">Posted by:</div>
                    <div class="text-white text-body-2">
                      {{ blog.author.name }}
                    </div>
                  </div>
                </div>

                <!-- Share Button -->
                <v-btn
                  icon="mdi-arrow-top-right"
                  variant="text"
                  color="grey"
                  size="small"
                ></v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- Pagination -->
      <div class="d-flex justify-center mt-6 mb-8">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          active-color="primary"
          :total-visible="5"
          rounded="circle"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["blogs", "title", "subtitle"],
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.blogs.length / this.itemsPerPage);
    },
    paginatedBlogs() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.blogs.slice(start, end);
    },
  },
};
</script>

<style scoped>
.blogs-container {
  max-width: 70%;
}

@media (max-width: 600px) {
  .blogs-container {
    max-width: 100%;
  }
}

@media (max-width: 834px) {
  .blogs-container {
    max-width: 100%;
  }
}
</style>

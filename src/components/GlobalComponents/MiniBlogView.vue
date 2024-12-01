<template>
  <div>
    <div>
      <h2 class="text-primary">{{ title }}</h2>
    </div>
    <div class="pt-4" v-for="(blog, index) in Blogs" :key="index">
      <v-card class="rounded-sm bg-ShadeBg">
        <div class="d-flex">
          <v-img :src="blog.ImageUrl" width="30%" />
          <div class="ml-4">
            <h3 class="clamp-title">{{ blog.title }}</h3>
            <p class="clamp-text mt-2">
              {{ blog.Content }}
            </p>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Blogs", "title"],
};
</script>

<style scoped>
.clamp-text {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.clamp-title {
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-card {
  box-shadow: none;
  /* background-color: aqua; */
  padding: 15px;
}
</style>

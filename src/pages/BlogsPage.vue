<template>
  <div :class="`bg-background  ${ThemeMode}`">
    <AppBlogsBar />
    <HeaderBlogsCompo />
    <div
      class="bg-DominateColor EmptyDiv"
      v-if="$vuetify.theme.global.name === 'CustomLightTheme'"
    />
    <BlogsCompoThambnail :title="title" :subtitle="subtitle" :blogs="blogs" />
    <FooterCompo />
  </div>
</template>

<script>
import AppBlogsBar from "@/components/GlobalComponents/AppBar.vue";
import HeaderBlogsCompo from "@/components/BlogsUI/HeaderBlogsCompo.vue";
import BlogsCompoThambnail from "@/components/BlogsUI/BlogsCompoThambnail.vue";
import FooterCompo from "@/components/GlobalComponents/FooterCompo.vue";
export default {
  components: {
    AppBlogsBar,
    HeaderBlogsCompo,
    FooterCompo,
    BlogsCompoThambnail,
  },
  computed: {
    ThemeMode() {
      // Return a class name based on the current theme
      return this.$vuetify.theme.global.name === "CustomLightTheme"
        ? "bg-background"
        : "bg-lines";
    },
    blogs() {
      return this.$store.getters.GetBlogs;
    },
  },
  data() {
    return {
      title: "Blogs That Inspire To Read",
      subtitle: "What's New",
    };
  },
};
</script>

<style scoped>
.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  background-repeat: repeat;
}
.EmptyDiv {
  height: 8vh;
  border-radius: 0 0 50% 50%; /* Curve only the bottom corners */
}
</style>

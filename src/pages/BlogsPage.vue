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
  },
  data() {
    return {
      title: "Blogs That Inspire To Read",
      subtitle: "What's New",

      blogs: [
        {
          id: 1,
          image:
            "https://i.pinimg.com/736x/7e/c5/de/7ec5de0e5f9595fb14e33f8a41ae03a2.jpg",
          category: "Digital Art",
          date: "Mon, 08 May",
          title: "Unreal Engine for Fortnite is a big deal",
          author: {
            name: "Hamza Nouinou",
            avatar: "../assets/Me.png",
          },
          to: "/firstblog",
        },
        {
          id: 2,
          image:
            "https://i.pinimg.com/736x/46/5f/15/465f15e5733753e0ec03f3d646bff010.jpg",
          category: "Game Development",
          date: "Tue, 09 May",
          title: "The Future of AI in Modern Gaming",
          author: {
            name: "Hamza Nouinou",
            avatar: "Me.png",
          },
        },
        {
          id: 3,
          image:
            "https://i.pinimg.com/736x/f6/f2/82/f6f282669632157cb46e33ea7d8bf5be.jpg",
          category: "Web Design",
          date: "Wed, 10 May",
          title: "Responsive Design Trends in 2024",
          author: {
            name: "Hamza Nouinou",
            avatar: "Me.png",
          },
        },
        {
          id: 4,
          image:
            "https://i.pinimg.com/736x/4b/87/0f/4b870fa5bb0a0bff0f872559d1c8628d.jpg",
          category: "3D Modeling",
          date: "Thu, 11 May",
          title: "Blender 4.0: A Game-Changing Release",
          author: {
            name: "Hamza Nouinou",
            avatar: "Me.png",
          },
        },
        {
          id: 5,
          image:
            "https://i.pinimg.com/736x/18/51/cc/1851ccc47ac87468d690984dae154950.jpg",
          category: "UI/UX",
          date: "Fri, 12 May",
          title: "Minimalism vs Maximalism in UI Design",
          author: {
            name: "Hamza Nouinou",
            avatar: "Me.png",
          },
        },
        {
          id: 6,
          image:
            "https://i.pinimg.com/originals/bd/78/b5/bd78b57fa09b08793f3e018bb549b49b.gif",
          category: "Animation",
          date: "Sat, 13 May",
          title: "Motion Design Principles for Beginners",
          author: {
            name: "Hamza Nouinou",
            avatar: "Me.png",
          },
        },
        // Add more blog entries to test pagination
        {
          id: 9,
          image:
            "https://i.pinimg.com/736x/94/2d/64/942d648f721e5e813c677382289a1693.jpg",
          category: "Web Development",
          date: "Tue, 16 May",
          title: "Top 10 JavaScript Frameworks for 2024",
          author: {
            name: "Hamza Nouinou",
            avatar: "Me.png",
          },
        },
        {
          id: 10,
          image:
            "https://i.pinimg.com/736x/40/5f/6d/405f6d4dd10700f680c851e7c4b3044b.jpg",
          category: "Mobile Development",
          date: "Wed, 17 May",
          title: "Why Flutter is Leading the Cross-Platform Race",
          author: {
            name: "Hamza Nouinou",
            avatar: "Me.png",
          },
        },
        // Add more blogs as needed
      ],
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

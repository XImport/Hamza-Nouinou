<template>
  <div>
    <AppBar />
    <div class="blog-container">
      <div>
        <h1
          class="text-center pb-4 text-decoration-underline mt-12 text-primary"
        >
          {{ BlogPost }}
        </h1>
      </div>

      <div class="d-flex">
        <v-container
          class="Empty-container d-none d-lg-flex"
          style="z-index: 0"
        >
          <!-- Empty Container Goes here  -->
          <TocView />
        </v-container>
        <v-container class="Blogs-container mardown-ui">
          <!-- My blogs Goes Here -->
          <component :is="DynamicBlogComponent" v-if="DynamicBlogComponent" />
          <div v-else>Blog not found</div>
          <v-container>
            <!-- Comments Goes Here  -->
            <CommentsView />
          </v-container>
        </v-container>
        <v-container class="Recommanded-container d-none d-lg-flex">
          <div>
            <div>
              <MiniBlogView :Blogs="Blogs" title="Top Picks for You " />
            </div>
            <div>
              <v-container style="max-width: 90%" class="text-center">
                <v-card elevation="1" class="pa-6 rounded-sm">
                  <v-row class="no-gutters" justify="center">
                    <v-col cols="12">
                      <h2 class="text-left montserrat-Font">
                        Let's hang out on social
                      </h2>
                    </v-col>
                    <v-col
                      v-for="(btn, index) in SocialMediaButtons"
                      :key="index"
                      cols="12"
                      sm="6"
                      md="6"
                      class="d-flex justify-center"
                    >
                      <v-btn class="" :color="btn.backgroundColor" block>
                        <v-icon left size="20"> {{ btn.IconButton }} </v-icon>
                        {{ btn.TextButton }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-container>
            </div>
            <div class="mt-6">
              <MiniBlogView :Blogs="Blogs" title="What's New " />
            </div>
          </div>
          <!-- Recent Blogs And Recommanded Blogs Goes Here -->
        </v-container>
      </div>
    </div>
    <!-- Footer Goes Here -->
    <div class="mt-12" style="z-index: 5">
      <FooterCompo />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppBar from "./AppBar.vue";
import MiniBlogView from "./MiniBlogView.vue";
import TocView from "./TocView.vue";
import CommentsView from "./CommentsView.vue";
import FooterCompo from "./FooterCompo.vue";

export default defineComponent({
  components: { AppBar, FooterCompo, MiniBlogView, TocView, CommentsView },
  data() {
    return {
      DynamicBlogComponent: null,
      SocialMediaButtons: [
        {
          backgroundColor: "purple-darken-4",
          TextButton: "FACEBOOK",
          IconButton: "mdi-facebook",
        },
        {
          backgroundColor: "red",
          TextButton: "GOOLGE+",
          IconButton: "mdi-google-plus",
        },
        {
          backgroundColor: "blue",
          TextButton: "TWITTER",
          IconButton: "mdi-twitter",
        },
        {
          backgroundColor: "pink-darken-2",
          TextButton: "INSTAGRAM",
          IconButton: "mdi-instagram",
        },
        {
          backgroundColor: "red-accent-4",
          TextButton: "Youtube",
          IconButton: "mdi-youtube",
        },
        {
          backgroundColor: "orange",
          TextButton: "RSS",
          IconButton: "mdi-rss",
        },
      ],
      Blogs: [
        {
          title: "Unreal Engine for Fortnite is a Big Deal",
          Content:
            "Fortnite has always been more than a game—it's a phenomenon. With the launch of Fortnite Creative 2.0, powered by the Unreal Editor for Fortnite (UEFN),",
          ImageUrl:
            "https://www.dsogaming.com/wp-content/uploads/2021/12/Fortnite-Chapter-3-2.jpg",
        },
        {
          title: "How UEFN is Changing Game Creation",
          Content:
            "Unreal Editor for Fortnite introduces a new era of creativity with advanced tools like Verse scripting and high-fidelity asset creation.",
          ImageUrl:
            "https://codakid.com/wp-content/uploads/2023/08/image49.png",
        },
        {
          title: "Top Features of Fortnite Creative 2.0",
          Content:
            "Explore the groundbreaking features of Fortnite Creative 2.0, from dynamic lighting with Lumen to importing custom assets.",
          ImageUrl:
            "https://i.ytimg.com/vi/2-GZT52oJm8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAb5foPPB9jHXgS3JFUUzbAUJLquw",
        },
        {
          title: "From Player to Creator: UEFN Made Easy",
          Content:
            "UEFN empowers players to step into the world of game development with intuitive tools and limitless creative possibilities.",
          ImageUrl:
            "https://sm.ign.com/ign_za/gallery/f/fc-25-scre/fc-25-screenshots_q38n.jpg",
        },
        {
          title: "Fortnite Maps Like Never Before",
          Content:
            "With Fortnite Creative 2.0, creators are reimagining what's possible, building maps that rival AAA games in quality.",
          ImageUrl:
            "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg?t=1730830713",
        },
      ],
    };
  },
  computed: {
    BlogPost() {
      return this.$route.params.title;
    },
    BlogId() {
      return this.$route.params.id;
    },
    GlobalBlogs() {
      return this.$store.getters.GetBlogs;
    },
  },
  methods: {
    async loadBlog() {
      // Find the corresponding blog by ID
      const blog = this.GlobalBlogs.find((blog) => blog.id == this.BlogId);

      if (blog) {
        try {
          // Use a more reliable dynamic import method
          const modulePath = `/src/Blogs/${blog.BlogName}`;
          const component = await import(/* @vite-ignore */ modulePath);
          this.DynamicBlogComponent = component.default || component;
        } catch (error) {
          console.error("Error loading blog:", error);
          this.DynamicBlogComponent = null;
        }
      } else {
        console.error("Blog not found!");
        this.DynamicBlogComponent = null;
      }
    },
  },
  watch: {
    BlogId: {
      immediate: true,
      handler() {
        this.loadBlog();
      },
    },
  },
});
</script>

<style scoped>
/* Blog Container */

.v-btn {
  box-shadow: none;
}

.Empty-container {
  min-width: 22%;
}

.Blogs-container {
  min-width: 48%;
  /* background-color: red; */
}
.Recommanded-container {
  min-width: 30%;
}
:deep(.mardown-ui h1) {
  text-align: center !important;
  padding: 3%;
}
:deep(.mardown-ui h2) {
  text-align: center !important;
  padding: 3%;
  text-decoration: underline;
}

:deep(.mardown-ui img) {
  /* background-color: blueviolet; */
  margin-left: auto;
  min-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

:deep(.mardown-ui h1) {
  text-align: center !important;
  padding: 3%;
  text-decoration: underline;
}
:deep(.mardown-ui h2) {
  text-align: center !important;
  padding: 3%;
  text-decoration: underline;
}

:deep(.mardown-ui h3) {
  text-align: center !important;
  padding: 3%;
  text-decoration: underline;
}
:deep(.mardown-ui h4) {
  text-align: center !important;
  padding: 3%;
  text-decoration: underline;
}
:deep(.mardown-ui h5) {
  text-align: center !important;
  padding: 3%;
  text-decoration: underline;
}

:deep(.mardown-ui h6) {
  text-align: center !important;
  padding: 3%;
  text-decoration: underline;
}

:deep(.mardown-ui p) {
  padding: 2%;
}
:deep(.mardown-ui li) {
  padding: 1.4%;
}
@media (max-width: 768px) {
  :deep(.mardown-ui img) {
    width: 50%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

:deep(.mardown-ui img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

@media (max-width: 768px) {
  :deep(.mardown-ui img) {
    width: 100%;
    max-width: 100%;
    margin: 0.5rem auto;
  }
}

@media (max-width: 480px) {
  :deep(.mardown-ui img) {
    width: 100%;
    margin: 0.25rem auto;
  }
}
</style>

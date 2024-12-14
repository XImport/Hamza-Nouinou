<template>
  <div class="comment-section pt-2">
    <!-- Comments Count -->
    <p class="text-h5 comments-header text-primary">
      <span class="comments-count text-primary">{{
        GetUserComments.length
      }}</span>
      Comments
    </p>
    <v-divider class="my-4"></v-divider>

    <!-- Comments List -->
    <template v-if="comments.length > 0">
      <div
        v-for="comment in GetUserComments"
        :key="comment.id"
        class="comment mb-4 bg-ShadeBg rounded-sm"
      >
        <v-avatar
          size="64"
          class="mr-4"
          v-if="$vuetify.theme.global.name == 'CustomDarkTheme'"
        >
          <v-img :src="defaultAvatarUrlDarkMode" cover></v-img>
        </v-avatar>
        <v-avatar
          size="64"
          class="mr-4"
          v-if="$vuetify.theme.global.name == 'CustomLightTheme'"
        >
          <v-img :src="defaultAvatarUrlLightMode" cover></v-img>
        </v-avatar>
        <div class="comment-body">
          <div class="comment-header d-flex align-center">
            <p
              class="comment-author text-subtitle-1 font-weight-bold mr-2 montserrat-Font"
            >
              AnonymousUser
              {{ Math.floor(Math.random() * (100000 - 105 + 1)) + 105 }}
            </p>
            <p
              class="comment-date text-caption text-grey-600 montserrat-Font text-primary"
            >
              {{ CurrentDateTime }}
            </p>
          </div>
          <p class="comment-text montserrat-Font">
            {{ comment }}
          </p>
        </div>
      </div>
      <div>
        <v-container>
          <v-textarea
            append-inner-icon="mdi-comment"
            label="Your feedback matters—drop a comment below! "
            v-model="PostComment"
          ></v-textarea>

          <v-container style="max-width: 50%">
            <v-btn
              block
              class="pa-6 mx-auto bg-primary"
              @click="submitComment(PostComment)"
              ><v-icon size="20 " class="pr-2">mdi-comment</v-icon> Post Comment
            </v-btn>
          </v-container>
        </v-container>
      </div>
    </template>
    <v-alert v-else type="info" variant="outlined" class="mt-4">
      No comments yet. Be the first to comment!
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Default avatar for users without a profile image
      defaultAvatarUrlLightMode: "https://i.imgur.com/qXOXBdr.png",
      defaultAvatarUrlDarkMode: "https://i.imgur.com/qXOXBdr.png",

      // Sample comments (replace with your data source)
      comments: [
        {
          id: 1,
          date: new Date("2017-07-17T12:48:00"),
          text: "This template is so awesome. I didn't expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.",
          avatarUrl: null,
        },
        {
          id: 2,
          date: new Date("2017-07-17T13:48:00"),
          text: "This template is so awesome. I didn't expect so many features inside. E-commerce pages are very useful, you can launch your online store in few seconds. I will rate 5 stars.",
          avatarUrl: null,
        },
      ],

      PostComment: "",
    };
  },

  methods: {
    // Date formatting function
    formatDate(date) {
      return new Date(date).toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    },
    submitComment(UserComment) {
      // This will call the parent's AddCommentToBlog with BlogId and the comment details
      this.AddCommentToBlog(UserComment);
      this.PostComment = "";
    },
    ExtractComments() {},
  },
  computed: {
    GetUserComments() {
      // Filter blogs by the given BlogId and return the comments

      const TargetBlogID = this.$store.getters.GetBlogs.filter(
        (blog) => blog.id == this.BlogId
      );

      console.log(TargetBlogID);
      return TargetBlogID[0].Comments; // Return comments if blog exists, otherwise return an empty array
    },
    CurrentDateTime() {
      return new Date().toLocaleString();
    },
  },

  props: {
    AddCommentToBlog: {
      type: Function,
      required: true,
    },
    BlogId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-section {
  .comments-header {
    margin-bottom: 1rem;

    .comments-count {
      color: #673ab7;
      font-weight: bold;
    }
  }
}

.comment {
  display: flex;
  align-items: flex-start;
  //   background-color: red;
  padding: 10px;

  .comment-body {
    flex: 1;

    .comment-header {
      margin-bottom: 0.25rem;
    }

    .comment-text {
      line-height: 1.6;
      margin-top: -1.5rem;
    }
  }
}
</style>

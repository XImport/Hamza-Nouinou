<template>
  <div class="comment-section pt-2">
    <!-- Comments Count -->
    <p class="text-h5 comments-header text-primary">
      <span class="comments-count text-primary">{{ comments.length }}</span>
      Comments
    </p>
    <v-divider class="my-4"></v-divider>

    <!-- Comments List -->
    <template v-if="comments.length > 0">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment mb-4 bg-ShadeBg rounded-sm"
      >
        <v-avatar
          size="64"
          class="mr-4"
          v-if="$vuetify.theme.global.name == 'CustomDarkTheme'"
        >
          <v-img
            :src="comment.avatarUrl || defaultAvatarUrlDarkMode"
            cover
          ></v-img>
        </v-avatar>
        <v-avatar
          size="64"
          class="mr-4"
          v-if="$vuetify.theme.global.name == 'CustomLightTheme'"
        >
          <v-img
            :src="comment.avatarUrl || defaultAvatarUrlLightMode"
            cover
          ></v-img>
        </v-avatar>
        <div class="comment-body">
          <div class="comment-header d-flex align-center">
            <p
              class="comment-author text-subtitle-1 font-weight-bold mr-2 montserrat-Font"
            >
              AnonymousUser
              {{ Math.floor(Math.random() * (100000 - 105 + 1)) + 105 }}
            </p>
            <p class="comment-date text-caption text-grey-600 montserrat-Font">
              {{ formatDate(comment.date) }}
            </p>
          </div>
          <p class="comment-text montserrat-Font">
            {{ comment.text }}
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
            <v-btn block class="pa-6 mx-auto bg-primary"
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

<script setup>
import { ref } from "vue";

// Default avatar for users without a profile image
const defaultAvatarUrlLightMode = "https://i.imgur.com/qXOXBdr.png";

const defaultAvatarUrlDarkMode = "https://i.imgur.com/qXOXBdr.png";

// Sample comments (replace with your data source)
const comments = ref([
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
]);

const PostComment = ref("");

// Date formatting function
const formatDate = (date) => {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
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

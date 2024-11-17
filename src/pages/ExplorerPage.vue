<template>
  <div>
    <AppExplorerBar />
    <div style="min-height: 50vh" class="bg-background bg-shades">
      <h1
        class="text-center text-center"
        style="font-size: 54px; font-weight: 800; text-transform: capitalize"
      >
        Explore My Core <span style="color: yellow">Technology Stack</span>
      </h1>
      <v-container style="width: 40%">
        <p
          class="text-center azeret-mono-font"
          style="
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.53);
          "
        >
          "I focus on using cutting-edge tools and frameworks that enable me to
          build scalable, efficient, and user-friendly applications. My approach
          is centered around delivering high-quality solutions tailored to meet
          specific needs and drive success."
        </p>
      </v-container>
      <SildersExplorCompo />
      <v-container>
        <h1
          class="text-center text-center"
          style="font-size: 54px; font-weight: 800; text-transform: capitalize"
        >
          Step By Step Of
        </h1>
        <h1
          class="text-center text-center"
          style="font-size: 54px; font-weight: 800; text-transform: capitalize"
        >
          How To Build The
          <span style="color: yellow">Perfect Product</span>
        </h1>
        <v-container
          class="mx-auto d-flex pt-12 vvv"
          style="min-height: 50vh; max-width: 100%"
        >
          <v-card
            v-for="(card, index) in Cards"
            :key="index"
            style="
              max-width: 400px;
              max-height: 400px;
              background-color: #232323;
            "
            class="rounded-xl pa-12 mx-auto justify-center align-center"
          >
            <v-img
              :src="card.Img"
              height="120"
              width="120"
              class="mx-auto hover-move"
            />
            <h2 class="text-center py-1">{{ card.title }}</h2>
            <p class="text-center py-4">
              {{ card.description }}
            </p>
            <v-container style="max-width: 80%" class="mx-auto">
              <div :class="`${card.color} pa-1 `" />
            </v-container>
          </v-card>
        </v-container>
        <div>
          <v-container>
            <h1
              class="text-center text-center"
              style="
                font-size: 54px;
                font-weight: 800;
                text-transform: capitalize;
              "
            >
              Top Clients <span style="color: yellow">Experiences</span> and
              <span style="color: yellow">Reviews</span>
            </h1>
            <v-container
              class="mx-auto d-flex pt-12 vvv"
              style="
                min-height: 50vh;
                max-width: 80%;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <v-card
                v-for="(card, index) in Reviews"
                :key="index"
                style="
                  max-width: 400px;
                  max-height: 400px;
                  background-color: #232323;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                "
                class="rounded-xl pa-12 mx-auto"
              >
                <v-avatar class="mx-auto d-flex justify-center" size="120">
                  <v-img
                    :src="card.Img"
                    height="500"
                    width="500"
                    rounded="50"
                    class="mx-auto hover-move"
                  />
                </v-avatar>

                <h2 class="text-center py-1">{{ card.title }}</h2>
                <p class="text-center py-4">
                  {{ card.description }}
                </p>
                <v-container style="max-width: 80%" class="mx-auto">
                  <div :class="`${card.color} pa-1 `" />
                </v-container>
              </v-card>
            </v-container>
          </v-container>
        </div>
      </v-container>
    </div>
    <FooterCompo />
  </div>
</template>

<script>
import AppExplorerBar from "@/components/ExploreUI/AppBar.vue";
import SildersExplorCompo from "@/components/ExploreUI/SildersExplorCompo.vue";
import FooterCompo from "@/components/HomeUI/FooterCompo.vue";
export default {
  components: { AppExplorerBar, SildersExplorCompo, FooterCompo },
  data() {
    return {
      Cards: [
        {
          Img: "https://i.ibb.co/zRLCBqt/thinking.png",
          title: "Identify and Understand Client Requirements",
          color: "bg-orange",
          description:
            "Identify and understand the specific needs and goals of the client. Ensure the solution is tailored to meet their expectations and business objectives.",
        },
        {
          Img: "https://i.ibb.co/jGdNMS0/figma.png",
          title: "Begin Designing the User Interface ",
          color: "bg-primary",
          description:
            "Begin designing the user interface with a focus on creating an intuitive and visually appealing experience. Ensure the layout aligns with the project goals.",
        },
        {
          Img: "https://i.ibb.co/Nt2QKRc/vscode.png",
          title: "Start Coding the Functionality",
          color: "bg-purple",
          description:
            "Start coding the functionality by implementing core features and ensuring smooth performance. Focus on clean, maintainable code.",
        },
        {
          Img: "https://i.ibb.co/qMSWYfv/happy.png",
          title: "Deploy the Fully Functional Product",
          color: "bg-yellow",
          description:
            "Deploy the fully functional product by ensuring all features are thoroughly tested. Make it live, accessible to users, and optimized  performance .",
        },
      ],
      Reviews: [
        {
          Img: "https://media.istockphoto.com/id/1175936207/photo/senior-italian-man-working-pizza-dough.jpg?s=612x612&w=0&k=20&c=EKqhrmd26TXLF59msAvE6_IkqCb8bGsWzhg5b-2Z7qk=",
          title: "Ernesto Garcia Lopez",
          color: "bg-orange",
          description:
            "I had the pleasure of working with this developer, and they exceeded all expectations. The project was completed on time, and their expertise in coding was evident. I couldn't be more satisfied with the outcome.",
        },
        {
          Img: "https://i.pinimg.com/736x/2f/4d/5d/2f4d5d044de02be1f92f569614272887.jpg",
          title: "Jack Edersone",
          color: "bg-primary",
          description:
            "As a client, I was thoroughly impressed with the developer's communication and technical skills. They took the time to understand my needs and delivered a solution that was both functional and user-friendly.",
        },
        {
          Img: "https://nativenewsonline.net/images/2022/_Mato_Wayuhi_Oglala_Lakota.jpg",
          title: "Steave Mato Wayuhi",
          color: "bg-purple",
          description:
            "My Guy has an exceptional ability to turn ideas into reality. From start to finish, the process was smooth, and the end result was exactly what I envisioned. I highly recommend their services for any development project.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-shades {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-home4.png");
  background-repeat: repeat;
  /* opacity: 0.5; */
}
</style>

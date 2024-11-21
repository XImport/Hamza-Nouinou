<template>
  <div>
    <AppBar />
    <div style="min-height: 50vh" class="bg-background bg-shades">
      <h1
        class="text-center text-center"
        style="font-size: 54px; font-weight: 800; text-transform: capitalize"
      >
        Explore My Core <span style="color: yellow">Technology Stack</span>
      </h1>
      <v-container class="container-text">
        <p class="text-center azeret-mono-font container-text text-grey">
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

        <v-container fluid class="pa-4">
          <v-row justify="center" align="center" class="mx-0">
            <v-col
              v-for="(card, index) in Cards"
              :key="index"
              cols="12"
              sm="6"
              md="3"
              lg="3"
              class="pa-2"
            >
              <v-card
                style="
                  background-color: #232323;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  height: 100%;
                "
                class="rounded-xl pa-4"
              >
                <v-img
                  :src="card.Img"
                  height="150"
                  width="150"
                  class="mx-auto hover-move"
                  cover
                />
                <h2
                  class="text-center py-1"
                  style="font-size: 18px; line-height: 1.5"
                >
                  {{ card.title }}
                </h2>
                <p
                  class="text-center py-4"
                  style="font-size: 14px; line-height: 1.6"
                >
                  {{ card.description }}
                </p>
                <div
                  :class="`${card.color} pa-1 width-80`"
                  style="width: 80%"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div>
          <v-container>
            <h1
              class="text-center"
              style="
                font-size: 54px;
                font-weight: 800;
                text-transform: capitalize;
              "
            >
              Top Clients <span style="color: yellow">Experiences</span> and
              <span style="color: yellow">Reviews</span>
            </h1>

            <v-row
              class="mx-auto pt-12"
              style="
                min-height: 50vh;
                justify-content: center;
                align-items: center;
              "
            >
              <v-col
                v-for="(card, index) in Reviews"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                class="d-flex justify-center align-center mb-5"
              >
                <v-card
                  style="
                    background-color: #232323;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    max-width: 100%;
                    padding: 16px;
                  "
                  class="rounded-xl"
                >
                  <v-avatar
                    class="mx-auto d-flex justify-center hover-move"
                    size="100"
                  >
                    <v-img
                      :src="card.Img"
                      height="200"
                      width="200"
                      rounded="50"
                      class="mx-auto"
                    />
                  </v-avatar>

                  <h2
                    class="text-center py-1"
                    style="font-size: 18px; line-height: 1.5; padding: 8px 0"
                  >
                    {{ card.title }}
                  </h2>
                  <p
                    class="text-center py-4"
                    style="font-size: 14px; line-height: 1.6; padding: 0 8px"
                  >
                    {{ card.description }}
                  </p>

                  <v-container style="max-width: 80%" class="mx-auto py-1">
                    <div :class="`${card.color} pa-1`" />
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
    <FooterCompo />
  </div>
</template>

<script>
import AppBar from "@/components/GlobalComponents/AppBar.vue";
import SildersExplorCompo from "@/components/ExploreUI/SildersExplorCompo.vue";
import FooterCompo from "@/components/GlobalComponents/FooterCompo.vue";
export default {
  components: { AppBar, SildersExplorCompo, FooterCompo },
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
            "Begin designing the user interface with a focus on creating an intuitive and visually appealing experience. Ensure the Perfect layout aligns Edges with the project goals.",
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

.hover-move {
  transition: transform 0.3s ease-in-out;
  position: relative;
}

/* Hover animation using keyframes */
@keyframes moveLeftRight {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  75% {
    transform: translatey(10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Apply animation on hover */
.hover-move:hover {
  animation: moveLeftRight 1.5s ease-in-out infinite;
}

/* Optional: Add a smooth transition when animation ends */
.hover-move:not(:hover) {
  transform: translateX(0);
  transition: transform 0.3s ease-out;
}

.container-text {
  max-width: 60%;
  margin: auto;
}

@media (max-width: 834px) {
  .container-text {
    max-width: 100%;
  }
}

.vvv {
  max-width: 100%;
  margin: auto !important;
}
@media (max-width: 600px) {
  .vvv {
    padding-top: 20px; /* Adjust top padding for mobile */
  }

  .v-card {
    max-width: 100%; /* Ensure cards take full width on mobile */
    max-height: 380px; /* Adjust card height for better fit on small screens */
  }
}

.azeret-mono-font {
  font-family: "Azeret Mono", monospace;
  font-size: 18px !important;
}
</style>

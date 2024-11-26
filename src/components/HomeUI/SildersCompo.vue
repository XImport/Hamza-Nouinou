<template>
  <!-- Previous template code remains the same -->
  <div
    :class="`carousel-container  container  ${ThemeMode}  `"
    style="min-height: 35vh"
  >
    <!-- --- Light Theme -->

    <v-btn
      v-if="$vuetify.theme.global.name === 'CustomLightTheme'"
      icon="mdi-chevron-left"
      variant="text"
      size="x-larger"
      :class="`navigation-arrow left-arrow-Light animate__animated animate__fadeIn animate__duration-2s animate__delay-1s ${currentClass} `"
      @click="prev"
    ></v-btn>

    <v-btn
      v-if="$vuetify.theme.global.name === 'CustomLightTheme'"
      icon="mdi-chevron-right"
      variant="text"
      size="x-larger"
      :class="`navigation-arrow right-arrow-Light animate__animated animate__fadeIn animate__duration-2s animate__delay-1s ${currentClass} `"
      @click="next"
    ></v-btn>

    <!-- -- --- Dark Theme -->

    <v-btn
      v-if="$vuetify.theme.global.name === 'CustomDarkTheme'"
      icon="mdi-chevron-left"
      variant="text"
      size="x-larger"
      :class="` navigation-arrow  left-arrow-Dark animate__animated animate__fadeIn  animate__duration-2s animate__delay-1s ${currentClass}  `"
      @click="prev"
    ></v-btn>
    {{ ArrowColorAnimation }}
    <v-btn
      v-if="$vuetify.theme.global.name === 'CustomDarkTheme'"
      icon="mdi-chevron-right"
      variant="text"
      size="x-larger"
      :class="`navigation-arrow right-arrow-Dark animate__animated animate__fadeIn animate__duration-2s animate__delay-1s ${currentClass} `"
      @click="next"
    ></v-btn>

    <div
      class="cards-wrapper animate__animated animate__fadeInUp animate__duration-2s"
    >
      <!-- ------ DarkMode Cards -->
      <v-card
        v-if="$vuetify.theme.global.name === 'CustomDarkTheme'"
        v-for="(card, index) in DarkModeCards"
        :key="index"
        class="nft-card pa-2"
        :class="getCardClass(index)"
      >
        <!-- Card content remains the same -->

        <v-img
          :src="card.Img"
          cover
          height="400"
          class="image-container"
          style="padding-left: 2%; padding-right: 2%"
        >
        </v-img>

        <div class="card-footer pa-4">
          <span class="text-subtitle-1 d-block text-center">{{
            card.title
          }}</span>
          <div class="d-flex align-center mt-1 justify-center mx-auto">
            <v-icon color="primary" size="small" class="mr-1 text-center"
              >mdi-heart</v-icon
            >
            <span class="text-center text-underline">{{ card.price }}</span>
          </div>
        </div>
      </v-card>
      <div
        class="bg-DominateColor EmptyDiv"
        v-if="$vuetify.theme.global.name === 'CustomLightTheme'"
      />
      <v-card
        v-if="$vuetify.theme.global.name === 'CustomLightTheme'"
        v-for="(card, index) in LightModeCards"
        :key="index"
        class="nft-card pa-2 bg-DominateColor"
        :class="getCardClass(index)"
      >
        <!-- Card content remains the same -->

        <v-img
          :src="card.Img"
          cover
          height="400"
          class="image-container"
          style="padding-left: 2%; padding-right: 2%"
        >
        </v-img>

        <div class="card-footer pa-4">
          <span class="text-subtitle-1 d-block text-center">{{
            card.title
          }}</span>
          <div class="d-flex align-center mt-1 justify-center mx-auto">
            <v-icon color="primary" size="small" class="mr-1 text-center"
              >mdi-heart</v-icon
            >
            <span class="text-center text-underline">{{ card.price }}</span>
          </div>
        </div>
      </v-card>

      <!-- ------ LightMode Cards -->

      <div class="background-images bg-shades d-none d-sm-flex">
        <div class="moving-img2 img-11">
          <img src="../../assets/Icons/flower.png" alt="logo" />
        </div>
        <div class="moving-img2 img-1 d-none d-sm-flex">
          <img src="../../assets/Icons/reactjs.png" alt="logo" width="50" />
        </div>
        <div class="moving-img2 img-2">
          <img
            src="https://themesflat.co/html/open9/assets/images/item-background/item5.png"
            alt="logo"
          />
        </div>
        <div class="moving-img2 img-3 d-none d-sm-flex">
          <img src="../../assets/Icons/android.png" alt="logo" width="50" />
        </div>
        <div class="moving-img2 img-4">
          <img src="../../assets/Icons/flower.png" alt="logo" />
        </div>

        <!-- Dots with Fade In and Fade Out -->
        <div class="fade-dots img-5 d-none d-sm-flex">
          <img src="../../assets/Icons/dots.png" alt="logo" />
        </div>
        <div class="fade-dots img-6 d-none d-sm-flex">
          <img src="../../assets/Icons/dots.png" alt="logo" />
        </div>
        <div class="fade-dots img-7 d-none d-sm-flex">
          <img src="../../assets/Icons/dots.png" alt="logo" />
        </div>

        <!-- More moving images -->
        <div class="moving-img2 img-8 d-none d-sm-flex">
          <img src="../../assets/Icons/css.png" alt="logo" width="40" />
        </div>
        <div class="moving-img2 img-9 d-none d-sm-flex">
          <img
            src="../../assets/Icons/vuejs.png"
            alt="logo"
            height="80"
            width="80"
          />
        </div>
        <div class="moving-img2 img-10 d-none d-sm-flex">
          <img
            src="../../assets/Icons/nuxt.png"
            alt="logo"
            height="50"
            width="50"
          />
        </div>
      </div>
    </div>

    <div
      class="pagination-container"
      v-if="$vuetify.theme.global.name == 'CustomDarkTheme'"
    >
      <div
        v-for="n in totalPages"
        :key="n"
        class="pagination-dot-Dark"
        :class="{ active: currentIndex === n - 1 }"
        @click="currentIndex = n - 1"
      ></div>
    </div>
    <div
      class="pagination-container"
      v-if="$vuetify.theme.global.name == 'CustomLightTheme'"
    >
      <div
        v-for="n in totalPages"
        :key="n"
        class="pagination-dot-Light"
        :class="{ active: currentIndex === n - 1 }"
        @click="currentIndex = n - 1"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardCarousel",
  data() {
    return {
      currentIndex: 0,
      currentClass: "text-white",
      DarkModeCards: [
        {
          image: "Gym.jpg",
          title: "Gym WebSite",
          price: "9/10",
          Img: "https://i.pinimg.com/736x/bc/13/34/bc133461ff9e73cd0f526cce750b83d4.jpg",
        },
        {
          image: "owl.jpg",
          title: "Barbber Shop",
          price: "8.5/10",
          Img: "https://i.pinimg.com/736x/94/ae/55/94ae55c1f332ccd3db689f29b7a2ed25.jpg",
        },
        {
          image: "owl.jpg",
          title: "Construction Work Shop",
          price: "10/10",
          Img: "https://i.pinimg.com/736x/8a/01/1c/8a011c2dc9f49698029448accb6a291c.jpg",
        },
        {
          image: "owl.jpg",
          title: "E Commerce Site",
          price: "10/10",
          Img: "https://i.pinimg.com/736x/20/9d/c7/209dc70010121e950dc61299013dc1c2.jpg",
        },
        {
          image: "owl.jpg",
          title: "WebMedia Digital Agency",
          price: "9.2/10",
          Img: "https://i.pinimg.com/736x/5e/19/b5/5e19b56ea73458169a0542a49e8b06d8.jpg",
        },
        {
          image: "owl.jpg",
          title: "All In One United",
          price: "10/10",
          Img: "https://i.pinimg.com/736x/ff/7c/91/ff7c9142d0ea572ecda608b3cc4be457.jpg",
        },
        {
          image: "owl.jpg",
          title: "Men's Barber",
          price: "8.3/10",
          Img: "https://i.pinimg.com/736x/bf/01/92/bf019263d0cce2bb3afe973bfb893c73.jpg",
        },
        // Add more cards...
      ],
      LightModeCards: [
        {
          image: "Gym.jpg",
          title: "E-Commerce Site",
          price: "9/10",
          Img: "https://i.pinimg.com/control2/736x/47/cd/8d/47cd8d1d0313441a65fd8187a36e0250.jpg",
        },
        {
          image: "owl.jpg",
          title: "House Equipments Site",
          price: "8.5/10",
          Img: "https://i.pinimg.com/736x/2e/04/14/2e041465f00802136e7f700d42d6c9ee.jpg",
        },
        {
          image: "owl.jpg",
          title: "Construction Work Shop",
          price: "10/10",
          Img: "https://i.pinimg.com/736x/8a/01/1c/8a011c2dc9f49698029448accb6a291c.jpg",
        },
        {
          image: "owl.jpg",
          title: "E Commerce Site",
          price: "10/10",
          Img: "https://i.pinimg.com/736x/20/9d/c7/209dc70010121e950dc61299013dc1c2.jpg",
        },
        {
          image: "owl.jpg",
          title: "WebMedia Digital Agency",
          price: "9.2/10",
          Img: "https://i.pinimg.com/736x/5e/19/b5/5e19b56ea73458169a0542a49e8b06d8.jpg",
        },
        {
          image: "owl.jpg",
          title: "All In One United",
          price: "10/10",
          Img: "https://i.pinimg.com/736x/ff/7c/91/ff7c9142d0ea572ecda608b3cc4be457.jpg",
        },
        {
          image: "owl.jpg",
          title: "Sneakers Shop",
          price: "8.3/10",
          Img: "https://i.pinimg.com/control2/736x/6a/69/bb/6a69bbf64c16711603f507809d46dd9b.jpg",
        },
        // Add more cards...
      ],
    };
  },
  computed: {
    totalPages() {
      if (this.$vuetify.theme.global.name == "CustomLightTheme") {
        return this.LightModeCards.length;
      }
      return this.DarkModeCards.length;
    },
    ThemeMode() {
      // Return a class name based on the current theme
      return this.$vuetify.theme.global.name === "CustomLightTheme"
        ? "bg-lines-light"
        : "bg-lines-dark";
    },
    arrowColor() {
      // Return the class based on the currentClass data property
      return this.currentClass;
    },
  },
  created() {
    this.startAnimation(this.$vuetify.theme.global.name);
  },
  methods: {
    startAnimation(ThemeMode) {
      if (ThemeMode === "CustomDarkTheme") {
        this.currentClass = "text-yellow";
        setTimeout(() => {
          this.currentClass = "text-white";
        }, 3000);
      }

      if (ThemeMode === "CustomLightTheme") {
        this.currentClass = "text-blue";
        setTimeout(() => {
          this.currentClass = "text-black";
        }, 3000);
      }
    },

    getCardClass(index) {
      const position =
        (index - this.currentIndex + this.totalPages) % this.totalPages;

      return {
        "is-active": position === 0,
        "is-previous": position === this.totalPages - 1,
        "is-next": position === 1,
        "is-far-previous": position === this.totalPages - 2,
        "is-far-next": position === 2,
        "is-far-previous-2": position === this.totalPages - 3,
        "is-far-next-2": position === 3,
      };
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.totalPages;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.totalPages) % this.totalPages;
    },
  },
};
</script>

<style scoped>
/* Previous styles remain the same */
.carousel-container {
  position: relative;

  padding: 10px 0;

  perspective: 1000px;
  overflow: hidden;
  height: 600px !important;
  /* padding-bottom: 20%; */
  /* background-color: #ddf247 !important; */
}

.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
}
.cards-wrapper {
  position: relative;
  height: 100%;
  z-index: 20;
  width: 100%;
  transform-style: preserve-3d;
  margin-top: -1%;
}

.nft-card {
  position: absolute;
  width: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  border-radius: 16px;
  /* background: #161616; */
}

/* Updated transform values for card positions */
.is-active {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  z-index: 5;
}

.v-card {
  margin-right: 50px !important;
}

.is-previous {
  opacity: 1;
  transform: translate(-100%, -50%) scale(0.9) rotateY(10deg); /* Adjusted left position */
  z-index: 4;
}

.is-next {
  opacity: 1;
  transform: translate(0%, -50%) scale(0.9) rotateY(-10deg); /* Adjusted right position */
  z-index: 4;
}

.is-far-previous {
  opacity: 1;
  transform: translate(-150%, -50%) scale(0.8) rotateY(20deg); /* Adjusted far left position */
  z-index: 3;
}

.is-far-next {
  opacity: 1;
  transform: translate(50%, -50%) scale(0.8) rotateY(-20deg); /* Adjusted far right position */
  z-index: 3;
}

/* Additional transform for extra cards if needed */
.is-hidden {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.7);
  pointer-events: none;
}

/* Rest of the styles remain the same */
.timer-overlay {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
}

.is-far-previous-2 {
  opacity: 1;
  transform: translate(-200%, -50%) scale(0.7) rotateY(30deg); /* Adjust position and scale */
  z-index: 2;
}

.is-far-next-2 {
  opacity: 1;
  transform: translate(100%, -50%) scale(0.7) rotateY(-30deg); /* Adjust position and scale */
  z-index: 2;
}

.heart-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
}

.image-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.7));
  z-index: 1;
}

.bid-button {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.is-active:hover .bid-button {
  opacity: 1;
}

.navigation-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 30px;
  /* padding: 2%; */
}

/* ----------------- Dark Theme  */

.left-arrow-Dark {
  left: 20px;
  align-items: center;
  margin-left: 10%;

  /* background-color: transparent; */
}

.left-arrow-Dark-Changer {
  background-color: #ddf247;
  color: aqua;
}

.left-arrow-Dark:hover {
  background-color: #ddf247 !important;
}

.right-arrow-Dark {
  right: 20px;
  margin-right: 10%;
}

.right-arrow-Dark:hover {
  background-color: #ddf247 !important;
}

/* ------------------ Light Theme */
.left-arrow-Light {
  left: 20px;
  align-items: center;
  margin-left: 10%;
}

.left-arrow-Light:hover {
  background-color: #0e0b72 !important;
  color: white;
}

.right-arrow-Light {
  right: 20px;
  margin-right: 10%;
}

.right-arrow-Light:hover {
  background-color: #0e0b72 !important;
  color: white;
}

/* ----------------- End Theme */

.right-arrow {
  right: 20px;
  margin-right: 10%;
}

.pagination-container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  /* background-color: #ddf247; */
}

.pagination-dot-Dark {
  width: 24px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-dot-Dark.active {
  background: #ddf247;
  width: 32px;
}

.pagination-dot-Light {
  width: 24px;
  height: 4px;
  background: rgba(55, 55, 175, 0.3);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-dot-Light.active {
  background: #0c0a2f;
  width: 32px;
}

.EmptyDiv {
  height: 30vh;
  border-radius: 0 0 50% 50%; /* Curve only the bottom corners */
}
@media (max-width: 960px) {
  .carousel-container {
    overflow-x: hidden !important;
    /* background-color: aqua !important; */
  }
  .nft-card {
  }
  .v-img {
    /* width: 100%; */
    /* height: 100%; */
  }
}

/* Mobile vIEW  */

@media (max-width: 668px) {
  .carousel-container {
    overflow-x: hidden !important;
    /* background-color: aqua !important; */
  }
  .nft-card {
    /* background-color: #ddf247; */
    width: 70%;

    /* background-color: #232323; */

    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    margin: auto !important;
  }
  .v-img {
    width: 100%;
    height: 100%;
  }
  .EmptyDiv {
    height: 30vh;
    border-radius: 0 0 50% 50%; /* Curve only the bottom corners */
    margin-top: -15%;
    width: 100%;
  }
}

.left-arrow-Dark-Changer {
  background-color: #ddf247;
}
/* Moving images animations */
.moving-img2 {
  position: absolute;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0.6;
  /* filter: blur(1px); */
  transition: all 0.3s ease;
}

.moving-img2:hover {
  opacity: 1;
  /* filter: blur(0); */
}

.fade-dots {
  position: absolute;
  opacity: 0.3;
  animation: fadeInOut 4s ease-in-out infinite;
}

/* Animation keyframes for different positions */
@keyframes moveImg1 {
  0%,
  100% {
    top: 88%;
    left: 78%;
    transform: translateY(-10px);
  }
  50% {
    top: 89%;
    left: 80%;
    transform: translateY(10px);
  }
}

@keyframes moveImg2 {
  0%,
  100% {
    top: 78%;
    left: 90%;
    transform: rotate(0deg);
  }
  50% {
    top: 80%;
    left: 90%;
    transform: rotate(10deg);
  }
}

@keyframes moveImg3 {
  0%,
  100% {
    top: 85%;
    left: 15%;
    transform: scale(1);
  }
  50% {
    top: 87%;
    left: 8%;
    transform: scale(1.1);
  }
}

@keyframes moveImg4 {
  0%,
  100% {
    top: 65%;
    left: 15%;
    transform: translateX(-5px);
  }
  50% {
    top: 70%;
    left: 17%;
    transform: translateX(5px);
  }
}

@keyframes moveImg5 {
  0%,
  100% {
    top: 87%;
    left: 25%;
    opacity: 0.2;
  }
  50% {
    top: 90%;
    left: 27%;
    opacity: 0.6;
  }
}

@keyframes moveImg6 {
  0%,
  100% {
    top: 55%;
    left: 60%;
    transform: scale(0.9);
  }
  50% {
    top: 59%;
    left: 62%;
    transform: scale(1);
  }
}

@keyframes moveImg7 {
  0%,
  100% {
    top: 75%;
    left: 40%;
    transform: rotate(-5deg);
  }
  50% {
    top: 80%;
    left: 42%;
    transform: rotate(5deg);
  }
}

@keyframes moveImg8 {
  0%,
  100% {
    top: 15%;
    left: 90%;
    transform: translateY(-8px);
  }
  50% {
    top: 10%;
    left: 88%;
    transform: translateY(8px);
  }
}

@keyframes moveImg9 {
  0%,
  100% {
    top: 20%;
    left: 5%;
    transform: scale(1) rotate(0deg);
  }
  50% {
    top: 25%;
    left: 7%;
    transform: scale(1.1) rotate(10deg);
  }
}

@keyframes moveImg10 {
  0%,
  100% {
    top: 97%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    top: 98%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes moveImg11 {
  0%,
  100% {
    top: 55%;
    left: 85%;
    transform: rotate(-10deg);
  }
  50% {
    top: 58%;
    left: 87%;
    transform: rotate(10deg);
  }
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.4;
  }
}

/* Apply animations to specific elements */
.img-1 {
  animation-name: moveImg1;
}
.img-2 {
  animation-name: moveImg2;
}
.img-3 {
  animation-name: moveImg3;
}
.img-4 {
  animation-name: moveImg4;
}
.img-5 {
  animation-name: moveImg5;
}
.img-6 {
  animation-name: moveImg6;
}
.img-7 {
  animation-name: moveImg7;
}
.img-8 {
  animation-name: moveImg8;
}
.img-9 {
  animation-name: moveImg9;
}
.img-10 {
  animation-name: moveImg10;
}
.img-11 {
  animation-name: moveImg11;
}

@media (max-width: 740px) {
  .cards-wrapper {
    padding: 0% !important ;
  }
}
</style>

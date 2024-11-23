<template>
  <!-- Previous template code remains the same -->
  <div class="services-wrapper bg-shades">
    <!-- Moving images as background -->
    <div class="background-images bg-shades">
      <div class="moving-img img-11">
        <img src="../../assets/Icons/flower.png" alt="logo" />
      </div>
      <div class="moving-img img-1 d-none d-sm-flex">
        <img src="../../assets/Icons/blo.png" alt="logo" />
      </div>
      <div class="moving-img img-2 d-none d-sm-flex">
        <img
          src="https://themesflat.co/html/open9/assets/images/item-background/item5.png"
          alt="logo"
        />
      </div>
      <div class="moving-img img-3 d-none d-sm-flex">
        <img src="../../assets/Icons/css.png" alt="logo" width="50" />
      </div>
      <div class="moving-img img-4">
        <img src="../../assets/Icons/flower.png" alt="logo" />
      </div>

      <!-- Dots with Fade In and Fade Out -->
      <div class="fade-dots img-5">
        <img src="../../assets/Icons/dots.png" alt="logo" />
      </div>
      <div class="fade-dots img-6">
        <img src="../../assets/Icons/dots.png" alt="logo" />
      </div>
      <div class="fade-dots img-7">
        <img src="../../assets/Icons/dots.png" alt="logo" />
      </div>

      <!-- More moving images -->
      <div class="moving-img img-8 d-none d-sm-flex">
        <img src="../../assets/Icons/nft.png" alt="logo" width="80" />
      </div>
      <div class="moving-img img-9 d-none d-sm-flex">
        <img
          src="../../assets/Icons/nft.png"
          alt="logo"
          height="80"
          width="80"
        />
      </div>
      <div class="moving-img img-10 d-none d-sm-flex">
        <img
          src="../../assets/Icons/nuxt.png"
          alt="logo"
          height="50"
          width="50"
        />
      </div>
    </div>

    <!-- Services component -->

    <div class="carousel-container bg-shades">
      <v-btn
        icon="mdi-chevron-left"
        variant="text"
        size="x-larger"
        color="white"
        class="navigation-arrow left-arrow"
        @click="prev"
      ></v-btn>

      <v-btn
        icon="mdi-chevron-right"
        variant="text"
        color="white"
        size="x-larger"
        class="navigation-arrow right-arrow"
        @click="next"
      ></v-btn>

      <div class="cards-wrapper">
        <v-card
          v-for="(card, index) in cards"
          :key="index"
          height="100%"
          class="nft-card pa-2 black"
          :class="getCardClass(index)"
        >
          <!-- Card content remains the same -->

          <v-img
            :src="card.Img"
            cover
            height="400"
            width="300"
            class="image-container mx-auto"
            style="padding-left: 10%; margin-right: 10%"
          >
          </v-img>

          <div class="card-footer pa-4">
            <span class="text-white text-subtitle-1 d-block text-center">{{
              card.title
            }}</span>
            <div class="d-flex align-center mt-1 justify-center mx-auto">
              <span class="text-white text-center text-underline">{{
                card.price
              }}</span>
            </div>
          </div>
        </v-card>
      </div>

      <div class="pagination-container">
        <div
          v-for="n in totalPages"
          :key="n"
          class="pagination-dot"
          :class="{ active: currentIndex === n - 1 }"
          @click="currentIndex = n - 1"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Script remains the same
import { ref, computed } from "vue";

const currentIndex = ref(0);
const cards = ref([
  {
    image: "Gym.jpg",
    title: "JavaScript",
    price: "JavaScript is a versatile, dynamic,interactive language.",
    Img: "https://i.ibb.co/qkDzckZ/js.png",
  },
  {
    image: "owl.jpg",
    title: "Css",
    price: "CSS is a flexible, powerful, and styling language for web design.",
    Img: "https://i.ibb.co/9VSp58F/css.png",
  },

  {
    image: "owl.jpg",
    title: "VueJS",
    price: "Vue.js is a progressive, reactive, and component-based framework.",
    Img: "https://i.ibb.co/JtxSckG/vuejs.png",
  },
  {
    image: "owl.jpg",
    title: "ReactJS",
    price:
      "React.js is a declarative, efficient, and flexible JavaScript library.",
    Img: "https://i.ibb.co/MGK7BMV/reactjs.png",
  },
  {
    image: "owl.jpg",
    title: "Python",
    price:
      "Python is a versatile, powerful, and easy-to-learn programming language.",
    Img: "https://i.ibb.co/qMsNhRg/python.png",
  },
  {
    image: "owl.jpg",
    title: "Visual Basic",
    price:
      "for Applications (VBA) is a subset of Visual Basic integrated into Excel.",
    Img: "https://i.ibb.co/9GwC73W/visualbasic.png",
  },

  {
    image: "owl.jpg",
    title: "C Sharp",
    price:
      "C# is a modern, object-oriented, and type-safe programming language.",
    Img: "https://i.ibb.co/Vg8NSLV/csharp.png",
  },
  {
    image: "owl.jpg",
    title: "SQL DataBase",
    price: "SQL is a powerful, structured, and query-based database language.",
    Img: "https://i.ibb.co/7QfyW5b/sql.png",
  },

  // Add more cards...
]);

const totalPages = computed(() => cards.value.length);

const getCardClass = (index) => {
  const position =
    (index - currentIndex.value + totalPages.value) % totalPages.value;

  return {
    "is-active": position === 0,
    "is-previous": position === totalPages.value - 1,
    "is-next": position === 1,
    "is-far-previous": position === totalPages.value - 2,
    "is-far-next": position === 2,
    "is-far-previous-2": position === totalPages.value - 3,
    "is-far-next-2": position === 3,
  };
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % totalPages.value;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalPages.value) % totalPages.value;
};
</script>

<style scoped>
.bg-shades {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-home4.png");
  background-repeat: repeat;
  /* opacity: 0.5; */
}

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

.cards-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  margin-top: -2%;
}

.nft-card {
  position: absolute;
  width: 400px;
  /* height: ; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  border-radius: 16px;
  background: #000000;
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
  z-index: 10;
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 30px;
  /* padding: 2%; */
}

.left-arrow {
  left: 20px;
  align-items: center;
  margin-left: 2%;
}

.left-arrow:hover {
  background-color: #ddf247 !important;
}

.right-arrow:hover {
  background-color: #ddf247 !important;
}

.right-arrow {
  right: 20px;
  margin-right: 2%;
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

.pagination-dot {
  width: 24px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-dot.active {
  background: #ddf247;
  width: 32px;
}

/* Moving images animations */
.moving-img {
  position: absolute;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0.6;
  /* filter: blur(1px); */
  transition: all 0.3s ease;
}

.moving-img:hover {
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
    top: 83%;
    left: 70%;
    transform: translateY(-10px);
  }
  50% {
    top: 85%;
    left: 80%;
    transform: translateY(10px);
  }
}

@keyframes moveImg2 {
  0%,
  100% {
    top: 10%;
    left: 95%;
    transform: rotate(0deg);
  }
  50% {
    top: 8%;
    left: 90%;
    transform: rotate(10deg);
  }
}

@keyframes moveImg3 {
  0%,
  100% {
    top: 40%;
    left: 15%;
    transform: scale(1);
  }
  50% {
    top: 47%;
    left: 8%;
    transform: scale(1.1);
  }
}

@keyframes moveImg4 {
  0%,
  100% {
    top: 30%;
    left: 15%;
    transform: translateX(-5px);
  }
  50% {
    top: 32%;
    left: 17%;
    transform: translateX(5px);
  }
}

@keyframes moveImg5 {
  0%,
  100% {
    top: 15%;
    left: 25%;
    opacity: 0.2;
  }
  50% {
    top: 17%;
    left: 27%;
    opacity: 0.6;
  }
}

@keyframes moveImg6 {
  0%,
  100% {
    top: 25%;
    left: 60%;
    transform: scale(0.9);
  }
  50% {
    top: 27%;
    left: 62%;
    transform: scale(1);
  }
}

@keyframes moveImg7 {
  0%,
  100% {
    top: 40%;
    left: 40%;
    transform: rotate(-5deg);
  }
  50% {
    top: 42%;
    left: 42%;
    transform: rotate(5deg);
  }
}

@keyframes moveImg8 {
  0%,
  100% {
    top: 85%;
    left: 10%;
    transform: translateY(-8px);
  }
  50% {
    top: 90%;
    left: 5%;
    transform: translateY(8px);
  }
}

@keyframes moveImg9 {
  0%,
  100% {
    top: 22%;
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
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes moveImg11 {
  0%,
  100% {
    top: 30%;
    left: 85%;
    transform: rotate(-10deg);
  }
  50% {
    top: 32%;
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

/* Font styles */
.manrope-font {
  font-family: "Manrope", sans-serif;
}

.azeret-mono-font {
  font-family: "Azeret Mono", monospace;
}

/* Button styles */
.DiscoverButton {
  background-color: #ddf247;
  transition: background-color 0.3s ease-in-out;
}

.DiscoverButton:hover {
  background-color: #fff;
}

.CollectionButton {
  background-color: white;
  transition: background-color 0.3s ease-in-out;
}

.CollectionButton:hover {
  background-color: #ffeb3b;
}

/* Background styles */
.bg-background {
  background: radial-gradient(circle at center, #121212, #0a0a0a);
}

/* Services component positioning */
:deep(.ServicesCompo) {
  position: relative;
  z-index: 1;
}
</style>

<template>
  <!-- Previous template code remains the same -->

  <div class="carousel-container container">
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
        class="nft-card pa-2 black"
        :class="getCardClass(index)"
      >
        <!-- Card content remains the same -->

        <v-img
          :src="card.Img"
          cover
          height="400"
          class="image-container"
          style="padding-left: 10%;margin-right;: 10%"
        >
        </v-img>

        <div class="card-footer pa-4">
          <span
            class="text-white text-subtitle-1 d-block text-center"
            style="font-size: 25px !important"
            >{{ card.title }}</span
          >
          <div class="d-flex align-center mt-1 justify-center mx-auto">
            <v-rating
              hover
              :length="5"
              :size="32"
              :model-value="5"
              active-color="primary"
            />
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
</template>

<script setup>
// Script remains the same
import { ref, computed } from "vue";

const currentIndex = ref(0);
const cards = ref([
  {
    image: "Gym.jpg",
    title: "Web Development",
    price: "9/10",
    Img: "https://i.pinimg.com/736x/ad/02/12/ad02120ba7161dcaed70b45b17b6dbb0.jpg",
  },
  {
    image: "owl.jpg",
    title: "Desktop Applications",
    price: "8.5/10",
    Img: "https://i.pinimg.com/736x/7f/09/38/7f093826903ef6b4150a38627b1d7bd5.jpg",
  },

  {
    image: "owl.jpg",
    title: "Mobile Applications",
    price: "10/10",
    Img: "https://i.pinimg.com/736x/ec/c4/aa/ecc4aab161156ed08dd39416a3373f41.jpg",
  },
  {
    image: "owl.jpg",
    title: "Scripts Automations",
    price: "10/10",
    Img: "https://i.pinimg.com/736x/c6/1c/3f/c61c3fee0280c5494ef569318c945fcf.jpg",
  },
  {
    image: "owl.jpg",
    title: "Excel Sheets",
    price: "9.2/10",
    Img: "https://i.pinimg.com/736x/1c/85/ab/1c85ab54a80d41dbb773982eaa9f2e86.jpg",
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
/* Previous styles remain the same */
.carousel-container {
  position: relative;

  padding: 10px 0;

  perspective: 1000px;
  overflow: hidden;
  height: 600px !important;
  /* padding-bottom: 20%; */
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
  width: 450px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  border-radius: 16px;
  background: #000000;
  height: 100%;
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
  margin-left: 8%;
}

.left-arrow:hover {
  background-color: #ddf247 !important;
}

.right-arrow:hover {
  background-color: #ddf247 !important;
}

.right-arrow {
  right: 20px;
  margin-right: 8%;
}

.pagination-container {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
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
</style>

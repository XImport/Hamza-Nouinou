<template>
  <div class="bg-background bg-lines">
    <div class="justify-center align-center">
      <v-container>
        <v-row>
          <v-col cols="12" class="text-wrap">
            <h1
              class="text-center manrope-font-title"
              style="
                font-size: 54px;
                font-weight: 800;
                text-transform: capitalize;
              "
            >
              Your Gateway to Innovative
              <span style="color: yellow">Solutions!</span>
            </h1>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="Buttons-container">
        <p class="text-center azeret-mono-font container-text text-grey">
          Welcome to the world of rare digital art. Explore the best art from
          hand-picked digital artists out there and find the hidden gem.
        </p>
      </v-container>
      <!-- Moving images -->
      <div class="moving-img img-11">
        <img src="../../assets/Icons/flower.png" alt="logo" />
      </div>
      <div class="moving-img img-1">
        <img src="../../assets/Icons/rounded.png" alt="logo" />
      </div>
      <div class="moving-img img-2">
        <img
          src="https://themesflat.co/html/open9/assets/images/item-background/item5.png"
          alt="logo"
        />
      </div>
      <div class="moving-img img-3">
        <img src="../../assets/Icons/bitcoin.png" alt="logo" width="50" />
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
      <div class="moving-img img-8">
        <img src="../../assets/Icons/python.png" alt="logo" width="50" />
      </div>
      <div class="moving-img img-9">
        <img
          src="../../assets/Icons/js.png"
          alt="logo"
          height="50"
          width="50"
        />
      </div>
      <div class="moving-img img-10">
        <img
          src="../../assets/Icons/nuxt.png"
          alt="logo"
          height="50"
          width="50"
        />
      </div>
      <v-row class="my-2 mx-auto" justify="center" align="center">
        <v-col cols="auto">
          <v-btn
            class="bg-primary d-flex align-center justify-center rounded-lg manrope-font pa-6 DiscoverButton"
            style="
              font-size: 14px;
              font-weight: 800;
              text-transform: capitalize;
            "
          >
            Discover More <v-icon class="ml-2">mdi-arrow-top-right</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            block
            class="bg-secondary d-flex align-center justify-center rounded-lg manrope-font pa-6 CollectionButton"
            style="
              font-size: 14px;
              font-weight: 800;
              text-transform: capitalize;
            "
          >
            All Collections <v-icon class="ml-2">mdi-arrow-top-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Blink effect for the cursor */
.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
  min-height: 35vh;
}

/* Typing effect */
.typing-effect {
  font-family: "Manrope", sans-serif;
  font-size: 54px;
  font-weight: 800;
  overflow: hidden; /* Hides the part of the text that is not yet typed */
  white-space: nowrap; /* Prevents the text from wrapping */
  border-right: 3px solid #fff; /* Creates a cursor effect */
  display: inline-block; /* Keeps the text inline */
  width: 0; /* Initially set width to 0 to start from the center */
  animation: typing 2s steps(40) 0.5s 1 normal forwards,
    blink-caret 0.2s step-end infinite; /* Faster typing effect */
  text-align: center; /* Keep the text centered */
  position: relative;
  left: 50%; /* Start the text from the center */
  transform: translateX(-50%); /* Center the text horizontally */
}

/* Typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 10%;
  }
}

/* Blink effect for the cursor */
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

.DiscoverButton {
  background-color: #ddf247;
  transition: background-color 0.3s ease-in-out; /* Ensure smooth transition */
}

.DiscoverButton:hover {
  background-color: #fff; /* Change to white on hover */
}

.CollectionButton {
  background-color: white;
  transition: background-color 0.3s ease-in-out; /* Ensure smooth transition */
}

.CollectionButton:hover {
  background-color: #ffeb3b; /* Change to yellow on hover */
}

/* The rest of your styles remain the same */
.bg-background {
  background-color: #121212;
}

.bg-primary {
  background-color: #1976d2;
}

.manrope-font {
  font-family: "Manrope", sans-serif;
}

.azeret-mono-font {
  font-family: "Azeret Mono", monospace;
  font-size: 18px !important;
}

@media only screen and (max-width: 868px) {
  .container--text {
    max-width: 100%;
    margin: auto;
  }
  .Buttons-container {
    max-width: 100% !important;
  }
}

@keyframes moveImg1 {
  0%,
  100% {
    top: 15%;
    left: 70%;
  }
  50% {
    top: 18%;
    left: 68%;
  }
}

@keyframes moveImg2 {
  0%,
  100% {
    top: 25%;
    left: 70%;
  }
  50% {
    top: 28%;
    left: 72%;
  }
}

@keyframes moveImg3 {
  0%,
  100% {
    top: 35%;
    left: 25%;
  }
  50% {
    top: 40%;
    left: 28%;
  }
}

@keyframes moveImg4 {
  0%,
  100% {
    top: 35%;
    left: 15%;
  }
  50% {
    top: 36%;
    left: 17%;
  }
}

@keyframes moveImg5 {
  0%,
  100% {
    top: 15%;
    left: 25%;
  }
  50% {
    top: 16%;
    left: 27%;
  }
}

@keyframes moveImg6 {
  0%,
  100% {
    top: 25%;
    left: 60%;
  }
  50% {
    top: 26%;
    left: 62%;
  }
}

@keyframes moveImg7 {
  0%,
  100% {
    top: 40%;
    left: 40%;
  }
  50% {
    top: 42%;
    left: 52%;
  }
}

@keyframes moveImg8 {
  0%,
  100% {
    top: 50%;
    left: 65%;
  }
  50% {
    top: 51%;
    left: 67%;
  }
}

@keyframes moveImg9 {
  0%,
  100% {
    top: 10%;
    left: 30%;
  }
  50% {
    top: 13%;
    left: 37%;
  }
}

@keyframes moveImg10 {
  0%,
  100% {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  50% {
    top: 44%;
    left: 50%;
  }
}

@keyframes moveImg11 {
  0%,
  100% {
    top: 30%;
    left: 85%;
  }
  50% {
    top: 32%;
    left: 87%;
  }
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.moving-img {
  position: absolute;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.fade-dots {
  position: absolute;
  animation-name: fadeInOut;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

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

@media only screen and (max-width: 1440px) {
  .moving-img,
  .fade-dots {
    display: none;
  }
}

@media only screen and (max-width: 1024px) {
  .typing-effect {
    font-size: 36px !important;
    width: 80% !important;
  }

  v-container {
    width: 80% !important;
  }

  v-row {
    max-width: 90% !important;
  }
}

@media only screen and (max-width: 768px) {
  .bg-lines {
    min-height: 50vh !important;
  }

  .typing-effect {
    font-size: 28px !important;
    width: 90% !important;
  }

  v-container {
    width: 90% !important;
  }

  v-row {
    max-width: 100% !important;
    flex-direction: column;
    align-items: center;
  }

  v-col {
    margin-bottom: 10px;
    width: 100%;
    flex: 0px !important;
  }

  v-btn {
    width: 100%;
  }
  .manrope-font-title {
    font-size: 35px !important;
  }
}
@media only screen and (max-width: 868px) {
  .container--text {
    max-width: 100%;
    margin: auto;
  }
}
.text-wrap {
  white-space: normal; /* Allows text to wrap */
  overflow-wrap: break-word; /* Ensures words break at appropriate places */
  max-width: 100%; /* Constrain width to prevent overflow */
}

.Buttons-container {
  max-width: 40%;
}

@media only screen and (max-width: 480px) {
  .typing-effect {
    font-size: 22px !important;
  }

  v-container {
    width: 95% !important;
  }

  .bg-lines {
    min-height: 60vh !important;
  }
  .Buttons-container {
    max-width: 100%;
  }
  .bg-lines {
    background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
    /* background-position: center; */
    background-repeat: repeat;
    min-height: 8vh !important;
  }
}

/* container-responsivity */

.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  display: inline-block;
  animation: typing 2s steps(40) 0.5s 1 normal forwards,
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 40%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

/* Responsive Animations */
@keyframes moveElement {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 10px);
  }
}

.moving-img {
  position: absolute;
  width: 50px;
  height: 50px;
  animation: moveElement 6s ease-in-out infinite;
  opacity: 0.7;
}

/* Responsive Breakpoints */
@media (max-width: 600px) {
  .typing-effect {
    font-size: 2.5rem !important;
  }

  .v-btn {
    width: 100%;
    margin-bottom: 10px;
  }

  /* Hide moving images on very small screens */
  .animated-elements {
    display: none;
  }
  .v-col {
    flex: 0 !important;
  }
  .v-row {
    display: block !important;
  }
}

/* Hover Effects */
.v-btn:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* animation from here  */

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
</style>

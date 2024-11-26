<template>
  <div class="bg-background bg-lines bg-DominateColor" style="min-height: 35vh">
    <div
      class="justify-center align-center py-2"
      style="overflow-x: hidden !important"
    >
      <v-container fluid class="page-container">
        <v-row no-gutters justify="center" align="center" class="text-center">
          <v-col cols="12">
            <h1
              class="text-center manrope-font-title"
              style="
                font-size: 54px;
                font-weight: 800;
                text-transform: capitalize;
                z-index: 9 !important;
              "
            >
              <TypingEffect
                :segments="[
                  {
                    text: 'Maximize Your Brand ',
                    class: '',
                  },
                  {
                    text: 'Visibility',
                    class: 'text-primary',
                    style: { display: 'inline-block' },
                  },
                ]"
                :speed="50"
                :loop="false"
              />
            </h1>

            <v-container
              class="description-container"
              :class="{
                'px-4': $vuetify.display.smAndDown,
                'px-16': $vuetify.display.mdAndUp,
              }"
            >
              <p
                class="text-center azeret-mono-font container-text text-grey animate__animated animate__fadeInUp animate__duration-2s"
              >
                Boost your visibility and stand out with strategies that attract
                the right audience and amplify your reach.
              </p>
            </v-container>
          </v-col>
        </v-row>
      </v-container>

      <v-container
        class="iphone d-none d-lg-flex"
        v-if="$vuetify.theme.global.name == 'CustomDarkTheme'"
      >
        <v-img
          src="https://themesflat.co/html/open9/assets/images/box-icon/iphone.png"
          class="phone-image"
          contain
          height="600"
          style="z-index: -5 !important"
        />
      </v-container>

      <v-container
        class="iphone d-none d-lg-flex"
        v-if="$vuetify.theme.global.name == 'CustomLightTheme'"
      >
        <v-img
          src="https://html.hixstudio.net/collax/collax/assets/img/hero/hero-4.png"
          class="phone-image"
          contain
          height="600"
          style="z-index: -5 !important"
        />
      </v-container>

      <!-- Moving images -->
      <!-- <div class="moving-img img-11">
        <img src="../../assets/Icons/reactjs.png" alt="logo" width="50" />
      </div> -->
      <div class="moving-img img-1 hidden-md-and-down" style="z-index: 0">
        <img src="../../assets/Icons/python.png" alt="logo" height="50" />
      </div>
      <div
        class="moving-img img-2 d-none d-sm-flex"
        style="z-index: 0 !important"
      >
        <img
          src="https://themesflat.co/html/open9/assets/images/item-background/item5.png"
          alt="logo"
        />
      </div>
      <!-- <div class="moving-img img-3 d-none d-sm-flex">
        <img src="../../assets/Icons/css.png" alt="logo" width="50" />
      </div> -->
      <div
        class="moving-img img-4 d-none d-sm-flex hidden-md-and-down"
        v-show="!$vuetify.display.mdAndDown"
      >
        <img src="../../assets/Icons/reactjs.png" alt="logo" width="50" />
      </div>

      <!-- Dots with Fade In and Fade Out -->
      <div class="fade-dots img-5 d-none d-sm-flex">
        <img src="../../assets/Icons/dots.png" alt="logo" />
      </div>
      <div class="fade-dots img-6 d-none d-sm-flex">
        <img src="../../assets/Icons/dots.png" alt="logo" />
      </div>
      <div class="fade-dots img-7">
        <img src="../../assets/Icons/dots.png" alt="logo" />
      </div>

      <!-- More moving images -->

      <div class="moving-img img-9 hidden-md-and-down">
        <img
          src="../../assets/Icons/js.png"
          alt="logo"
          height="50"
          width="50"
        />
      </div>
      <div class="moving-img img-10" v-show="!$vuetify.display.mdAndDown">
        <img
          src="../../assets/Icons/nuxt.png"
          alt="logo"
          height="50"
          width="50"
        />
      </div>

      <v-row
        class="my-2 mx-auto animate__animated animate__fadeInUp animate__duration-2s"
        justify="center"
        align="center"
      >
        <v-col cols="auto">
          <v-btn
            class="bg-primary d-flex align-center justify-center rounded-lg manrope-font pa-6 DiscoverButton"
            block
            style="
              font-size: 14px;
              font-weight: 800;
              text-transform: capitalize;
            "
          >
            Read More
            <v-icon class="ml-2">mdi-arrow-top-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import TypingEffect from "../GlobalComponents/TypingEffect.vue";
export default {
  components: { TypingEffect },
};
</script>

<style scoped>
v-col {
  margin-bottom: 10px;
  width: 100%;
  flex: 0px !important;
}

.azeret-mono-font {
  font-family: "Azeret Mono", monospace;
  font-size: 18px !important;
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

  .v-row {
    max-width: 100% !important;
    flex-direction: column;
    align-items: center;
    display: block;
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
    font-size: 45px !important;
  }
}

/* Blink effect for the cursor */
.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
}

.iphone {
  position: absolute;
  top: 10%;
  left: 35%;
  height: 500px;
  z-index: 0 !important;
  object-fit: cover;

  transform: scaleY(1.1) scaleX(0.9);
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
}

/* Typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 60%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}

/* Responsive styles */
@media (max-width: 600px) {
  .typing-effect {
    font-size: 25px !important; /* Smaller font size for smaller screens */
    text-align: left !important;
    margin-left: 0px !important;
  }
}

@media (max-width: 600px) {
  .typing-effect {
    font-size: 32px; /* Smaller font size for smaller screens */
    animation: typing-mobile 2s steps(30) 0.5s 1 normal forwards,
      blink-caret 0.2s step-end infinite;
  }

  /* Mobile-specific typing animation */
  @keyframes typing-mobile {
    from {
      width: 0;
    }
    to {
      width: 80%; /* Increase the width on mobile for better fit */
    }
  }
}

@media (max-width: 834px) {
  .typing-effect {
    font-size: 32px; /* Smaller font size for smaller screens */
    animation: typing-mobile 2s steps(30) 0.5s 1 normal forwards,
      blink-caret 0.2s step-end infinite;
  }

  /* Mobile-specific typing animation */
  @keyframes typing-mobile {
    from {
      width: 0;
    }
    to {
      width: 80%; /* Increase the width on mobile for better fit */
    }
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
  width: 30vh;
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

@keyframes moveImg1 {
  0%,
  100% {
    top: 12%;
    left: 70%;
  }
  50% {
    top: 13%;
    left: 70%;
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
    left: 27%;
  }
  50% {
    top: 13%;
    left: 25%;
  }
}

@keyframes moveImg10 {
  0%,
  100% {
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  50% {
    top: 37%;
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

/* Media query for tablets */
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles for tablets */
  .iphone {
    position: absolute;
    top: 12%;
    left: 50%;
    height: 500px;
    z-index: 0 !important;
    object-fit: cover;

    transform: scaleY(1.1) scaleX(0.9);
  }
}
</style>

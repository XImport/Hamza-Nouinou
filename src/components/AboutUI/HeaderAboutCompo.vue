<template>
  <div :class="`bg-background  ${ThemeMode}`" style="min-height: 45vh">
    <div class="justify-center align-center py-2">
      <h1 class="text-center manrope-font text-center">
        <h1
          class="text-center manrope-font text-center animate__animated animate__fadeInUp animate__duration-2s"
        >
          This Unique Story<span class="text-primary"> </span>
        </h1>

        <TypingEffect
          :segments="[
            {
              text: '  Driven Devops | ',
              class: '',
            },
            {
              text: 'Experience',
              class: 'text-primary',
              style: { display: 'inline-block' },
            },
          ]"
          :speed="50"
          :loop="false"
        />
      </h1>

      <v-container class="container-text">
        <p
          class="text-center azeret-mono-font animate__animated animate__fadeInUp animate__duration-2s"
          style="
            font-size: 18px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.53);
          "
        >
          Have a project in mind or need a reliable developer to bring your
          vision to life? Let’s connect! Whether it’s a quick question or a
          detailed discussion, I’m here to help. Reach out and let’s turn your
          ideas into reality.
        </p>
      </v-container>
      <!-- <v-container
        class="iphone d-none d-lg-flex"
        v-if="$vuetify.theme.global.name == 'CustomDarkTheme'"
      >
        <v-img
          src="https://wnexus.io/wp-content/uploads/2024/02/startup_1-1-min.png"
          class="phone-image"
          contain
          height="600"
        />
      </v-container> -->
      <v-container
        class="iphone d-none d-lg-flex"
        v-if="$vuetify.theme.global.name == 'CustomLightTheme'"
      >
        <v-img
          src="../../assets/About.png"
          class="phone-image"
          contain
          height="600"
        />
      </v-container>

      <!-- Moving images -->
      <div class="moving-img img-11">
        <img src="../../assets/Icons/flower.png" alt="logo" />
      </div>
      <div class="moving-img img-1 d-none d-lg-flex">
        <img
          src="https://i.ibb.co/q5KYsTq/pngwing-com.png"
          alt="logo"
          width="80"
        />
      </div>
      <div class="moving-img img-2">
        <img
          src="https://themesflat.co/html/open9/assets/images/item-background/item5.png"
          alt="logo"
        />
      </div>
      <div class="moving-img img-3 d-none d-lg-flex">
        <img src="../../assets/Icons/excel.png" alt="logo" width="80" />
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
      <div class="moving-img img-8 d-none d-lg-flex">
        <img src="../../assets/Icons/android.png" alt="logo" width="80" />
      </div>
      <div class="moving-img img-9 d-none d-lg-flex">
        <img
          src="../../assets/Icons/js.png"
          alt="logo"
          height="50"
          width="50"
        />
      </div>
      <div class="moving-img img-10 d-none d-lg-flex">
        <img
          src="../../assets/Icons/nuxt.png"
          alt="logo"
          height="50"
          width="50"
        />
      </div>

      <v-row
        class="my-2 mx-auto Button-container animate__animated animate__fadeInUp animate__duration-2s"
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
            Get Started
            <v-icon class="ml-2">mdi-arrow-top-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ThemeMode() {
      // Return a class name based on the current theme
      return this.$vuetify.theme.global.name === "CustomLightTheme"
        ? "bg-DominateColor"
        : "bg-lines";
    },
  },
};
</script>

<style scoped>
/* Blink effect for the cursor */
.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
}

.iphone {
  position: absolute;
  top: 17%;
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
  left: 50%; /* Start the text from the center */
  transform: translateX(-50%); /* Center the text horizontally */
}

/* Typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 40%;
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
  width: 50vh !important;
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
  font-size: 54px;
  font-weight: 800;
  text-transform: capitalize;
}

.azeret-mono-font {
  font-family: "Azeret Mono", monospace;
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
    top: 40%;
    left: 65%;
  }
  50% {
    top: 45%;
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
    left: 31%;
  }
}

@keyframes moveImg10 {
  0%,
  100% {
    top: 55%;
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

.container-text {
  max-width: 50%;
}

@media (max-width: 600px) {
  .container-text {
    max-width: 100%;
  }
}

@media (max-width: 834px) {
  .container-text {
    max-width: 90%;
  }
  .Button-container {
    max-width: 100% !important;
  }
}

.Button-container {
  max-width: 20%;
}
</style>

<template>
  <div
    style="
      min-height: 3vh;
      background-color: #161616 !important;
      max-height: 90vh;
      padding: 0px !important;
    "
  >
    <div class="justify-center align-center py-2">
      <h1
        class="text-center manrope-font typing-effect text-center"
        style="font-size: 54px; font-weight: 800; text-transform: capitalize"
      >
        Custom-Crafted Solutions for Your
        <span style="color: yellow"> Needs </span>
      </h1>
      <v-container style="width: 40%">
        <p
          class="text-center azeret-mono-font"
          style="
            font-size: 14px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.53);
          "
        >
          Welcome to My World of Innovation and Excellence. Discover expertly
          crafted digital solutions designed to bring your unique vision to
          life. Whether it's cutting-edge mobile apps, seamless APIs, or custom
          web experiences, I deliver the tools to transform your ideas into
          reality.
        </p>
      </v-container>

      <div class="services-wrapper">
        <!-- Moving images as background -->
        <div class="background-images">
          <div class="moving-img img-11">
            <img src="../../assets/Icons/flower.png" alt="logo" />
          </div>
          <div class="moving-img img-1">
            <img src="../../assets/Icons/blo.png" alt="logo" />
          </div>
          <div class="moving-img img-2">
            <img
              src="https://themesflat.co/html/open9/assets/images/item-background/item5.png"
              alt="logo"
            />
          </div>
          <div class="moving-img img-3">
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
          <div class="moving-img img-8">
            <img src="../../assets/Icons/nft.png" alt="logo" width="50" />
          </div>
          <div class="moving-img img-9">
            <img
              src="../../assets/Icons/nft.png"
              alt="logo"
              height="80"
              width="80"
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
        </div>

        <!-- Services component -->
        <ServicesCompo />
      </div>
    </div>
  </div>
</template>

<script>
import ServicesCompo from "./ServicesCompo.vue";
export default {
  components: { ServicesCompo },
};
</script>
<style scoped>
/* Base styles */
.services-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.background-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Typing effect */
.typing-effect {
  font-family: "Manrope", sans-serif;
  font-size: 54px;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #fff;
  display: inline-block;
  width: 0;
  animation: typing 2s steps(40) 0.5s 1 normal forwards,
    blink-caret 0.2s step-end infinite;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 65%;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
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
    top: 40%;
    left: 70%;
    transform: translateY(-10px);
  }
  50% {
    top: 50%;
    left: 75%;
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
    top: 65%;
    left: 65%;
    transform: translateY(-8px);
  }
  50% {
    top: 55%;
    left: 67%;
    transform: translateY(8px);
  }
}

@keyframes moveImg9 {
  0%,
  100% {
    top: 2%;
    left: 5%;
    transform: scale(1) rotate(0deg);
  }
  50% {
    top: 10%;
    left: 7%;
    transform: scale(1.1) rotate(10deg);
  }
}

@keyframes moveImg10 {
  0%,
  100% {
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    top: 65%;
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

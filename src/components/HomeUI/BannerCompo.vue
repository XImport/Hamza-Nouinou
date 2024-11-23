<template>
  <div class="landing-container min-h-screen bg-background p-0">
    <div class="flex flex-col items-center justify-center py-2 px-2 space-y-4">
      <h1 class="text-center font-manrope font-extrabold capitalize text-wrap">
        Custom-Crafted Solutions for Your
        <span class="text-yellow"> Needs </span>
      </h1>

      <div class="w-full max-w-xs xs:max-w-sm container--text">
        <p class="text-center azeret-mono-font text-grey py-6">
          Welcome to My World of Innovation and Excellence. Discover expertly
          crafted digital solutions designed to bring your unique vision to
          life. Whether it's cutting-edge mobile apps, seamless APIs, or custom
          web experiences, I deliver the tools to transform your ideas into
          reality.
        </p>
      </div>
      <div class="background-images bg-shades d-none d-sm-flex">
        <div class="moving-img2 img-11">
          <img src="../../assets/Icons/flower.png" alt="logo" />
        </div>
        <div class="moving-img2 img-1 d-none d-lg-flex">
          <img src="../../assets/Icons/blo.png" alt="logo" />
        </div>
        <div class="moving-img2 img-2">
          <img
            src="https://themesflat.co/html/open9/assets/images/item-background/item5.png"
            alt="logo"
          />
        </div>
        <div class="moving-img2 img-3 d-none d-sm-flex">
          <img src="../../assets/Icons/css.png" alt="logo" width="50" />
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
          <img src="../../assets/Icons/nft.png" alt="logo" width="80" />
        </div>
        <div class="moving-img2 img-9 d-none d-sm-flex">
          <img
            src="../../assets/Icons/nft.png"
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

      <div class="w-full max-w-full px-0 sm:px-4 md:px-8 lg:px-16">
        <ServicesCompo class="w-full" />
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
.typing-effect {
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #fff;
  animation: typing 2s steps(40) 0.5s 1 normal forwards,
    blink-caret 0.2s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

.azeret-mono-font {
  font-family: "Azeret Mono", monospace;
  font-size: 18px !important;
}

.container--text {
  max-width: 50%;
  margin: auto;
}

.text-wrap {
  white-space: normal; /* Allows text to wrap */
  overflow-wrap: break-word; /* Ensures words break at appropriate places */
  max-width: 100%; /* Constrain width to prevent overflow */
  font-size: 45px;
}

/* Animation  */

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
    top: 120%;
    left: 70%;
    transform: translateY(-10px);
  }
  50% {
    top: 118%;
    left: 80%;
    transform: translateY(10px);
  }
}

@keyframes moveImg2 {
  0%,
  100% {
    top: 120%;
    left: 90%;
    transform: rotate(0deg);
  }
  50% {
    top: 118%;
    left: 90%;
    transform: rotate(10deg);
  }
}

@keyframes moveImg3 {
  0%,
  100% {
    top: 130%;
    left: 15%;
    transform: scale(1);
  }
  50% {
    top: 125%;
    left: 8%;
    transform: scale(1.1);
  }
}

@keyframes moveImg4 {
  0%,
  100% {
    top: 120%;
    left: 15%;
    transform: translateX(-5px);
  }
  50% {
    top: 115%;
    left: 17%;
    transform: translateX(5px);
  }
}

@keyframes moveImg5 {
  0%,
  100% {
    top: 115%;
    left: 25%;
    opacity: 0.2;
  }
  50% {
    top: 114%;
    left: 27%;
    opacity: 0.6;
  }
}

@keyframes moveImg6 {
  0%,
  100% {
    top: 115%;
    left: 60%;
    transform: scale(0.9);
  }
  50% {
    top: 114%;
    left: 62%;
    transform: scale(1);
  }
}

@keyframes moveImg7 {
  0%,
  100% {
    top: 120%;
    left: 40%;
    transform: rotate(-5deg);
  }
  50% {
    top: 116%;
    left: 42%;
    transform: rotate(5deg);
  }
}

@keyframes moveImg8 {
  0%,
  100% {
    top: 140%;
    left: 10%;
    transform: translateY(-8px);
  }
  50% {
    top: 135%;
    left: 5%;
    transform: translateY(8px);
  }
}

@keyframes moveImg9 {
  0%,
  100% {
    top: 170%;
    left: 5%;
    transform: scale(1) rotate(0deg);
  }
  50% {
    top: 165%;
    left: 7%;
    transform: scale(1.1) rotate(10deg);
  }
}

@keyframes moveImg10 {
  0%,
  100% {
    top: 115%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    top: 110%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes moveImg11 {
  0%,
  100% {
    top: 130%;
    left: 85%;
    transform: rotate(-10deg);
  }
  50% {
    top: 125%;
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

@media only screen and (max-width: 668px) {
  .container--text {
    max-width: 100%;
    margin: auto;
  }
}

@media only screen and (max-width: 868px) {
  .container--text {
    max-width: 100%;
    margin: auto;
  }
}
</style>

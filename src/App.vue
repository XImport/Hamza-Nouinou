<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
export default {
  // No need to import HomePage here since routes handle component rendering.
  mounted() {
    // Initialize AOS after the component is mounted
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether animations should trigger when scrolling back up
    });
  },
  destroyed() {
    // Destroy AOS instance when the component is destroyed
    AOS.refresh();
  },
};
</script>

<style scoped>
/* #app{
  background-color: #161616 !important;
} */
</style>

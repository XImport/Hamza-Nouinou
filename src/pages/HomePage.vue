<template>
    <div>

        <AppBar />

      <HeaderCompo />
      <div >
        <SilderCompo />
      </div>
     
    </div>
  </template>
  
  <script>
  import AppBar from "../components/AppBar";
  import HeaderCompo from "../components/HeaderCompo.vue";
  import SilderCompo from "../components/SildersCompo.vue"
  export default {
    components: {
      AppBar,
      HeaderCompo,
      SilderCompo
    },
  };
  </script>
  
  <style scoped>
  </style>
  
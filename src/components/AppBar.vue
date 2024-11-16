<template>
    <v-app style="max-height: 14vh;">
        <v-app-bar flat color="background" dark class="py-2" app>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-title>
      <img
        src="https://themesflat.co/html/open9/assets/images/logo/logo.png"
        alt="logo"
       
      />
      <!-- <span class="ml-3" style="color: #c7ff00; font-weight: bold;">OpeN9</span> -->
    </v-toolbar-title>

    <v-spacer></v-spacer>
   

    <!-- Nav Links -->
    <div v-for="(btn, index) in NavbarButtons" :key="index" >
      <v-btn :to="btn.link" text style="text-transform: none;"  >{{ btn.text }}</v-btn>
    </div>
    <v-spacer></v-spacer>
    
    <div class="ml-6">
      <v-btn
        class="bg-primary manrope-font "
        style="font-size: small; font-weight: bolder;"
      >
       Contact Me
        <v-icon size="30">mdi-phone-in-talk</v-icon>
      </v-btn>
     
    
    </div>
   
    <div>
        <v-btn>
        <v-icon size="30">mdi-magnify</v-icon>
      </v-btn>

      <v-btn style="margin-left: -10%;">
        <v-icon size="30">mdi-filter-variant</v-icon>
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    
  </v-app-bar>
    </v-app>
 
</template>

<script>
export default {
  data() {
    return {
      NavbarButtons: [
        { text: "Home", link: "/" },
        { text: "About Me", link: "/about" },
        { text: "Explore", link: "" },
        { text: "Pages", link: "" },
        { text: "Blogs", link: "" },
        { text: "Services", link: "" },
      ],
    };
  },
};
</script>

<style scoped>

.v-btn--active{
    color: #DDF247 !important;
    background-color: transparent !important;
    box-shadow: none !important;
}

/* You can add custom styles for your navbar here */
</style>

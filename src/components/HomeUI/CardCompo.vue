<template>
    <v-card
      width="256"
      class="trading-card bg-black"
    >
      <!-- Timer overlay -->
      <div class="timer-overlay">
        <span class="text-white text-body-2">00h 00m 00s</span>
      </div>
  
      <!-- Heart button overlay -->
      <div class="heart-overlay">
        <v-btn
          icon
          variant="text"
          density="comfortable"
          color="white"
        >
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </div>
  
      <!-- Main image with bid button overlay -->
      <v-img
        src="https://themesflat.co/html/open9/assets/images/box-item/banner-02.jpg"
        cover
        height="256"
        class="image-container"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              indeterminate
              color="grey-lighten-4"
            ></v-progress-circular>
          </div>
        </template>
        
        <!-- Bid button overlay -->
        <div class="bid-button-container">
          <v-btn
            color="white"
            variant="flat"
            class="bid-button"
            rounded="lg"
          >
            Place Bid
          </v-btn>
        </div>
      </v-img>
  
      <!-- Card title and price -->
      <div class="card-footer pa-4">
        <span class="text-white text-subtitle-1 d-block">Dayco serpentine belt</span>
        <div class="d-flex align-center mt-1">
          <v-icon color="white" size="small" class="mr-1">mdi-diamond</v-icon>
          <span class="text-white">0,34</span>
        </div>
      </div>
    </v-card>
  </template>
  
  <script setup>
  // No additional setup needed for this component
  </script>
  
  <style scoped>
  .trading-card {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    background: #000000;
  }
  
  .timer-overlay {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 1;
  }
  
  .heart-overlay {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 1;
  }
  
  .image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7));
    z-index: 1;
  }
  
  .bid-button-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  
  .bid-button {
    min-width: 120px !important;
    letter-spacing: 0.5px;
    text-transform: none;
  }
  
  .card-footer {
    background: transparent;
    position: relative;
    z-index: 1;
  }
  
  /* Hide bid button by default and show on hover */
  .bid-button {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .trading-card:hover .bid-button {
    opacity: 1;
  }
  
  /* Optional: Add hover effect to the image */
  .trading-card:hover .image-container::before {
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  }
  </style>
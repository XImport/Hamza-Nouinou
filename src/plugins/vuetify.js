import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

const CustomDarkTheme = {
  dark: true,
  colors: {
    background: "#161616",
    primary: "#DDF247",
    secondary: "#FFFFFF",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    FontText: "#ffffff",
    Container: "#000000",
  },
  variables: {
    "border-color": "#000000",
    "border-opacity": 0.12,
    "high-emphasis-opacity": 0.87,
    "medium-emphasis-opacity": 0.6,
    "disabled-opacity": 0.38,
    "idle-opacity": 0.04,
    "hover-opacity": 0.04,
    "focus-opacity": 0.12,
    "selected-opacity": 0.08,
    "activated-opacity": 0.12,
    "pressed-opacity": 0.12,
    "dragged-opacity": 0.08,
    "theme-kbd": "#212529",
    "theme-on-kbd": "#FFFFFF",
    "theme-code": "#F5F5F5",
    "theme-on-code": "#000000",
  },
};

const CustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    primary: "#2D3172", // Complementary to #DDF247
    secondary: "#000000", // Contrasts with the dark theme's light secondary
    error: "#B00020", // Matches for consistency
    info: "#2196F3", // Matches for consistency
    success: "#4CAF50", // Matches for consistency
    warning: "#FB8C00", // Matches for consistency
    FontText: "#000000",
    Container: "#132151",
  },
  variables: {
    "border-color": "#000000",
    "border-opacity": 0.12,
    "high-emphasis-opacity": 0.87,
    "medium-emphasis-opacity": 0.6,
    "disabled-opacity": 0.38,
    "idle-opacity": 0.08, // Increased for better visibility in light mode
    "hover-opacity": 0.08, // Increased for better visibility in light mode
    "focus-opacity": 0.16, // Increased for better visibility in light mode
    "selected-opacity": 0.12, // Increased for better visibility in light mode
    "activated-opacity": 0.16, // Increased for better visibility in light mode
    "pressed-opacity": 0.16, // Increased for better visibility in light mode
    "dragged-opacity": 0.12, // Increased for better visibility in light mode
    "theme-kbd": "#E0E0E0",
    "theme-on-kbd": "#000000",
    "theme-code": "#161616",
    "theme-on-code": "#FFFFFF",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "CustomLightTheme", // Specify the default theme (light or dark)
    themes: {
      CustomDarkTheme,
      CustomLightTheme,
    },
  },
  defaults: {
    VBtn: {
      activeClass: "custom-v-btn--active", // Use your custom active class
    },
  },
});

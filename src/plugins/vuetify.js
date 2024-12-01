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
    DominateColor: "#161616 ",
    Outline: "#212121",
    TextFont: "#FFFFFF",
    ShadeBg: "#212121",
    TitleHightLight: "#DDF247",
  },
};

const CustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF ",
    primary: "#4433FF ", // Complementary to #DDF247
    secondary: "#ffffff", // Contrasts with the dark theme's light secondary
    error: "#B00020", // Matches for consistency
    info: "#2196F3", // Matches for consistency
    success: "#4CAF50", // Matches for consistency
    warning: "#FB8C00", // Matches for consistency
    FontText: "#000000",
    Container: "#132151",
    DominateColor: "#0C0A2F ",
    Outline: "#0C0A2F",
    TextFont: "#000000",
    ShadeBg: "#fbfafa",
    TitleHightLight: "#0C0A2F",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: "CustomDarkTheme", // Specify the default theme (light or dark)
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

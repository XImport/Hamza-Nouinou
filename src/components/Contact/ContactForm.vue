<template>
  <v-container class="d-flex justify-center align-center">
    <v-form ref="form" v-model="isValid" class="form-container">
      <v-row>
        <v-col cols="12" md="4">
          <div class="moving-img img-9">
            <img
              src="https://themesflat.co/html/open9/assets/images/item-background/item17.png"
              alt="logo"
              height="50"
              width="50"
            />
          </div>
          <div class="moving-img img-10">
            <img
              src="../../assets/Icons/form.png"
              alt="logo"
              height="50"
              width="50"
            />
          </div>
          <v-text-field
            label="Your name*"
            variant="outlined"
            class="azeret-mono-font"
            dense
            v-model="formData.name"
            :rules="[requiredRule]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Email address*"
            variant="outlined"
            class="azeret-mono-font"
            dense
            v-model="formData.email"
            :rules="[requiredRule, emailRule]"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            label="Subject"
            variant="outlined"
            class="azeret-mono-font"
            dense
            :rules="[requiredRule]"
            v-model="formData.subject"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Your message*"
            variant="outlined"
            class="azeret-mono-font"
            dense
            rows="5"
            v-model="formData.message"
            :rules="[requiredRule]"
          ></v-textarea>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-container style="max-width: 30%">
            <v-btn
              color="primary"
              block
              variant="flat"
              class="rounded-xl pa-6"
              :disabled="!isValid"
              @click="submitForm"
            >
              Send Message
              <v-icon right>mdi-arrow-top-right</v-icon>
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isValid: false,
      requiredRule: (value) => !!value || "This field is required.",
      emailRule: (value) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value) || "Enter a valid email address.";
      },
    };
  },
  methods: {
    submitForm() {
      if (this.isValid) {
        console.log("Form data submitted:", this.formData);
      }
    },
  },
};
</script>

<style scoped>
.bg-lines {
  background-image: url("https://themesflat.co/html/open9/assets/images/item-background/bg-contact.png");
  /* background-position: center; */
  background-repeat: repeat;
}

.form-container {
  background-color: #1a1a1a;
  padding: 34px;
  border-radius: 8px;
  /* max-width: 800px; */
  max-width: 70%;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

v-btn {
  color: #121212;
  font-weight: bold;
}

v-text-field,
v-textarea {
  background-color: #262626;
  color: white;
}

@import url("https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&display=swap");

.azeret-mono-font {
  font-family: "Azeret Mono", monospace !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  font-style: normal !important;
}

.moving-img {
  position: absolute;
  animation-duration: 6s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.img-9 {
  animation-name: moveImg9;
}

.img-10 {
  animation-name: moveImg10;
}

@keyframes moveImg9 {
  0%,
  100% {
    top: 150%;
    left: 90%;
  }
  50% {
    top: 140%;
    left: 92%;
  }
}

@keyframes moveImg10 {
  0%,
  100% {
    top: 150%;
    left: 10%;
  }
  50% {
    top: 140%;
    left: 8%;
  }
}
</style>

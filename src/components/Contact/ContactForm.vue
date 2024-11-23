<template>
  <v-container class="d-flex justify-center align-center container-form">
    <v-form ref="form" v-model="isValid">
      <v-row class="d-flex justify-center" dense>
        <!-- Name Input -->
        <v-col cols="12" sm="12" md="4" xs="12">
          <div class="moving-img img-9 d-none d-lg-flex">
            <img
              src="https://themesflat.co/html/open9/assets/images/item-background/item17.png"
              alt="logo"
              height="50"
              width="50"
            />
          </div>
          <div class="moving-img img-10 d-none d-lg-flex">
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

        <!-- Email Input -->

        <v-text-field
          label="Email address*"
          variant="outlined"
          class="azeret-mono-font"
          dense
          v-model="formData.email"
          :rules="[requiredRule, emailRule]"
        ></v-text-field>

        <!-- Subject Input -->

        <v-text-field
          label="Subject"
          variant="outlined"
          class="azeret-mono-font"
          dense
          :rules="[requiredRule]"
          v-model="formData.subject"
        ></v-text-field>

        <!-- Message Textarea -->
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

        <!-- Submit Button -->
        <v-col cols="12" class="text-center">
          <v-container style="max-width: 300px">
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
  max-width: 80%;
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

@media (max-width: 600px) {
  .container-form {
    max-width: 100%;
  }
}

@media (max-width: 834px) {
  .container-form {
    max-width: 90%;
    padding: 0px !important;
  }
}
</style>

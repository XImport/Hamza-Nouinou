<template>
  <v-container fluid class="stats-container">
    <v-row justify="center" align="center" class="stats-row">
      <v-col
        v-for="(stat, index) in stats"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="text-center"
        style="display: flex; align-items: center; justify-content: center"
      >
        <!-- Stat Wrapper -->
        <div class="stat-wrapper">
          <!-- Animated Number -->
          <div class="stat-number">
            <count-up
              :start-val="0"
              :end-val="stat.value"
              :duration="2.5"
              :options="countOptions"
            >
              <template #default="{ displayValue }">
                <div class="value-display">
                  {{ displayValue }}
                  <span class="plus-symbol">+</span>
                </div>
              </template>
            </count-up>
          </div>
          <!-- Label -->
          <div class="stat-label">{{ stat.label }}</div>
        </div>

        <!-- Horizontal Divider -->
        <div v-if="index !== stats.length - 1" class="svg-divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            class="divider-svg"
          >
            <line
              x1="0"
              y1="5"
              x2="100"
              y2="5"
              stroke="rgba(255, 255, 255, 0.2)"
              stroke-width="2"
              stroke-dasharray="5,5"
            />
          </svg>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountUp from "vue-countup-v3";

export default {
  name: "StatsCounter",
  components: {
    CountUp,
  },
  data() {
    return {
      stats: [
        { value: 51, label: "Projects Completed" },
        { value: 40, label: "Happy Clients" },
        { value: 3, label: "Years of Experience" },
        { value: 4, label: "Recognition & Achievements" },
      ],
      countOptions: {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ".",
      },
    };
  },
};
</script>

<style scoped>
.stats-container {
  background-color: #161616;
  padding: 2rem 0;
}

.stats-row {
  max-width: 1200px;
  margin: 0 auto;
}

.stat-wrapper {
  position: relative;
  padding: 1rem;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  font-family: "Manrope", sans-serif;
  color: #e2ff3d;
  text-shadow: 0 0 10px rgba(226, 255, 61, 0.3);
  transition: all 0.3s ease;
}

.stat-number:hover {
  text-shadow: 0 0 20px rgba(226, 255, 61, 0.5);
  transform: scale(1.05);
}

.value-display {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.plus-symbol {
  font-size: 2.5rem;
  margin-left: 4px;
  font-weight: 600;
}

.stat-label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Manrope", sans-serif;
  margin-top: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .stat-number {
    font-size: 2.8rem;
  }

  .plus-symbol {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }

  .stat-wrapper {
    padding: 0.8rem;
  }
}

/* Divider styles */
.svg-divider {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}

.divider-svg {
  width: 100%;
  max-width: 150px;
  height: auto;
}

@media (max-width: 600px) {
  .divider-svg {
    max-width: 100px;
  }
}
</style>

// vue-typing-effect.vue
<template>
  <div class="typing-container" :style="{ textAlign: alignment }">
    <span
      :class="['typing-effect', { typing: isTyping }]"
      :style="componentStyles"
    >
      <template v-for="(segment, index) in processedSegments" :key="index">
        <span :class="`mr-2 ${segment.class}`" :style="segment.style">
          {{ segment.text }}
        </span>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: "TypingEffect",
  props: {
    segments: {
      type: Array,
      required: true,
      validator: (value) =>
        value.every(
          (segment) =>
            typeof segment === "object" && (segment.text || segment.content)
        ),
    },
    speed: {
      type: Number,
      default: 50,
    },
    delay: {
      type: Number,
      default: 0,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    cursor: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "inherit",
    },
    alignment: {
      type: String,
      default: "center",
      validator: (value) => ["left", "center", "right"].includes(value),
    },
  },
  data() {
    return {
      displayedSegments: [],
      isTyping: true,
      currentSegmentIndex: 0,
      currentCharIndex: 0,
    };
  },
  computed: {
    componentStyles() {
      return {
        "--cursor-color": this.color,
        display: "inline-block",
      };
    },
    processedSegments() {
      return this.displayedSegments.map((segmentText, index) => {
        const originalSegment = this.segments[index];
        return {
          text: segmentText,
          class: originalSegment.class || "",
          style: originalSegment.style || {},
        };
      });
    },
  },
  mounted() {
    this.startTypingEffect();
  },
  methods: {
    startTypingEffect() {
      setTimeout(() => {
        this.displayedSegments = this.segments.map(() => "");
        this.typeNextChar();
      }, this.delay);
    },
    typeNextChar() {
      if (this.currentSegmentIndex < this.segments.length) {
        const currentSegment = this.segments[this.currentSegmentIndex];
        const text = currentSegment.text || currentSegment.content || "";

        if (this.currentCharIndex < text.length) {
          this.displayedSegments[this.currentSegmentIndex] += text.charAt(
            this.currentCharIndex
          );
          this.currentCharIndex++;

          setTimeout(() => this.typeNextChar(), this.speed);
        } else {
          // Move to next segment
          this.currentSegmentIndex++;
          this.currentCharIndex = 0;

          // Continue typing next segment
          setTimeout(() => this.typeNextChar(), this.speed);
        }
      } else {
        // Typing complete
        this.isTyping = false;

        if (this.loop) {
          setTimeout(() => {
            this.resetTyping();
          }, 2000);
        }
      }
    },
    resetTyping() {
      this.displayedSegments = [];
      this.currentSegmentIndex = 0;
      this.currentCharIndex = 0;
      this.isTyping = true;
      this.startTypingEffect();
    },
  },
};
</script>

<style scoped>
.typing-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.typing-effect {
  position: relative;
}

.typing-effect.typing::after {
  content: "|";
  animation: blink 0.7s infinite;
  color: var(--cursor-color, inherit);
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>

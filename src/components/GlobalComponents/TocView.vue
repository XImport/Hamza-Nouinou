<template>
  <div class="toc-container" v-if="toc.length > 0">
    <div>
      <h2 class="text-primary pb-2 text-center">Overview of Topics :</h2>
    </div>
    <div v-if="showToc" class="toc bg-ShadeBg pa-6 rounded-sm">
      <ul>
        <li v-for="item in toc" :key="item.id">
          <a
            href="#"
            @click="scrollToHeading($event, item.title)"
            class="text-link text-TextFont"
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showToc: true,
      toc: [],
    };
  },
  methods: {
    toggleToc() {
      this.showToc = !this.showToc;
    },
    parseHeadings() {
      // Get all elements with h1, h2, h3, h4 tags
      const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4"));

      // Filter headings to only include those with <!-- Key --> comment
      this.toc = headings
        .filter((heading) => {
          const hasKey =
            heading.textContent.includes("<!-- Key -->") ||
            heading.innerHTML.includes("<!-- Key -->");

          return hasKey;
        })
        .map((heading) => {
          const title = heading.textContent.replace("<!-- Key -->", "").trim();
          const id = title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");

          return { id, title };
        });
    },
    scrollToHeading(event, title) {
      event.preventDefault(); // Prevent the default anchor link behavior

      // Find the heading element by matching the text content
      const target = Array.from(
        document.querySelectorAll("h1, h2, h3, h4")
      ).find((heading) => heading.textContent.trim() === title);

      if (target) {
        // Scroll to the element with an offset (adjust the value as needed)
        window.scrollTo({
          top: target.offsetTop - 100, // Adjust for the height of the navbar or spacing
          behavior: "smooth", // Smooth scrolling
        });
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.parseHeadings(); // Generate TOC on mount
    });
  },
};
</script>

<style scoped>
.toc-container {
  position: fixed;
  top: 20%;
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  max-width: 39vh;
}
.text-link {
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; /* Prevent line breaks */
  display: inline-block; /* Ensure it's treated as inline but allows block properties */
}
.toc-button {
  border: none;
  padding: 8px 12px;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
  width: 100%;
}

.toc ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc ul li a {
  text-decoration: none;
  cursor: pointer;
  padding: 5px;
  display: block;
}

.toc ul li a:hover {
  text-decoration: underline;
}
</style>

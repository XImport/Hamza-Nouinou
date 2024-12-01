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
            @click="scrollToHeading($event, item.id)"
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
      this.$nextTick(() => {
        // Wait for the dynamic content to render
        const markdownContent = document.querySelector(".Blogs-container");

        if (!markdownContent) return;

        // Get all heading elements within the markdown content
        const headings = Array.from(
          markdownContent.querySelectorAll("h1, h2, h3, h4")
        );

        // Generate TOC entries
        this.toc = headings.map((heading) => {
          // Generate or ensure unique ID
          if (!heading.id) {
            const id = heading.textContent
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "");
            heading.id = id;
          }

          return {
            id: heading.id,
            title: heading.textContent.trim(),
          };
        });
      });
    },
    scrollToHeading(event, id) {
      event.preventDefault();

      const target = document.getElementById(id);

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth",
        });
      }
    },
  },
  mounted() {
    // Initial parse
    this.parseHeadings();

    // Use a MutationObserver to detect when dynamic content is loaded
    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type === "childList") {
          this.parseHeadings();
          break;
        }
      }
    });

    // Start observing the Blogs-container
    const blogsContainer = document.querySelector(".Blogs-container");
    if (blogsContainer) {
      observer.observe(blogsContainer, {
        childList: true,
        subtree: true,
      });
    }
  },
  beforeUnmount() {
    // Clean up the observer if necessary
    if (this.observer) {
      this.observer.disconnect();
    }
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
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
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

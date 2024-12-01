import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    messsage: "Hello World Here",
    DefaultTheme: "dark",
    darkTheme: true,
    LightTheme: false,
    blogs: [
      {
        id: 20240000001,
        image:
          "https://i.pinimg.com/736x/7e/c5/de/7ec5de0e5f9595fb14e33f8a41ae03a2.jpg",
        category: "Digital Art",
        date: "Mon, 08 May",
        title: "Unreal Engine for Fortnite is a big deal",
        author: {
          name: "Hamza Nouinou",
          avatar: "../assets/Me.png",
        },
        BlogName: "Blog1.md",
        Tags: [
          "#UNREALENGINE",
          "#UEFN",
          "#GAMEDEVELOPMENT",
          "#EPICGAMES",
          "#FORTNITEENGINE",
          "#GAMEDEV",
          "#NEXTGENGAMING",
          "#TECHNOLOGY",
          "#3DGAMING",
          "#GAMEDESIGN",
          "#VIRTUALWORLDS",
          "#PCGAMING",
          "#INDIEGAMES",
          "#AAA",
          "#GAMINGNEWS",
        ],
        metadata: {
          readTime: "5 min read",
          views: 1256,
          likes: 87,
          comments: 24,
        },
        seo: {
          metaDescription:
            "Exploring the impact of Unreal Engine on Fortnite's creative landscape",
          keywords: [
            "Unreal Engine",
            "Fortnite",
            "Game Development",
            "Digital Art",
          ],
        },
      },
      {
        id: 20240000002,
        image:
          "https://i.pinimg.com/736x/46/5f/15/465f15e5733753e0ec03f3d646bff010.jpg",
        category: "Game Development",
        date: "Tue, 09 May",
        title: "The Future of AI in Modern Gaming",
        BlogName: "Blog2.md",
        author: {
          name: "Hamza Nouinou",
          avatar: "Me.png",
        },
        Tags: [
          "#ARTIFICIALINTELLIGENCE",
          "#AIGAMING",
          "#GAMEDEVELOPMENT",
          "#AIINGAMING",
          "#MACHINELEARNING",
          "#GAMINGTECHNOLOGY",
          "#GAMINGTRENDS",
          "#FUTUREOFGAMING",
          "#GAMINGINDUSTRY",
          "#AIGAMEDEV",
          "#TECHNOLOGY",
          "#GAMINGAI",
        ],
        metadata: {
          readTime: "6 min read",
          views: 1156,
          likes: 66,
          comments: 4,
        },

        seo: {
          metaDescription:
            "Explore how artificial intelligence is transforming the future of gaming, from smarter NPCs to personalized gameplay experiences and procedural content generation.",
          keywords: [
            "Artificial Intelligence",
            "AI in Gaming",
            "Game Development",
            "AI NPCs",
            "Procedural Content Generation",
            "Gaming Technology",
            "Machine Learning in Gaming",
            "Personalized Gaming",
            "Future of Gaming",
            "AI Game Design",
            "AI-driven Game Mechanics",
            "Next-Gen AI",
            "AI Companions",
            "Gaming AI Trends",
          ],
        },
      },

      {
        id: 20240000003,
        image:
          "https://i.pinimg.com/736x/f6/f2/82/f6f282669632157cb46e33ea7d8bf5be.jpg",
        category: "Web Design",
        date: "Wed, 10 May",
        title: "Responsive Design Trends in 2024",
        BlogName: "Blog3.md",
        author: {
          name: "Hamza Nouinou",
          avatar: "Me.png",
        },
        Tags: [
          "#ResponsiveDesign",
          "#WebDesign2024",
          "#MobileFirstDesign",
          "#FluidLayouts",
          "#AdaptiveDesign",
          "#UIUXDesign",
          "#WebDesignTrends",
          "#CrossDeviceDesign",
          "#WebDevelopment",
          "#FutureOfDesign",
          "#ResponsiveWebDesign",
          "#DesignTools2024",
          "#WebDesignTechniques",
          "#DigitalDesign",
        ],
        seo: {
          metaDescription:
            "Discover the latest responsive design trends for 2024, including mobile-first strategies, fluid layouts, and new tools transforming the way we design for diverse devices.",
          keywords: [
            "Responsive Design",
            "Web Design Trends",
            "2024 Web Design",
            "Mobile-First Design",
            "Fluid Layouts",
            "Adaptive Design",
            "UI/UX Design",
            "Web Development",
            "Design Tools 2024",
            "Responsive Web Design",
            "Cross-Device Design",
            "Web Design Techniques",
            "Future of Web Design",
          ],
        },
      },

      // Add more blogs as needed
    ],
  },
  getters: {
    GetMessage(state) {
      return state.messsage;
    },

    GetDefaultTheme(state) {
      return state.DefaultTheme;
    },
    GetdarkTheme(state) {
      return state.darkTheme;
    },
    GetLightTheme(state) {
      return state.LightTheme;
    },
    GetBlogs(state) {
      return state.blogs;
    },
  },

  mutations: {},
  //   plugins: [
  //     createPersistedState({
  //       // You can specify where you want to save the state
  //       storage: window.localStorage, // or use sessionStorage
  //     }),
  //   ],
  actions: {},
  modules: {},
});

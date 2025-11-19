export const SITE = {
  website: "https://blue-nebula.netlify.app", // replace this with your deployed domain
  author: "ximo",
  profile: "https://blue-nebula.netlify.app",
  desc: "是夏天诶，也是我心里的一点亮光。",
  title: "踏踏实实的司空琪",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://blue-nebula.netlify.app",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

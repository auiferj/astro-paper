export const SITE = {
  website: "https://blue-nebula.netlify.app", // replace this with your deployed domain
  author: "ximo",
  profile: "https://blue-nebula.netlify.app",
  desc: "记录生活点滴，分享日常感悟，为你寻找和提供平凡中的光亮与心灵补给.",
  title: "橙光补给站",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
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

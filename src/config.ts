export const SITE = {
  website: "https://blue-nebula.netlify.app", // replace this with your deployed domain
  author: "ximo",
  profile: "https://blue-nebula.netlify.app",
  desc: "一些文字，一点生活，一种持续的记录。像花在缝隙中悄悄绽放。.",
  title: "写字的地方",
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

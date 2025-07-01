---
author: Sat Naing
pubDatetime: 2022-09-23T15:22:00Z
modDatetime: 2025-06-13T16:52:45.934Z
title: Adding new posts in AstroPaper theme
slug: adding-new-posts-in-astropaper-theme
featured: true
draft: false
tags:
  - docs
description:
  Some rules & recommendations for creating or adding new posts using AstroPaper
  theme.
---

以下是在AstroPaper博客主题中创建新文章的一些规则/建议、技巧和窍门。

<figure>
  <img
    src="https://images.pexels.com/photos/159618/still-life-school-retro-ink-159618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="免费经典木制书桌，配有书写材料、老式时钟和皮包。库存照片"
  />
    <figcaption class="text-center">
    图片由 <a href="https://www.pexels.com/photo/brown-wooden-desk-159618/">Pixabay</a> 提供
  </figcaption>
</figure>

## Table of contents

## 创建博客文章

要撰写新的博客文章，请在 `src/data/blog/` 目录中创建一个 Markdown 文件。

> 在 AstroPaper v5.1.0 之前，所有博客文章都必须放在 `src/data/blog/` 中，这意味着您无法将它们组织到子目录中。

从 AstroPaper v5.1.0 开始，您现在可以将博客文章组织到子目录中，从而更轻松地管理您的内容。

例如，如果您想将文章分组到 `2025` 下，您可以将它们放在 `src/data/blog/2025/` 中。
这会影响文章URL，因此 `src/data/blog/2025/example-post.md` 将在 `/posts/2025/example-post` 可用。

如果您不希望子目录影响文章 URL，只需在文件夹名称前加上下划线 `_`。

```bash
# 示例：博客文章结构和 URL
src/data/blog/very-first-post.md          -> mysite.com/posts/very-first-post
src/data/blog/2025/example-post.md        -> mysite.com/posts/2025/example-post
src/data/blog/_2026/another-post.md       -> mysite.com/posts/another-post
src/data/blog/docs/_legacy/how-to.md      -> mysite.com/posts/docs/how-to
src/data/blog/Example Dir/Dummy Post.md   -> mysite.com/posts/example-dir/dummy-post
```

> 💡 提示：您也可以在Frontmatter中覆盖博客文章的slug。有关更多详细信息，请参阅下一节。

如果子目录URL未出现在构建输出中，请删除node_modules，重新安装包，然后重新构建。

## Frontmatter

Frontmatter 是存储博客(文章)一些重要信息的主要位置。
Frontmatter 位于文章顶部，以 YAML 格式编写。
在[astro文档](https://docs.astro.build/en/guides/markdown-content/) 中阅读有关Frontmatter及其用法的更多信息。

以下是每篇文章的 Frontmatter 属性列表。

| Property           | Description                                                                                                                           | Remark                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **_title_**        | 文章标题。(h1)                                                                              | required<sup>\*</sup>                          |
| **_description_**  | 文章描述。用于文章摘录和文章的站点描述。                                                       | required<sup>\*</sup>                          |
| **_pubDatetime_**  | 发布日期时间，ISO 8601 格式。                                                                | required<sup>\*</sup>                          |
| **_modDatetime_**  | 修改日期时间，ISO 8601 格式。（仅当博客文章被修改时才添加此属性）                                | optional                                       |
| **_author_**       | 文章作者。                                                                                  | default = SITE.author                          |
| **_slug_**         | 文章的 slug。此字段是可选的。                                                                | default = slugified file name                  |
| **_featured_**     | 是否在主页的特色部分显示此文章。                                                              | default = false                                |
| **_draft_**        | 将此文章标记为“未发布”。                                                                     | default = false                                |
| **_tags_**         | 此文章的相关关键字。以数组 YAML 格式编写。                                                    | default = others                               |
| **_ogImage_**      | 文章的 OG 图像。用于社交媒体分享和 SEO。可以是远程 URL 或相对于当前文件夹的图像路径。            | default = `SITE.ogImage` or generated OG image |
| **_canonicalURL_** | 规范 URL（绝对路径），以防文章已存在于其他来源。                                               | default = `Astro.site` + `Astro.url.pathname`  |
| **_hideEditPost_** | 隐藏博客标题下的 editPost 按钮。这仅适用于当前博客文章。                                      | default = false                                |
| **_timezone_**     | 为当前博客文章指定 IANA 格式的时区。这将覆盖当前博客文章的 `SITE.timezone` 配置。              | default = `SITE.timezone`                      |

> 提示！您可以通过在控制台中运行 `new Date().toISOString()` 来获取 ISO 8601 日期时间。请确保删除引号。

Frontmatter 中只有 `title`、`description` 和 `pubDatetime` 字段必须指定。

标题和描述（摘录）对于搜索引擎优化 (SEO) 很重要，因此 AstroPaper 鼓励在博客文章中包含这些内容。

`slug`是URL的唯一标识符。因此`slug`必须是唯一的，并且与其他文章不同。
`slug`的空格应该用`-`或`_`分隔，但建议使用`-`。
Slug是使用博客文章文件名自动生成的。但是，您可以在博客文章中将`slug`定义为 Frontmatter。

例如，如果博客文件名为`adding-new-post.md`并且您未在Frontmatter中指定slug，Astro将自动为博客文章创建slug，使用文件名。因此slug将是`adding-new-post`。
但是，如果您在Frontmatter中指定`slug`，这将覆盖默认slug。您可以在[Astro文档](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs) 中阅读更多相关信息。

如果您在博客文章中省略`tags`（换句话说，如果未指定任何标签），则默认标签`others`将用作该文章的标签。您可以在`content.config.ts`文件中设置默认标签。

```ts file="src/content.config.ts"
export const blogSchema = z.object({
  // ...
  draft: z.boolean().optional(),
  // [!code highlight:1]
  tags: z.array(z.string()).default(["others"]), // replace "others" with whatever you want
  // ...
});
```

### 示例 Frontmatter

以下是文章的示例 Frontmatter。

```yaml file="src/data/blog/sample-post.md"
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - example
  - tags
ogImage: ../../assets/images/example.png # src/assets/images/example.png
# ogImage: "https://example.org/remote-image.png" # remote URL
description: This is the example description of the example post.
canonicalURL: https://example.org/my-article-was-already-posted-here
---
```

## 添加文章目录

默认情况下，文章（Post）不包含任何目录。如需添加目录，你必须通过一种特定的方式来实现。

你需要在你希望显示目录的文章位置，用H2格式（Markdown中的##）写下“Table of contents”。

例如，如果你想将目录放置在引言段落下方（就像我通常做的那样），你可以通过以下方式实现：

<!-- prettier-ignore-start -->
```md
---
# frontmatter
---

以下是在AstroPaper博客主题中创建新文章的一些规则/建议、技巧和窍门。

<!-- [!code ++] -->
## Table of contents

<!-- the rest of the post -->
```
<!-- prettier-ignore-end -->

## 标题

关于标题（Headings），有一点需要注意。AstroPaper博客文章会把你在Frontmatter中设置的标题（title）作为文章的主标题。
因此，文章内部的其他所有标题都应该使用H2到H6的层级。

这条规则并非强制性的，但为了视觉效果、无障碍访问和搜索引擎优化（SEO），强烈建议你这样做。

## 语法高亮

AstroPaper 主题默认使用 Shiki 作为语法高亮工具。从 AstroPaper v5.4 版本开始，主题引入了 @shikijs/transformers 来增强代码块（fenced code blocks）的显示效果。如果你不想使用这个增强功能，可以按照以下方式将其移除。

```bash
pnpm remove @shikijs/transformers
```

```js file="astro.config.ts"
// ...
// [!code --:5]
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";

export default defineConfig({
  // ...
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName(),
      // [!code --:3]
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  // ...
}
```

## 博客图片管理

Here are two methods for storing images and displaying them inside a markdown file.

> Note! If it's a requirement to style optimized images in markdown you should [use MDX](https://docs.astro.build/en/guides/images/#images-in-mdx-files).

### Inside `src/assets/` directory (recommended)

You can store images inside `src/assets/` directory. These images will be automatically optimized by Astro through [Image Service API](https://docs.astro.build/en/reference/image-service-reference/).

You can use relative path or alias path (`@/assets/`) to serve these images.

Example: Suppose you want to display `example.jpg` whose path is `/src/assets/images/example.jpg`.

```md
![something](@/assets/images/example.jpg)

<!-- OR -->

![something](../../assets/images/example.jpg)

<!-- Using img tag or Image component won't work ❌ -->
<img src="@/assets/images/example.jpg" alt="something">
<!-- ^^ This is wrong -->
```

> Technically, you can store images inside any directory under `src`. In here, `src/assets` is just a recommendation.

### Inside `public` directory

You can store images inside the `public` directory. Keep in mind that images stored in the `public` directory remain untouched by Astro, meaning they will be unoptimized and you need to handle image optimization by yourself.

For these images, you should use an absolute path; and these images can be displayed using [markdown annotation](https://www.markdownguide.org/basic-syntax/#images-1) or [HTML img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img).

Example: Assume `example.jpg` is located at `/public/assets/images/example.jpg`.

```md
![something](/assets/images/example.jpg)

<!-- OR -->

<img src="/assets/images/example.jpg" alt="something">
```

## Bonus

### Image compression

When you put images in the blog post (especially for images under `public` directory), it is recommended that the image is compressed. This will affect the overall performance of the website.

My recommendation for image compression sites.

- [TinyPng](https://tinypng.com/)
- [TinyJPG](https://tinyjpg.com/)

### OG Image

The default OG image will be placed if a post does not specify the OG image. Though not required, OG image related to the post should be specify in the frontmatter. The recommended size for OG image is **_1200 X 640_** px.

> Since AstroPaper v1.4.0, OG images will be generated automatically if not specified. Check out [the announcement](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/).

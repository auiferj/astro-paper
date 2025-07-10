---
author: ximo
pubDatetime: 2025-07-09T09:50:08Z
modDatetime: 2025-07-09T09:50:08Z
title: discord机器人
featured: true
draft: false
tags:
  - AI
  - FAQ
canonicalURL: https://smale.codes/posts/setting-dates-via-git-hooks/
description: Auantit over quality,The fastest path to mastery isn’t perfection.
---
> Write me a Gemini Discord bot that answers questions using a FAQ.md file I will provide

创建一个 Discord 机器人，使用 Gemini API 并根据提供的 FAQ.md 文件来回答问题。

  计划如下：
   1. 创建项目目录： 先创建 discord-robat/ 目录。
   2. 初始化 Node.js 项目： 在该目录中设置一个新的 Node.js 项目。
   3. 安装依赖项： 安装所需的库：用于与 Discord 交互的 discord.js，用于 Gemini API 的 @google/generative-ai，以及用于管理您的密钥的 dotenv。
   4. 创建核心文件：
       * index.js: 该文件将包含 Discord 机器人的主要逻辑。
       * FAQ.md: 创建一个包含说明的示例 FAQ 文件，可以稍后编辑它。机器人将使用此文件作为其知识库。
       * .env: 一个用于安全存储您的 Discord 机器人令牌和 Gemini API 密钥的文件。您需要创建这些凭据并将其添加到此文件中。
       * .gitignore: 用于确保敏感文件和不必要的文件夹（如 node_modules）不会被 git 跟踪。

  这个机器人的工作原理是：它会读取FAQ.md文件的内容，当用户在 Discord 中提问时，它将使用 Gemini API 从 FAQ 内容中寻找最相关的答案，并将其发布在频道中。

✦ 在C:/Users/lenovo/discord-robat/中创建项目文件。首先创建 package.json 文件来定义项目及其依赖项。

✦ 项目已经成功初始化。接下来，安装所需的依赖项：discord.js, @google/generative-ai, 和 dotenv。

✦ 依赖项已安装完毕。现在，创建 index.js 文件，其中包含机器人的核心逻辑。
 
✦ index.js 文件已创建。现在，创建 FAQ.md 文件，您可以稍后编辑此文件以添加您自己的常见问题。
 
✦ FAQ.md 文件已创建。接下来，创建 .env 文件，您需要在此文件中填入您的 Discord 机器人令牌和 Gemini API 密钥。
 
✦ .env 文件已创建。最后，创建 .gitignore 文件，以防止将 node_modules 目录和 .env 文件等敏感信息提交到版本控制中。

✦ 所有文件都已创建完毕。您的 Discord 机器人项目现已在 discord-robat 目录中设置完成。

  接下来的步骤：

   1. 获取凭据：
       * Discord 机器人令牌： 前往[Discord Developer Portal](https://discord.com/developers/applications)创建一个应用程序和机器人，并获取您的机器人令牌。
       * Gemini API 密钥： 前往 [Google AI Studio](https://aistudio.google.com/app/apikey)获取您的 Gemini API 密钥。

   2. 更新 `.env` 文件： 打开 discord-robat/.env 文件，并将 YOUR_DISCORD_BOT_TOKEN 和 YOUR_GEMINI_API_KEY 替换为您获取到的实际凭据。

   3. 自定义 `FAQ.md`： 编辑 discord-robat/FAQ.md 文件，添加您自己的问题和答案。

   4. 运行机器人： 在 new-project 目录中，运行以下命令来启动您的机器人：

   > node index.js


  现在，您的 Discord 机器人已准备就绪，可以根据您在 FAQ.md 文件中提供的内容来回答问题了。

✦ 怎样在discord上创建一个应用程序和机器人：

  第一步：创建应用程序

   1. 前往 Discord 开发者门户
       * 打开浏览器，访问[https://discord.com/developers/applications](https://discord.com/developers/applications)。
       * 如果尚未登录，请登录您的 Discord 帐户。

   2. 创建新应用
       * 点击页面右上角的 "New Application"（新建应用程序）按钮。
       * 为您的应用程序命名（例如，“FAQ Bot”），然后同意 Discord 的服务条款。
       * 点击 "Create"（创建）。

  第二步：创建机器人并获取令牌

   1. 进入机器人页面
       * 创建应用程序后，您会看到该应用的设置页面。在左侧的菜单中，点击 "Bot"（机器人）选项。

   2. 添加机器人
       * 点击 "Add Bot"（添加机器人）按钮，然后在弹出的确认窗口中点击 "Yes, do it!"。

   3. 获取机器人令牌 (Token)
       * 在机器人页面上，您会看到一个 "Reset Token"（重置令牌）的按钮。点击它，然后再次确认。
       * Discord 将会生成一串新的令牌。点击 "Copy"（复制）按钮。
       * ⚠️ 重要提示： 这个令牌非常重要，相当于您机器人的密码。绝对不要与任何人分享它。
       * 将复制的令牌粘贴到您项目 new-project/.env 文件中的 DISCORD_TOKEN 后面，替换掉 YOUR_DISCORD_BOT_TOKEN。

   4. 启用特权网关意图 (Privileged Gateway Intents)
       * 在同一个机器人页面上，向下滚动找到 "Privileged Gateway Intents" 部分。
       * 由于您的机器人需要读取用户发送的消息内容，您必须启用 "MESSAGE CONTENT INTENT" 这个选项。点击它旁边的开关以启用。

  第三步：邀请机器人到您的服务器

   1. 生成邀请链接
       * 在左侧菜单中，点击 "OAuth2"，然后选择 "URL Generator"（URL 生成器）。
       * 在 "SCOPES"（作用域）列表中，勾选 `bot`。
   2. 设置机器人权限
       * 勾选 bot 作用域后，下方会出现一个新的 "BOT PERMISSIONS"（机器人权限）面板。
       * 根据您的代码，机器人需要发送消息。请在权限列表中勾选 "Send Messages"（发送消息）和 "Read Message History"（读取消息历史）。
   3. 复制并使用链接
       * 设置好权限后，页面底部会生成一个 URL。点击 "Copy"（复制）按钮。
       * 将这个链接粘贴到新的浏览器标签页中打开。
       * 选择您想要添加机器人的服务器（您需要有“管理员”或“管理服务器”的权限），然后点击 "Authorize"（授权）并完成人机验证。

  完成以上步骤后，您的机器人就已经成功创建并被邀请到您的 Discord 服务器中了。现在，您可以回到您的项目，在 discord-robat 目录下运行 node index.js 来启动它了。

✦ 运行了node index.js,要验证您的机器人是否正常工作，请按照以下步骤操作：

   1. 检查终端输出
       * 首先，查看您运行 node index.js 的那个终端或命令提示符窗口。
       * 如果一切顺利，您应该会看到一条类似这样的消息：

          > Logged in as YOUR_BOT_NAME#1234!

          其中 YOUR_BOT_NAME#1234 是您机器人的用户名和标签。这表示机器人已成功连接到 Discord。

   2. 检查 Discord 服务器
       * 前往您邀请了机器人的那个 Discord 服务器。
       * 查看服务器的成员列表（通常在右侧）。您应该能看到您的机器人显示为“在线”。

   3. 与机器人互动
       * 在服务器的任何一个文本频道中，发送一条消息来提问。这个问题应该与您 FAQ.md 文件中的内容相关。
       * 例如，根据我们之前创建的 FAQ.md，您可以尝试发送：

             What is this server about?

          或者

             How do I get help?

   4. 观察机器人的回应
       * 如果机器人配置正确，它应该会回复一个基于 FAQ.md 内容的答案。
       * 如果您问了一个 FAQ.md 中没有的问题，它应该会回复类似“I couldn't find an answer.”（我找不到答案）的消息。

  故障排查：

   * 如果终端没有显示 "Logged in..." 消息：
       * 请检查 .env 文件中的 DISCORD_TOKEN 是否正确无误，并且没有多余的空格。
       * 检查您的网络连接。
   * 如果机器人在 Discord 中显示为“离线”：
       * 请确保 node index.js 进程仍在运行，并且没有报错。
   * 如果机器人在线但不回复消息：
       * 确保您在 Discord 开发者门户中为您的机器人启用了 "MESSAGE CONTENT INTENT"。
       * 检查 .env 文件中的 GEMINI_API_KEY 是否正确。
       * 检查终端中是否有来自 Gemini API 的错误信息。
       * 确保您提问的频道，机器人拥有“读取消息”和“发送消息”的权限。


  通过以上步骤，您就可以全面地验证您的 Discord 机器人是否已成功运行。

> Error generating response from Gemini: GoogleGenerativeAIFetchError: [GoogleGenerativeAI Error]: Error fetching from
  https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent: [404 Not Found] models/gemini-pro is not found for API version v1beta, or is not supported
  for generateContent. Call ListModels to see the list of available models and their supported methods.
      at handleResponseNotOk (C:\Users\lenovo\new-project\node_modules\@google\generative-ai\dist\index.js:434:11)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async makeRequest (C:\Users\lenovo\new-project\node_modules\@google\generative-ai\dist\index.js:403:9)
      at async generateContent (C:\Users\lenovo\new-project\node_modules\@google\generative-ai\dist\index.js:867:22)
      at async Client.<anonymous> (C:\Users\lenovo\new-project\index.js:35:24) {
    status: 404,
    statusText: 'Not Found',
    errorDetails: undefined
  }
  报错了，为什么

✦ 这个错误是因为代码中使用的 gemini-pro 模型名称对于您当前使用的 API 版本来说，已经不被支持或找不到了。Google 会定期更新可用的模型。

  问题原因：
  错误日志 [404 Not Found] models/gemini-pro is not found 明确指出，名为 gemini-pro 的模型不存在。

  解决方法：
  我们需要将 index.js 文件中的模型名称更新为一个当前可用的模型。一个很好且高效的选择是 gemini-1.5-flash。

✦ 将 index.js 文件中的模型更新为 gemini-1.5-flash。

  请您按照以下步骤操作：

   1. 重新启动机器人：
       * 如果您的 node index.js 进程仍在运行，请先在终端中按 Ctrl + C 停止它。
       * 然后，再次运行 node index.js 来启动机器人。

   2. 再次测试：
       * 回到您的 Discord 服务器，并再次向机器人提问。

✦ 这个程序实现的原理，为什么有了gemini和discord的token，机器人就可以回答问题了:

  我用一个简单的比喻来解释，然后再说明技术细节。

  简单的比喻：餐厅服务员与厨师

  想象一下：
   * Discord 服务器：就像一个餐厅。
   * 用户：是餐厅里的顾客。
   * 你的机器人 (`index.js`)：是餐厅里的一个服务员。
   * `FAQ.md` 文件：是服务员口袋里的一本“本店特色菜”说明书。
   * Gemini API：是餐厅里一位知识渊博、只会严格按照菜谱做菜的厨师。

  整个流程是这样的：

   1. 顾客（用户）在餐厅里大声问：“你们的招牌菜是什么？”
   2. 服务员（你的机器人）听到了这个问题。他自己并不知道答案，但他知道厨师知道。
   3. 服务员跑到厨房，把顾客的问题和自己的“特色菜说明书” (FAQ.md) 一起递给厨师（Gemini API），并说：“请根据这份说明书，回答一下顾客的这个问题。”
   4. 厨师（Gemini）阅读了说明书，找到了最相关的内容，然后生成了一句回答：“我们的招牌菜是xxx，特点是yyy。”
   5. 服务员（你的机器人）拿着厨师准备好的回答，走回大堂，把它告诉了顾客。

  技术原理解析

  总结： 你的机器人程序是一个协调者和信使。它使用 Discord Token 在 Discord 上进行“听”和“说”，并使用 Gemini API Key 来请求“大脑”（Gemini）进行“思考和回答”。两者缺一不可。
  
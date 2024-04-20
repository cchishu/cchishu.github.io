---
layout: post
title: "如何制作网站（草稿，持续更新）"
date: 2024-04-20 20:45:00 +0800
image: /images/post/24/daodan.png
excerpt: "This is a short excerpt from my post..."
---

## 如何制作网站

本平台使用 [Jekyll](https://jekyllrb.com) 搭建。



如何在不会写代码的情况下用半天时间搭建网站？

我有上中下三策：

上策：一言以蔽之，抄！

Jekyll 上有许多模板，https://jekyllrb.com/resources/，拿来便可，开源的事，怎么能叫抄呢？去知乎上搜如何用 jekyll 搭建个人主页，也会有人教大家如何做，一般都是教大家直接把他自己个人主页的模板下载下来，然后做些微调就好了。

为何为上策？省时间，方便。

当然，日后惹出祸来，不把师父说出来就行了。

中策：用 GPT 一步步生成。此策看着不需要动脑，做个每月出 20$ 的甲方即可，甚至还能白嫖。但如此很花时间，要一遍遍调教 GPT，让 GPT 输出正确答案，而且出错也不知如何是好，debug 要花去大量时间。

下策：看 html 的书，从基础知识慢慢学，看 jekyllrb 指南，一步步尝试，快则一周速成，慢则创业未半而中道崩殂。



那如何快速搭建？

0. 可以先想想自己喜欢的 html 网页长啥样。一些可以下载模板的 html 网页 https://html5up.net/

1. 首先就是安装 Jekyll，这步官网查询即可，可以按官网教程操作，做到生成网页这步就好了。也可以看看知乎，知乎不少人介绍，可以先把他们所说的注册 github 账号跳过，我们 focus 在如何安装 Jekyll 就好。

   用 terminal 进入对应你想进入的文件夹即可，在 terminal 中输入：

   > bundle exec jekyll serve

   这一步 terminal 会自动生成网页，在浏览器中输入输入 http://localhost:4000/ 即可查看简陋网站。

2. **了解目录结构**

   个人认为这步至关重要。只要了解目录结构，就可以快速搭建个人主页，不管用 GPT 还是引用他人文件。在第一步后，可以看到对应目录生成文件，当然它们比较简陋，我们这时要是使其变得有序，了解各个文件作用。我个人按如下方式排序

   - your-site/
     - _config.yml
     - Gemfile
     - _layouts/
       - default.html
       - page.html
       - blogs.html
     - _posts/
       - 2024-04-20-How-to-make-web.md
     - _pages/
       - about.md
       - lecturenotes.md
       - publications.md
       - blog.md
     - assets/
     - index.md

   **问题来了，如何看到我这样的目录或者是类似目录？**

   

3. 这是




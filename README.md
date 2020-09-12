<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  3S Laboo(齋藤システムサービスLABO!)のブログ
</h1>

  `https://github.com/gatsbyjs/gatsby-starter-blog`を基に3S Laboo(齋藤システムサービス)をブログのプログラムを作成しました。
  よろしければ皆様のベース機能としてご使用ください。

## 主な機能
表紙、ブログ、ワーク(作品の説明用のブログを想定)、自己紹介の4つに別れています。

1. **表紙(パスは/)**

    簡単な自己紹介とブログ・ワークの一覧(6件ずつ)を表示します。
2. **ブログ(パスは/blog)**
    作成したブログを一覧表示します。
    
    ブログはmdファイルで作成します。
    
    ブログの種別をblogにするとブログの一覧に表示します。
    
    タイトルをクリックするとブログの本文に移動します。
3. **ワーク(パスは/works)**
    作成したワークを一覧表示します。

    ワークといってもブログと同じです。

    作成した作品の紹介文等を記載するように検討しています。
    
    mdファイルで作成します。
    
    ブログの種別をworkにするとワークの一覧に表示します。
    
    タイトルをクリックするとワークの本文に移動します。

4. **自己紹介(パスは/about)**
    自己紹介をする場所として記載しています。

    内容はほぼ自由です。


## 🚀 Quick start

1.  **Create a Gatsby site.**

    以下を実行すれば起動できます。残りはgatsby-starter-blogと同じです。
    (モジュールのインストールに時間がかかると思います。)

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new my-blog-starter https://github.com/3sLaboo/gatsby-blog-3SLaboo
    cd my-blog-starter/
    gatsby develop
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-blog)

<!-- AUTO-GENERATED-CONTENT:END -->

Jekyll static site boilerplate
-------------------------------

Pure HTML を出力する（CSR/SSR などの選択肢のない）静的サイトに Jekyll を利用しつつ、フロントエンドの制作・開発のための安定的なレールを敷くことを目的とした boilerplate.

利用ツール
----------

 * [Jekyll • Simple, blog\-aware, static sites \| Transform your plain text into static websites and blogs](https://jekyllrb.com/)
 * [rollup\.js](https://rollupjs.org/guide/en/)
 * [PostCSS \- a tool for transforming CSS with JavaScript](https://postcss.org/)
 * [Home \| Stylelint](https://stylelint.io/)
 * [Husky \- Git hooks](https://typicode.github.io/husky/#/)
 * [okonet/lint\-staged: 🚫💩 — Run linters on git staged files](https://github.com/okonet/lint-staged)
 * [csstools/postcss\-preset\-env: Convert modern CSS into something browsers understand](https://github.com/csstools/postcss-preset-env)
 * [postcss/autoprefixer: Parse CSS and add vendor prefixes to rules by Can I Use](https://github.com/postcss/autoprefixer)
 * [lahmatiy/postcss\-csso: PostCSS plugin to minify CSS using CSSO](https://github.com/lahmatiy/postcss-csso)
 * [ddollar/foreman: Manage Procfile\-based applications](https://github.com/ddollar/foreman)

目的
----

以下を満たすボイラープレートのようなものを用意する。

 * 小規模制作ではレイアウトの共通化と簡単な Sass のコンパイルができればだいたいなんとかなる
 * JavaScript については CDN だけでもだいたいなんとかなるが、Rollup を利用してオリジナルのライブラリなどを利用しやすくしてある。Vue などを利用したければ rollup の plugin を追加して対応することが可能
 * cache busting については Netlify などホスティングによっては考慮する必要がないし、必要になったとしても bundler 側でなく Jekyll 側で https://github.com/colorfulcompany/jekyll-anticache-tag などを利用するだけでも十分機能する
     * 場合によっては IE などレガシーな環境を考慮する必要があるかもしれない。そのような場合に備えて Babel を使える余地も用意してある
 * JavaScript と CSS についてはともに ESLint および Stylelint を利用して standard と言われている config を適用し、記述のブレが減るようにしている
 * PostCSS で Scss の対応と、 preset-env / autoprefixer を利用して browserslist に記述のあるブラウザへの変換を行うことで、ブラウザ間の差異をできるだけ意識しなくて済むように
 * production build 用に terser と csso で JavaScript と CSS の minify をしている

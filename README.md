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

 * 小規模制作では **レイアウトの共通化** と簡単な Sass のコンパイルができればだいたいなんとかなる
 * ブラウザの互換性チェックなどの **コストは削減したい**
 * JavaScript については CDN だけでもだいたいなんとかなるが、Rollup を利用してオリジナルのライブラリなどを利用しやすくしてある。Vue などを利用したければ rollup の plugin を追加して対応することも可能
 *  場合によっては IE などレガシーな環境を考慮する必要があるかもしれない。そのような場合に備えて babel-preset-env を使える余地も用意してある
 * **cache busting** については Netlify など **ホスティングによっては考慮する必要がない** し、必要になったとしても bundler 側でなく Jekyll 側で https://github.com/colorfulcompany/jekyll-anticache-tag などを利用するだけでも十分機能する
 * JavaScript と CSS については ESLint および Stylelint を利用して Standard と言われている config を適用し、**記述のブレを減らす** ようにしている
 * PostCSS で **Scss** の対応と、 preset-env / autoprefixer を利用して browserslist に記述のあるブラウザへの変換を行うことで、**ブラウザ間の差異をできるだけ意識しなくて済むように**
 * production の **asset の転送量削減** 用に terser と csso で JavaScript と CSS を minify

選定理由
--------

<dl>
  <dt>Jekyll</dt>
  <dd>GitHub Pages に利用されており、プロジェクトが終了してしまうリスクが小さい。開発期間も長く、テーマ、周辺のツール、サービスなどエコシステムが大きい。</dd>
  <dt><s>Webpack</s></dt>
  <dd><s>デファクトであり情報量は多いが、設定量も多く、またメジャーバージョン間での非互換も多いので設定コスト、メンテナンスコストが高い</s></dd>
  <dt>Rollup</dt>
  <dd>ベースが Jekyll になる場合、Webpack のようにすべての asset を JavaScript で扱う必要はない。また asset や画面内の要素が大規模でなければ dev server や HMR がなくてもそれほど困らない。最低限の機能がすぐに使える状態になる Rollup でちょうどよい。</dd>
  <dt><s>VirtualDOM</s></d></dt>
  <dd><s>コンテンツを中心に考える場合、VirtualDOM が必要になるような高頻度の DOM の書き換えは必要ないし、event や状態の管理も必要ない。component 設計に関わるコストを常に抱える必要はない。</s></dd>
  <dt>ESLint / Stylelint</dt>
  <dd>よほど記述量が少ないのでなければ導入しない理由がない</dd>
  <dt>PostCSS</dt>
  <dd>Sass だけではブラウザごとの互換性の問題に対応できないし、minify も行えない。新しい文法も CSS-in-JS も特に必要ないので、汎用的で強力なエコシステムを持つ PostCSS が CSS に関する問題の解決策として最適</dd>
  <dt>csso</dt>
  <dd>PostCSS の処理の中に入れられるし <a href="https://goalsmashers.github.io/css-minification-benchmark/">CSS minification benchmark results</a> によるとネガティブな要素が少ない</dd>
</dl>

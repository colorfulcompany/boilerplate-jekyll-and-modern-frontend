Modern Jekyll Static Site Boilerplate
-------------------------------------

Pure HTML を出力する（CSR/SSR などの選択肢のない）静的サイトに Jekyll を利用しつつ、フロントエンドの制作・開発のための安定的なレールを敷くことを目的とした boilerplate.

利用方法
--------

以下のようにコマンドを叩くと、このリポジトリで利用しているツールをまとめてインストールし、実行するスクリプトを設定することができる。

```
$ npm x @colorfulcompany/create-cc-jlmf <project>
$ cd <project>
$ bundle install [--path vendor/bundle]
$ yarn
```

npm v6 以下の場合は npm x ( exec ) ではなく npx コマンドを利用。

### 依存ツール

 * Ruby
 * Foreman
 * Node.js 14+

利用ツール
----------

 * [EditorConfig](https://editorconfig.org/)
 * [Jekyll • Simple, blog\-aware, static sites \| Transform your plain text into static websites and blogs](https://jekyllrb.com/)
 * [rollup\.js](https://rollupjs.org/guide/en/)
 * [esbuild \- An extremely fast JavaScript bundler](https://esbuild.github.io/)
 * [Stimulus: A modest JavaScript framework for the HTML you already have\.](https://stimulus.hotwired.dev/)
 * [PostCSS \- a tool for transforming CSS with JavaScript](https://postcss.org/)
 * [JavaScript Standard Style](https://standardjs.com/)
 * [stylelint/stylelint\-config\-standard: The standard shareable config for stylelint](https://github.com/stylelint/stylelint-config-standard)
 * [Home \| Stylelint](https://stylelint.io/)
 * [Husky \- Git hooks](https://typicode.github.io/husky/#/)
 * [okonet/lint\-staged: 🚫💩 — Run linters on git staged files](https://github.com/okonet/lint-staged)
 * [csstools/postcss\-sass: Use Sass as a PostCSS plugin](https://github.com/csstools/postcss-sass)
 * [csstools/postcss\-preset\-env: Convert modern CSS into something browsers understand](https://github.com/csstools/postcss-preset-env)
 * [postcss/autoprefixer: Parse CSS and add vendor prefixes to rules by Can I Use](https://github.com/postcss/autoprefixer)
 * [lahmatiy/postcss\-csso: PostCSS plugin to minify CSS using CSSO](https://github.com/lahmatiy/postcss-csso)
 * [ddollar/foreman: Manage Procfile\-based applications](https://github.com/ddollar/foreman)

目的
----

以下を満たすボイラープレートを用意する。

 * **少ない設定でフロントエンドに不慣れな者でも** ある程度レールに乗った制作、開発を行えるようにする
 * 小規模制作では **レイアウトの共通化** と簡単な Sass のコンパイルができればだいたいなんとかなる
 * ブラウザの互換性チェックやメンテナンスの難しいコードを書いてしまったことによる **コストは削減したい**
 * JavaScript については CDN だけでもだいたいなんとかなるが、build プロセスを入れることで syntax の downgrade や asset の数の削減、minify を行っている
 * **cache busting** については Netlify など **ホスティングによっては考慮する必要がない** し、必要になったとしても bundler 側でなく Jekyll 側で https://github.com/colorfulcompany/jekyll-anticache-tag などを利用するだけでも十分機能する
 * JavaScript と CSS については ESLint および Stylelint を利用して Standard と言われている config を適用し、**記述のブレを減らす** ようにしている
 * PostCSS で **Scss** の対応と、 preset-env / autoprefixer を利用した変換を行うことで、**ブラウザ間の差異をできるだけ意識しなくて済むように**
 * production の **asset の転送量削減** 用に esbuild と csso で JavaScript と CSS を minify

選定理由
--------

基本的にマイナーすぎるもの、設定コストの高いもの、設計コストの高いもの、レビューコストの高いものはできるだけ除外しつつ、選定時点から数年後において、古すぎる考え方を強制しないもの、コーディングのスキル向上を期待できるものを選んでいる。

メジャーなものでもあえて採用していないものについてはその理由も挙げている。

<dl>
  <dt>Jekyll</dt>
  <dd>GitHub Pages に利用されており、プロジェクトが終了してしまうリスクが小さい。開発期間も長く、テーマ、周辺のツール、サービスなどエコシステムが大きい。多くの静的サイトジェネレータの考え方のベースになっており、今となっては独自の要素がとても少ない。</dd>
  <dt><s>Webpack</s></dt>
  <dd><s>デファクトであり情報量は多いが、設定量も多く、またメジャーバージョン間での非互換も多いので設定コスト、メンテナンスコストが高い</s></dd>
  <dt>Rollup</dt>
  <dd>ベースが Jekyll になる場合、Webpack のようにすべての asset を JavaScript で扱う必要はない。また asset や画面内の要素が大規模でなければ dev server や HMR がなくてもそれほど困らない。最低限の機能がすぐに使える状態になる Rollup でちょうどよい。</dd>
  <dt>esbuild</dt>
  <dd>基本的には Rollup だけでも困らないが、production build の Tree Shaking や minify 用途および ESMA version の lowering に esbuild を利用</dd>
  <dt><s>Virtual DOM</s></d></dt>
  <dd><s>コンテンツを中心に考える場合、VirtualDOM が必要になるような高頻度の DOM の書き換えは必要ないし、event や状態の管理も必要ない。component 設計に関わるコストを常に抱える必要はない。</s></dd>
  <dt>Stimulus</dt>
  <dd>あらかじめ命名した controller とそれに紐づいた限定的な DOM 要素だけを操作対象にできるので、処理の範囲と意図を明確にでき、メンテナンスコストの上昇を防ぎつつ、Virtual DOM ほどの細粒度の component 設計にまつわるコストの上昇も防ぐことができる</dd>
  <dt><s>jQuery</s></dt>
  <dd><s>「このコードはどのような意図で書かれているのか？」を残す文化が醸成されておらず、書いた本人が書いた瞬間に読まないと意味が分からなくなってしまいやすい</s></dd>
  <dt>ESLint / Stylelint</dt>
  <dd>よほど記述量が少ないのでなければ導入しない理由がない</dd>
  <dt>PostCSS</dt>
  <dd>Sass だけではブラウザごとの互換性の問題に対応できないし、minify も行えない。そこで汎用的で強力なエコシステムを持つ PostCSS が CSS に関する問題の解決策として最適</dd>
  <dt>csso</dt>
  <dd>PostCSS の処理の中に入れられるし <a href="https://goalsmashers.github.io/css-minification-benchmark/">CSS minification benchmark results</a> によるとネガティブな要素が少ない</dd>
</dl>

jQuery については制作においては非常に有用で、その大きなエコシステムにしたがって plugin の利用なども合わせるとコーディングコストを大幅に抑制しつつ期待する効果を得ることができる。一方、最新のバージョンを適切に利用しようとする場合、過去の plugin は更新が止まっていて動かないことも多く、JavaScript, CSS の新しいバージョンの機能を使えばそもそも jQuery 自体が不要であることも多い。

したがって新規にフロントエンドのコーディングを始めるに当たっては jQuery を使わずに書けることを目指す方が成果物をより安全にし、成果物の寿命を伸ばし、コーディングスキルの向上に寄与すると考え、選定ツールから除外した。

jQuery を使わないなら React, Vue.js などの Virtual DOM が未来なのではないかと考えることもできるが、上に書いた通り高頻度で大胆な DOM 更新が必要な機会はそれほど多くないので、最初の目的である「少ない設定でフロントエンドに不慣れな者でも」に合致しないと考え、DOM 更新の影響範囲を閉じ込める用途に Stimulus を採用した。

このボイラープレートの開発方法
----------------------------

### 1. ボイラープレートそのものの開発とドキュメントの更新

 * 通常通り git clone する

### 2. インストーラの開発

#### 2.1. インストーラの動作検証場所を準備

 * 通常通り git clone する
 * git clone した場所とは別に新しくディレクトリを作成する
 * 新しく作成したディレクトリの中に package.json を用意し、以下のようにバージョンを指定する場所に local の repository のパスを記述する

```json
{
  "dependencies": {
    "@colorfulcompany/create-cc-jlmf": "../path/to/repos"
  }
}
```

#### 2.2. パッケージのインストールと実行

以下のようにコマンドを打ってインストーラを実行する

```
$ yarn install
$ npm x @colorfulcompany/create-cc-jlmf <project>
```

インストーラ本体は本リポジトリの `install.js` なので、これを更新するたびにインストーラの動作を試すディレクトリで `yarn.lock` を削除して 2.2 に戻る。

設定理由
--------

ESLint はとりあえず ES2017 基準。**基本は ES2017** に置くという意味であって、より古いバージョンにすることもより新しいバージョンにすることも特に問題ない。ただし理解したうえで明示的な設定を行うものとする。例えば正規表現の named capture や lookbehind は ES2018 相当、class fields は ES2022 相当なのでこのままでは lint エラーになる。これは使おうとしている機能の互換性を考えるきっかけを作り、スキル向上に役立てるためであって、制作コストを下げるためではない。

ESLint も Stylelint も **Standard** を基準にしているが、新規に書く場合はある程度強くてメジャーなルールに合わせた方がよいだろうということと、**エディタや IDE の対応もよい** ので、最初のルールとして採用した。

一方で husky を採用しているにも関わらず formatter として pre-commit で適用することは意図していない。`--fix` は必要に応じて設定、実行すること。これは commit 前の diff と commit 後の diff が変わってしまうことを避けるためで、formatter としてこれらを適用してはいけないという意味ではない。formatter として活用するなら pre-commit など git の hook ではなくエディタや IDE に組み込んで保存時に自動的に適用する方がよいだろう。

HTML に関して Prettier を採用する選択肢もあったが、**Prettier を入れると JavaScript の設定が Standard とぶつかってしまう** ので、必要以上に各ツールの設定を複雑にしないために不採用とした。プロジェクトによっては HTML にも強い制約を設けつつ Standard と同居させる設定を詰める方がよいケースもあるかもしれないので、そういう場合の Prettier の採用を妨げる意図はない。

Rollup にも dev server があるので、比較的規模の大きな CSS を書く場合など、効率を求めて plugin を設定してもよい。あくまで初期設定としてはそこまで必要ないだろうという判断。

CSS に関しては Sass と preset-env を基本にしているが、PostCSS に寄せてあるので、**Tailwind などに切り替えてもよい** 。これも他の設定と同じように **よりメジャーである、またはより始めやすいもの** に寄せてあるだけで、レスポンシブ対応始め、高度な CSS を書くにはむしろ **2021年現在では Sass ( Scss ) はやや中途半端な存在** になりつつあるかもしれない。とは言え jQuery ほどには積極的に不採用にする強い理由があるわけではないので、Sass を基本とした。

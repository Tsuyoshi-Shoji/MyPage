---
name: Frontend Guidelines
description: "Use when building or editing this freelance software engineer portfolio's React, Next.js, TypeScript, CSS, Tailwind, responsive layouts, system architecture visuals, animation, images, interaction, or accessibility."
applyTo: "**/*.{ts,tsx,css}"
---

# Frontend Instructions

## 1. 適用範囲

このファイルは、React、Next.js、TypeScript、Tailwind CSSを使用したフロントエンド実装へ適用します。

プロジェクト全体の目的、デザイン、データ管理、SEO、AIO、検証方針については、以下も参照してください。

- `.github/copilot-instructions.md`
- `.github/instructions/seo.instructions.md`
- `.github/instructions/aio.instructions.md`
- `.github/agents/web-designer.agent.md`

このファイルでは主に、

- React / Next.js実装
- TypeScript
- Tailwind CSS
- レスポンシブ
- 画像
- HeroのSystem Architecture表現
- アニメーション
- インタラクション
- アクセシビリティ
- パフォーマンス

を扱います。

---

## 2. Next.js・React

App Routerの規約に従ってください。

Server Componentをデフォルトとします。

以下が必要な場合のみClient Componentを使用してください。

- state
- event handler
- browser API
- IntersectionObserver
- ResizeObserver
- Pointer / Mouse interaction
- Canvas
- WebGL
- client-side animation library
- scroll-linked interaction

アニメーションのためだけにページ全体や大きなセクション全体をClient Componentにしないでください。

可能であれば、

```text
Server Component
└ Client Component
```

のように、動きが必要な部分だけを局所的にClient Component化してください。

内部リンクには`next/link`を使用してください。

ローカル画像には`next/image`を使用してください。

フォントは`next/font/local`を優先します。

ブラウザからGoogle Fontsなど外部フォント配信元への実行時リクエストを発生させないでください。

ローカルフォント素材がない場合は、既存フォントまたは適切なシステムフォントを使用してください。

ページ固有のMetadataはMetadata APIで定義してください。

静的に表現できる内容へ、不要なstateやEffectを導入しないでください。

派生可能な値を別stateとして保持しないでください。

Server Componentから取得できる静的データを、Client Component内で再取得しないでください。

---

## 3. TypeScript

Props、データ、関数の戻り値を適切に型付けしてください。

`any`は原則使用しません。

型が不明な外部入力には`unknown`を使用し、検証後に絞り込んでください。

不要な型アサーションを避けてください。

以下は使用しないでください。

```text
@ts-ignore
@ts-nocheck
```

複数箇所で共有する型は、実際に共有の必要が発生した場合のみ`src/types`などへ配置してください。

コンポーネント内だけで使用する単純なProps型は、そのコンポーネントの近くに定義して構いません。

静的データには必要に応じて`satisfies`を使用し、型安全性とリテラル型を維持してください。

Career、Project Experience、Worksは異なる意味を持つため、同一の汎用型へ無理に統合しないでください。

例:

```ts
type CareerItem = {
  role: string;
  period?: string;
  description: string;
};

type ProjectExperience = {
  project: string;
  role: string;
  domain: string;
  responsibilities: string[];
  technologies: string[];
};

type Work = {
  slug: string;
  title: string;
  type: string;
  role: string[];
  technologies: string[];
  year?: number;
};
```

実装内容に合わせて型は調整して構いません。

---

## 4. コンポーネント設計

ページを構成する大きな単位は`components/sections`へ配置してください。

例:

```text
Hero
Profile
Career
ProjectExperience
Works
Contact
```

複数セクションやページで再利用するUIは`components/ui`へ配置してください。

Header、Footerなどサイト全体で使用するものは`components/layout`へ配置してください。

`page.tsx`はセクションの組み立てを中心とし、大量のマークアップを直接記述しないでください。

ただし、1度しか使わない数行程度の要素まで過剰にコンポーネント分割しないでください。

1つのコンポーネントに複数の独立した責務を持たせないでください。

抽象化は、実際に重複または再利用が発生してから行ってください。

表示文言や経歴、参画実績、Works、問い合わせ先は、可能な限り型付きデータから受け取ってください。

`Button`という1つのコンポーネントでリンクとボタンの意味を曖昧にしないでください。

- 遷移 → `<a>` / `Link`
- 操作 → `<button>`

を使用してください。

絵文字をアイコンや装飾の代用として使用しないでください。

---

## 5. デザイン実装の基本方針

サイトの視覚方向は、

```text
Ultra Minimal
×
Digital Product Designer
×
System Engineering
```

です。

フロント実装でも以下を維持してください。

- グレー主体
- 大きな余白
- 明確なグリッド
- 細い区切り線
- 大きなタイポグラフィー
- 小さなメタ情報
- 非対称構成
- 低彩度
- シルバーを補助的に使用
- 過度に装飾しない

以下をエンジニア表現として安易に使用しないでください。

- ターミナルUI
- コード背景
- ネオン
- matrix風表現
- GitHub UI模倣
- 不要な技術ロゴ一覧
- スキルゲージ

技術感は、構造、線、データ表現、System Architecture、情報整理によって表現してください。

---

## 6. Tailwind CSS

モバイルファーストで基本スタイルを書き、`md:`、`lg:`、必要に応じて`xl:`で段階的に拡張してください。

原則としてTailwindのユーティリティクラスを使用してください。

`style`属性は、実行時に算出する値やCSS変数など、Tailwindで合理的に表現できない場合に限定してください。

以下のような任意値は必要な場合のみ使用してください。

```text
w-[347px]
top-[13px]
tracking-[0.24em]
```

今回のデザインでは微調整が必要になる場合がありますが、画面ごとに大量のマジックナンバーを作らないでください。

色、フォント、余白、線、コンテナ幅など繰り返し使用する値は、

- Tailwind theme
- CSS custom properties

へ定義してください。

動的な文字列連結でTailwindクラス名を生成しないでください。

必要なクラス名は完全な文字列として列挙してください。

同じクラス群が繰り返される場合は、共通コンポーネントまたはヘルパーを検討してください。

`@apply`はグローバルな基本要素など、明確な理由がある場合に限定してください。

`!important`とTailwindの`!`修飾子を原則使用しないでください。

---

## 7. カラー

メインカラーはグレーです。

実装では役割ごとのトークンを使用してください。

例:

```css
--color-background:
--color-surface:
--color-text-primary:
--color-text-secondary:
--color-border:
--color-silver:
--color-hover:
```

特定のHEX値を複数コンポーネントへ直接記述しないでください。

背景は完全な白・完全な黒に寄せすぎず、グレーの階調で構成してください。

Silverは以下の用途を中心に使用します。

- divider
- metadata
- System Architecture
- hover
- subtle highlight

シルバー色を大面積の背景として使用しないでください。

---

## 8. タイポグラフィー

タイポグラフィーは主要な視覚要素です。

Heroの、

```text
THINK.
DESIGN.
BUILD.
```

を中心に、極端なサイズ差によって階層を作ってください。

見出しと小さなメタ情報を対比させます。

例:

```text
THINK.                  96px+
PROJECT / 001           10px - 13px
ROLE                    10px - 12px
```

実際のサイズはviewportに応じて調整してください。

`clamp()`の使用も検討できます。

例:

```css
font-size: clamp(4rem, 10vw, 10rem);
```

ただし可読性を確認してください。

改行位置もデザインの一部として扱います。

モバイルでデスクトップと同じ改行を強制しないでください。

本文の1行幅を広げすぎず、可読性を確保してください。

---

## 9. レスポンシブデザイン

主要な設計基準はモバイルとします。

PCレイアウトを単純に縮小してモバイルへ押し込まないでください。

今回のサイトでは特に以下を再設計してください。

- Header
- Hero typography
- Hero System Architecture
- Profile
- Career timeline
- Project Experience
- Works
- Contact

横スクロールは原則発生させないでください。

ただし、明確に意図された横スクロールUIを実装する場合は例外です。

固定幅よりも以下を使用してください。

- `max-w-*`
- CSS Grid
- Flexbox
- percentage
- `minmax()`
- `clamp()`

本文の可読幅を広げすぎないでください。

操作領域は原則44×44px以上を確保してください。

---

## 10. 画面仕様の参照

実装前に`docs/screen-spec/`配下に該当ページの画面イメージが存在する場合は確認してください。

例:

```text
docs/screen-spec/top/top-page-mobile.png
docs/screen-spec/top/top-page-desktop.png
```

デスクトップ・モバイル双方の画面イメージがある場合は両方確認し、

- レイアウト
- 情報の優先順位
- 余白
- タイポグラフィー
- 配色
- 画像領域
- セクションの関係

の基準として使用してください。

画面イメージをピクセル単位で完全再現するのではなく、実際の画面幅で破綻しないレスポンシブ実装にしてください。

---

## 11. Hero System Architecture

HeroにはSystem Architectureをモチーフとした表現を使用できます。

基本的な概念:

```text
USER
↓
FRONTEND
↓
API
↓
APPLICATION
↓
DATABASE
↓
INFRASTRUCTURE
```

ただし、実在するシステムのアーキテクチャ図ではありません。

ブランド表現として抽象化してください。

使用可能な視覚要素:

- Node
- Line
- Layer
- Grid
- Module
- Panel
- Cube
- Data Flow
- Connection
- Label

以下は避けてください。

- 技術ロゴ大量配置
- AWSサービスアイコン大量配置
- 本物の構成図のような複雑さ
- 読めないほど細かい文字
- 装飾目的だけの3Dオブジェクト

重要なテキスト情報はSystem Architecture画像内だけに配置しないでください。

---

## 12. Heroの3D・Canvas・WebGL

System Architectureを3D表現する場合は、まずCSS / SVGで十分に表現できないか確認してください。

WebGLが本当に必要な場合のみ使用してください。

3D表現を実装する場合も、

- 激しい回転
- 常時大きく動く背景
- 過剰なparticle
- 高負荷なshader

は避けてください。

マウスやスクロールによる変化は小さくしてください。

例:

```text
rotateX ±3deg
rotateY ±6deg
translate 数px
```

程度の微細な変化を基本とします。

3D表現が読み込みに失敗しても、HeroのメッセージとCTAは利用可能な状態を維持してください。

---

## 13. Profile

Profileではポートレート画像を使用します。

本人写真が提供されている場合のみ実画像を設定してください。

未提供の場合は、レイアウト確認用のプレースホルダーを使用してください。

Profile内の技術情報は、

```text
実務経験
Web / 個人開発
AI / Development Tools
```

を明確に分けてください。

ロゴ一覧ではなく、テキスト中心のスペックシート風レイアウトを推奨します。

---

## 14. Career

Careerはタイムライン形式を基本とします。

```text
TESTER
DEVELOPER
TEAM LEADER
FREELANCE
```

モバイルでは縦方向を基本としてください。

デスクトップでは画面仕様に応じて、

- 縦
- 横
- スクロール連動

を選択できます。

Careerの情報自体はアニメーションなしでもすべて読めるHTMLとして実装してください。

アニメーションは情報の出現や進行を補助するために使用します。

---

## 15. Project Experience

Project Experienceは、

```text
PROJECT
ROLE
DOMAIN
RESPONSIBILITY
TECH
```

という構造を基本とします。

デスクトップでは表に近いレイアウトを使用できます。

ただし、実際の`<table>`を使用するかGridを使用するかは情報の性質で判断してください。

純粋な表形式データなら`table`を優先してください。

モバイルでは横に押し込まず、

```text
PROJECT
...
ROLE
...
TECH
...
```

のような縦型構成に変更してください。

CareerとProject Experienceを見た目まで完全に同じにしないでください。

---

## 16. Works

Worksは、

```text
Visual 70%
Information 30%
```

を基本とします。

作品画像を大きく表示し、技術情報は補助的な情報として配置してください。

各Worksには必要に応じて、

```text
PROJECT / 001
TYPE
ROLE
TECHNOLOGY
YEAR
VIEW CASE →
```

を表示します。

画像が未提供の場合は、架空のWebサイトスクリーンショットやアプリUIを生成して実績として使用しないでください。

プレースホルダーを使用してください。

Hoverでは、

- 画像の微細なscale
- text shift
- underline
- background tone change

など控えめな表現を使用してください。

---

## 17. Contact

Contactでは以下を表示します。

- LINE
- Mail
- GitHub
- Phone

主要CTAはMailまたはLINEです。

GitHubは補助導線として扱います。

電話番号は直接表示しません。

Phone欄には以下の趣旨の文章を表示してください。

```text
電話番号はメールでお問い合わせいただいた方へ、
返信時にご案内します。
```

そのため、Phoneには`tel:`リンクを設定しないでください。

Contactでは風景写真や装飾画像を使用しません。

タイポグラフィー、線、余白、問い合わせ情報だけで構成してください。

---

## 18. 画像

画像は`public/images`配下へ用途別に配置してください。

例:

```text
public/images/
├── profile/
├── works/
└── system/
```

ファイル名は英小文字、数字、ハイフンを使用してください。

ローカル画像は`next/image`で表示してください。

画像の内容と目的を説明する`alt`を設定してください。

装飾だけの画像は空の`alt`を使用してください。

`fill`を使用する場合は、親要素のpositionとサイズを明示してください。

レイアウトシフトを防ぐため、

- width / height
- aspect-ratio

のいずれかを確保してください。

表示幅に合った`sizes`を指定してください。

不要に大きな画像を配信しないでください。

`priority`はLCP候補となるファーストビュー画像だけに限定して検討してください。

---

## 19. 画像プレースホルダー

実装に使用する本人写真、Works画像などをAIで生成しないでください。

画像素材が提供されていない場合は、

- 存在しない画像パス
- 架空の`src`
- 外部のランダム画像
- AI生成した仮作品

を設定しないでください。

画像領域の寸法・アスペクト比を保持するプレースホルダーを使用してください。

プレースホルダーには原則枠線を付けません。

既存のGray Surfaceなどを使用して領域を示してください。

後から画像を配置してもレイアウトが崩れないサイズを確保してください。

---

## 20. 装飾とオーナメント

不要なオーナメントを追加しないでください。

例:

- 星
- ドット装飾
- 角飾り
- 意味のない円
- 意味のない浮遊線
- フレーム装飾
- 反復パターン

ただし、以下はサイトコンセプト上使用できます。

- セクション区切り線
- Grid
- System ArchitectureのNode / Connection
- Timeline
- 情報構造を示す線

単なる装飾と、情報構造を示す線を区別してください。

System Architectureだからという理由で意味のない線を大量に増やさないでください。

---

## 21. アイコン

アイコンは意味理解に必要な場合のみ使用してください。

Contactの、

- LINE
- Mail
- GitHub
- Phone

ではアイコン使用を検討できます。

まず既存依存関係を確認してください。

既存のアイコンライブラリがある場合はそれを優先してください。

未導入の場合は、4アイコン程度のためだけに大規模なアイコンライブラリを追加しないでください。

必要に応じて小さなSVGをコンポーネントとして実装できます。

装飾アイコンは`aria-hidden="true"`としてください。

アイコンだけの操作要素にはアクセシブルな名前を付けてください。

---

## 22. アクセシビリティ

WCAG 2.2 AAを目標とします。

以下を適切に使用してください。

```text
header
nav
main
section
article
footer
address
time
```

ページの主見出しは原則1つの`h1`としてください。

見出しレベルを飛ばさないでください。

クリックだけでなくキーボード操作に対応してください。

`focus-visible`による明確なフォーカス表示を提供してください。

理由なくoutlineを削除しないでください。

文字色と背景色のコントラストを確保してください。

グレー主体のデザインでは特に、薄いグレー同士で可読性を落とさないよう注意してください。

色だけで、

- current
- hover
- selected
- error

を表現しないでください。

リンク文言は「こちら」だけにせず、目的が分かる内容にしてください。

---

## 23. System Architectureのアクセシビリティ

HeroのSystem Architectureが純粋な装飾表現の場合は、支援技術から隠してください。

例えばSVGなら、

```html
aria-hidden="true"
focusable="false"
```

を検討してください。

一方、System Architecture自体が説明コンテンツとして意味を持つ場合は、適切なテキスト説明をHTML側に用意してください。

細かいノード名を1つずつスクリーンリーダーへ読み上げさせないでください。

---

## 24. アニメーション

このポートフォリオではアニメーションを重要なデザイン要素として使用できます。

ただし、主役はタイポグラフィーと情報構造です。

使用例:

- Scroll-linked animation
- Typography movement
- Reveal
- Mask
- Clip
- Parallax
- Transform
- Opacity
- subtle scale
- System Architecture motion

単純なfadeだけに限定する必要はありません。

一方で、すべての要素を別々に動かさないでください。

モーションには一貫したルールを持たせてください。

---

## 25. Typography Motion

セクション間の接続に、タイポグラフィーを使用できます。

例:

```text
THINK.
DESIGN.
BUILD.

↓

BUILD.
BUILT WITH EXPERIENCE.

↓

CAREER

↓

FREELANCE

↓

SELECTED WORKS

↓

LET'S BUILD SOMETHING.
```

文字の、

- position
- scale
- opacity
- clip
- tracking

などを変化させることができます。

ただし、アニメーション途中でしか読めない情報を作らないでください。

最終的な静止状態でも意味が理解できるようにしてください。

---

## 26. Scroll Animation

スクロール位置に連動する処理は、必要な範囲だけClient Component化してください。

可能であれば以下を優先してください。

- CSS
- IntersectionObserver
- requestAnimationFrame
- transform
- opacity

scrollイベントへ直接大量の処理を登録しないでください。

`getBoundingClientRect()`を毎フレーム大量に呼び出さないでください。

レイアウトスラッシングを避けてください。

transformとopacityを中心に使用してください。

---

## 27. prefers-reduced-motion

必ず`prefers-reduced-motion`を尊重してください。

Reduced Motionでは、

- parallax停止
- scroll-linked transform停止
- 3D rotation停止
- large movement停止
- animation duration短縮または無効化

を行ってください。

ただし、情報・リンク・ボタン・コンテンツが消えないようにしてください。

Reduced Motionでもページ構造と意味が同等に理解できることを必須とします。

---

## 28. アニメーションライブラリ

CSSや標準Web APIで十分な場合は、専用ライブラリを追加しないでください。

既存依存関係にアニメーションライブラリが存在する場合は、それを優先してください。

新たに以下のようなライブラリを導入する場合、

- Motion
- GSAP
- Three.js
- React Three Fiber

導入理由が明確であることを確認してください。

同じ目的のライブラリを複数導入しないでください。

---

## 29. パフォーマンスとページ品質

不要なClient Component、JavaScript、依存パッケージ、マウント後フェッチを増やさないでください。

以下を悪化させる実装を避けてください。

- LCP
- CLS
- INP

Heroはファーストビューのため特に注意してください。

巨大なSystem ArchitectureのJavaScriptがHero表示をブロックしないようにしてください。

必要であれば、

- lazy loading
- dynamic import
- progressive enhancement

を検討してください。

ただし、Heroの主要なコピーは遅延表示しないでください。

---

## 30. GPU・描画負荷

モーションでは`transform`と`opacity`を優先してください。

大量の、

- box-shadow
- blur
- backdrop-filter
- filter
- fixed background
- large transparency layer

は低性能端末で負荷になるため注意してください。

特にSystem ArchitectureをBlurやGlass表現だけで構成しないでください。

---

## 31. 外部リンクと問い合わせ

実際に提供されているものだけを表示してください。

Mailには`mailto:`を使用してください。

LINEとGitHubは実URLが提供されてから設定してください。

Phoneは番号を表示しないため`tel:`を使用しません。

`target="_blank"`を使用する外部リンクには、

```html
rel="noopener noreferrer"
```

を設定してください。

複数箇所で使用する外部URLはデータ定義へ集約してください。

---

## 32. セマンティックなリンク・ボタン

例えば、

```text
VIEW CASE →
```

は詳細ページへの遷移なのでリンクです。

```text
CONTACT →
```

がContactセクションへのスクロールならリンクを使用してください。

モーダルを開くなどのUI操作はbuttonを使用してください。

`div onClick`でクリック可能UIを作らないでください。

---

## 33. モバイルHeader

モバイルでナビゲーションが収まらない場合は、Headerを再設計してください。

ただし、最初からハンバーガーメニューを前提にしないでください。

リンク数と画面幅を考慮し、

- simple menu
- compact navigation
- menu drawer

の順で必要性を判断してください。

Drawerを実装する場合は、

- `aria-expanded`
- `aria-controls`
- Escape
- focus handling
- background scroll

を考慮してください。

---

## 34. HTML上の情報保持

デザイン上の大きな文字、System Architecture、Canvas、SVGなどを使用しても、重要な情報を視覚表現だけへ閉じ込めないでください。

以下は通常のHTMLテキストとして存在させてください。

- 名前
- 職種
- 所在地
- Profile
- Career
- Project Experience
- Works情報
- Contact

AIO / SEO / Accessibilityのためだけでなく、JavaScript障害時の耐性としても必要です。

---

## 35. 実装完了前の確認

PCとモバイルの両方でレイアウトを確認してください。

最低限以下を確認してください。

- Hero typographyが画面外へ不自然にはみ出していない
- System Architectureが本文を妨げていない
- Profile写真領域が崩れていない
- Careerがモバイルで読みやすい
- Project Experienceが横にはみ出していない
- Works画像が意図した比率を維持している
- Contactの4導線が操作できる
- Phoneに番号が表示されていない
- 横スクロールが発生していない
- focus-visibleが確認できる
- 画像altが適切
- 見出し階層が正しい
- console errorがない
- layout shiftが目立たない
- reduced motionでも利用できる

変更規模に応じたlint、型チェック、buildについては`.github/copilot-instructions.md`の検証方針に従ってください。

軽微な見た目変更へ一律で全検証を課さないでください。

検証に失敗した状態を完了として扱わないでください。
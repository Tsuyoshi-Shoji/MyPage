---
name: Performance Guidelines
description: "Use when designing, implementing, reviewing, or measuring website performance, Core Web Vitals, system architecture visuals, WebGL, scroll animation, image delivery, fonts, JavaScript, rendering cost, caching, or runtime efficiency for Tsuyoshi Shoji's Next.js portfolio."
---

# パフォーマンス・速度ガイドライン

## 1. 目的と適用範囲

この指示は、フリーランスソフトウェアエンジニア「庄司剛 / Tsuyoshi Shoji」のポートフォリオサイトにおいて、デザイン性・インタラクション・視覚表現を維持しながら、ページを高速かつ安定して表示し、操作へ素早く応答させるための実装方針を定めます。

このサイトでは特に、

- 大きなタイポグラフィー
- HeroのSystem Architecture表現
- Scroll-linked Animation
- Typography Motion
- Career Timeline
- 大判のWorks画像
- 必要に応じたCanvas / WebGL / 3D

など、通常の静的なポートフォリオより描画負荷が高くなる可能性があります。

そのため、デザインを単純化して性能を確保するのではなく、

「必要な表現は残しながら、実装方法を最適化する」

ことを基本方針とします。

SEOのMetadata、canonical、クロール、構造化データ等については、

`.github/instructions/seo.instructions.md`

を参照してください。

AI検索向け情報設計については、

`.github/instructions/aio.instructions.md`

を参照してください。

デザイン・アニメーションの意図については、

`.github/instructions/frontend.instructions.md`

および

`.github/agents/web-designer.agent.md`

を参照してください。

この文書では主に、

- Core Web Vitals
- JavaScript量
- hydration
- 画像
- フォント
- animation cost
- rendering
- Canvas / WebGL
- network
- caching
- runtime performance

を扱います。

---

## 2. 最適化の基本原則

パフォーマンス最適化は、実際の利用者への影響と計測結果を基準に行ってください。

単に、

- Lighthouseのスコアを上げる
- JavaScript量を最小化する
- アニメーションを削除する

こと自体を目的にしないでください。

このポートフォリオではデザインとインタラクション自体が価値の一部です。

そのため、

```text
Visual Quality
Interaction
Performance
Accessibility
```

のバランスを取ってください。

性能改善のために、

- 重要なコンテンツを削除する
- デザイン意図を壊す
- アクセシビリティを低下させる
- 必要なモーションをすべて無効化する

といった対応は行わないでください。

まず実装方法の改善を検討してください。

---

## 3. Core Web Vitalsの目標

実ユーザーデータが利用できる場合は、モバイルを含む75パーセンタイルで以下を「良好」の目標とします。

| 指標 | 目標 | このサイトで特に注意する点 |
| --- | ---: | --- |
| LCP | 2.5秒以内 | Hero typography / Profile image / Hero Visual |
| INP | 200ms未満 | Scroll interaction / Navigation / Works / Contact |
| CLS | 0.1未満 | Font / Images / System Architecture / Animation |

実ユーザーデータとラボデータは区別してください。

Lighthouseの単一結果だけを根拠に、

「高速」

「遅い」

と判断しないでください。

計測時は可能な範囲で以下を揃えてください。

- ページ
- viewport
- device condition
- CPU throttling
- network throttling
- cache condition
- production / development

特にNext.jsのdevelopment環境はproduction buildと挙動が異なるため、本番性能の判断材料として扱いすぎないでください。

---

# 4. Heroの性能を最優先する

Heroはファーストビューであり、このサイトの最も重要な表現領域です。

同時に、最も性能問題を起こしやすい領域でもあります。

Heroには、

```text
THINK.
DESIGN.
BUILD.
```

という主要コピーとSystem Architecture Visualが存在します。

最優先する表示順は原則として、

```text
1. Main typography
2. Name / occupation / primary text
3. Layout
4. System Architecture visual
5. Interactive enhancement
```

とします。

System Architectureや3Dの読み込みを待たないと、

- THINK. DESIGN. BUILD.
- 名前
- 職種
- 基本ナビゲーション

が表示されない構成にしないでください。

Hero VisualはProgressive Enhancementとして扱ってください。

---

# 5. System Architecture Visualの実装優先順位

HeroのSystem Architecture表現は、以下の順番で実装可能性を検討してください。

```text
HTML / CSS
↓
SVG
↓
CSS + SVG interaction
↓
Canvas
↓
WebGL / Three.js
```

高度な技術を使用すること自体を目的にしないでください。

CSS / SVGで同等の視覚効果を実現できる場合は、WebGLを導入しない方を優先します。

WebGLを使用する場合は、

「WebGLでなければ実現できない表現か」

を確認してください。

---

## 5.1 System Architectureの描画要素

以下のような表現を使用できます。

- Node
- Line
- Grid
- Layer
- Cube
- Panel
- Data Flow
- Module
- Connection

ただし、要素数を増やすほど価値が高くなるわけではありません。

数百・数千のノードやラインを常時描画する必要はありません。

少ない要素で、

「システム構造」

が感じられる設計を優先してください。

---

# 6. WebGL / Three.js

WebGLやThree.jsを導入する場合は、初期表示とJavaScript bundleへの影響を特に確認してください。

原則として、WebGL関連コードをメインバンドルへ無条件に含めないでください。

必要に応じて、

- dynamic import
- lazy initialization
- viewport-based initialization
- progressive enhancement

を検討してください。

ただし、ユーザーがHeroを見るまで完全に初期化を遅延させることで、不自然な空白や大きなレイアウト変更を発生させないでください。

表示領域は最初から確保してください。

---

## 6.1 WebGLなしでも成立させる

WebGLの読み込み・初期化に失敗しても、

- Hero typography
- Profile
- Career
- Project Experience
- Works
- Contact

が利用できるようにしてください。

System Architecture Visualがなくてもサイトの意味が成立する構造にしてください。

---

## 6.2 Pixel Ratio

Canvas / WebGLでは、高DPI端末だからという理由だけで無制限にdevicePixelRatioを使用しないでください。

必要に応じてレンダリング解像度へ上限を設けることを検討してください。

特にモバイル端末では、

- GPU負荷
- 発熱
- バッテリー消費
- memory usage

へ影響します。

視覚差がほとんど分からない範囲で、過剰な解像度を避けてください。

---

## 6.3 Animation Loop

WebGLで常時`requestAnimationFrame`を回し続ける必要があるか確認してください。

静止状態が長い表現の場合は、

- interaction時のみ更新
- scroll時のみ更新
- state変更時のみ再描画

などを検討してください。

タブが非表示の場合やコンポーネントがviewport外の場合に、不必要な描画処理を継続しないでください。

---

# 7. JavaScriptとNext.js

Server Componentを基本としてください。

以下の理由だけでClient Component化しないでください。

- hoverがある
- animationがある
- レイアウトが複雑

CSSで実現できる表現はCSSを優先してください。

Client Componentは、

- browser API
- pointer interaction
- scroll-linked logic
- state
- Canvas
- WebGL

などが必要な最小範囲へ限定してください。

---

## 7.1 Client Boundary

例えばHeroで3Dだけがクライアント処理を必要とする場合、

```text
Hero Server Component
├── HeroContent
└── SystemArchitectureClient
```

のような構成を検討してください。

Hero全体へ`"use client"`を付けないでください。

同様にCareerのタイムライン全体ではなく、スクロール検出部分だけをClient Component化できるか検討してください。

---

## 7.2 Hydration

静的な、

- Profile
- Career text
- Project Experience
- Works metadata
- Contact information

を操作しないにもかかわらずhydration対象へ含めないでください。

デザイン上複雑でも、静的HTMLで表現できる部分はServer Componentを維持してください。

---

## 7.3 Effect

以下のためだけに`useEffect`を使用しないでください。

- propsから値をコピーする
- static dataをstateへ移す
- CSSだけで表現できるviewport処理
- 派生値を同期する

必要のないEffectを減らすことで、

- hydration後の追加render
- layout shift
- JavaScript処理

を抑えてください。

---

# 8. Animation performance

このサイトではアニメーションを重要な表現として使用できます。

ただし、すべての要素を常時動かさないでください。

基本的に頻繁な更新には以下を優先してください。

```text
transform
opacity
```

以下を毎フレーム変更するアニメーションは慎重に使用してください。

- width
- height
- top
- left
- margin
- padding
- font-size
- grid dimensions

レイアウト再計算を頻繁に発生させる処理を避けてください。

---

# 9. Typography Motion

このサイトでは巨大なタイポグラフィーをスクロールに合わせて変化させる場合があります。

例:

```text
THINK.
DESIGN.
BUILD.
```

Typography Motionでは、

- transform
- translate
- scale
- opacity
- clip
- mask

を中心に使用してください。

巨大な文字へ常時高コストな、

- filter
- blur
- drop-shadow

を適用しながら動かすことは避けてください。

---

# 10. Scroll-linked Animation

スクロール連動処理は特に性能問題を起こしやすいため、慎重に実装してください。

まず以下で実現できるか確認してください。

- CSS
- IntersectionObserver
- native scroll features

JavaScriptによる細かなスクロール同期が必要な場合のみ、`requestAnimationFrame`などを利用してください。

`scroll`イベントのたびに大量の計算を同期実行しないでください。

---

## 10.1 DOM measurement

毎フレーム大量の、

```text
getBoundingClientRect()
offsetTop
offsetHeight
clientHeight
```

などを取得しないでください。

必要な値は、

- ResizeObserver
- initialization
- resize時
- section change時

などに取得し、再利用できるか検討してください。

DOM readとDOM writeを交互に繰り返してlayout thrashingを起こさないでください。

---

# 11. Career Timeline

Career Timelineのスクロール演出では、

```text
TESTER
DEVELOPER
TEAM LEADER
FREELANCE
```

の表示内容そのものは最初からHTMLに存在させてください。

スクロール処理によって、

- visibility
- emphasis
- line progress
- transform

を変化させる構造を基本とします。

スクロール位置に応じてCareerのDOMを大量に作り直さないでください。

---

# 12. Project Experience

Project Experienceは基本的に静的な情報です。

そのため、原則Server Componentとして実装してください。

Project Experienceのためだけに、

- carousel
- heavy interaction
- animation library

を追加しないでください。

情報量が多い場合も、DOM量が極端に多くない限り、過剰なvirtualizationを導入しないでください。

---

# 13. Works

Worksでは大きな画像を使用する可能性があるため、画像配信を特に注意してください。

Works画像は、

```text
Visual 70%
Information 30%
```

というデザイン方針により表示面積が大きくなります。

大きく表示するからといって、元画像をそのまま最大解像度で配信しないでください。

---

## 13.1 Works画像

ローカル画像は`next/image`を基本とします。

以下を適切に設定してください。

- width / height
- aspect ratio
- sizes
- responsive source
- loading strategy

Works一覧の画面外画像は原則遅延読み込みとしてください。

最初に表示されない2件目、3件目のWorksまで優先読み込みしないでください。

---

## 13.2 Hover effect

Works画像のhoverでは、

```text
scale
translate
opacity
```

など軽量な表現を中心にしてください。

画像全体への巨大なblurやfilterを常時animationさせないでください。

---

# 14. 画像素材

画像素材が提供されていない場合は、

- AI生成
- ランダム画像
- 外部仮URL
- 存在しない画像パス

で代用しないでください。

プレースホルダーを使用してください。

実画像が存在しない状態で`next/image`を無理に配置しないでください。

プレースホルダーにも安定したaspect ratioを持たせ、後から画像が入った際にCLSが発生しない構造にしてください。

---

# 15. Profile image

Profileの人物写真は重要ですが、通常Heroの主要LCP要素ではありません。

Profileがファーストビュー外の場合、優先ロードしないでください。

実際にページ読み込み時にviewport内へ表示されるレイアウトの場合のみ、読み込み優先度を再検討してください。

画像品質を不必要に下げるのではなく、実際の表示寸法に合った配信を優先してください。

---

# 16. 画像形式

画像形式は既存資産、Next.js画像最適化、AWS Amplifyの配信仕様を確認して判断してください。

AVIF、WebPなどを使用する場合も、

「新しい形式だから必ず速い」

とは考えないでください。

以下を確認してください。

- 圧縮後サイズ
- decode cost
- browser support
- quality
- deployment environment

---

# 17. Font Performance

フォントはサイトの主要デザイン要素であるため、見た目と性能の両方を考慮してください。

`next/font/local`を優先します。

必要なフォントウェイトだけを読み込んでください。

例えば使用するウェイトが、

```text
400
500
600
```

だけなら、不必要に100〜900すべてを読み込まないでください。

Variable Fontを使用する場合も、実際のファイルサイズを確認してください。

---

## 17.1 日本語フォント

日本語フォントは大きくなりやすいため、特に注意してください。

以下を確認してください。

- font file size
- subset
- unicode range
- weights
- page usage

日本語本文のためだけに複数種類の大容量フォントを読み込まないでください。

---

## 17.2 Layout Shift

Web Font読み込み前後で、

```text
THINK.
DESIGN.
BUILD.
```

などの巨大文字が大きく移動しないよう注意してください。

fallback fontと実フォントのmetric差を考慮してください。

フォント読み込み完了後に大きなセクション高さ変化が起きないよう確認してください。

---

# 18. CSS

ファーストビューに不要な巨大CSSを追加しないでください。

似たスタイルを複数箇所へ大量に重複させないでください。

グレー、Silver、Typographyなど共通値は既存のdesign tokensを再利用してください。

大量のDOM要素へ、

- backdrop-filter
- blur
- filter
- mix-blend-mode

を一括適用しないでください。

特にSafariやモバイル端末でも確認してください。

---

# 19. Blur / Glass / Filter

このサイトのデザインではGlassmorphismを主軸にしないため、広範囲な`backdrop-filter`は原則不要です。

System Architecture Visualなどで使用する場合も、狭い領域に限定してください。

大型の半透明レイヤーを何枚も重ねないでください。

ぼかしによってSilver感を出すのではなく、

- gradient
- border
- opacity
- light / dark contrast

など軽量な方法も検討してください。

---

# 20. DOM量

このサイトは1ページ構成が中心になるため、各セクションをすべて同一ページに配置します。

ただし通常のポートフォリオ規模であれば、DOM virtualizationは不要です。

一方でSystem Architectureのためだけに、

数百個の`div`や`span`を生成しないでください。

多数の視覚要素が必要なら、

- SVG
- Canvas

の方が適しているか検討してください。

---

# 21. Contact

Contactは基本的に静的な情報として実装してください。

表示対象:

- LINE
- Mail
- GitHub
- Phone note

Contact表示のためだけに外部SDKを読み込まないでください。

例えばLINE導線のためだけに、LINEのJavaScript SDKを読み込む必要がない場合は通常のリンクを使用してください。

GitHubの情報を表示するためだけに、初期表示時にGitHub APIへアクセスしないでください。

---

# 22. Third-party scripts

第三者スクリプトは性能への影響が大きいため、追加前に必要性を確認してください。

例:

- Analytics
- Tag Manager
- Chat widget
- Embedded forms
- Social widgets
- Tracking
- External animation

導入する場合は、

- script size
- execution time
- privacy
- loading strategy
- initial page impact

を確認してください。

サイト表示に必須でない第三者スクリプトをblocking loadしないでください。

---

# 23. GitHubなど外部サービス

GitHubプロフィールやリポジトリ情報を表示する場合、静的リンクで目的を満たせるならAPI取得を追加しないでください。

「GitHubを見られる」

という要件と、

「GitHubデータをリアルタイム表示する」

という要件を混同しないでください。

後者が明示的に求められた場合のみAPI取得を検討してください。

---

# 24. Network

初期表示では必要なリソースだけを取得してください。

不要な、

- preload
- preconnect
- prefetch
- high priority

を追加しないでください。

「速くなるかもしれない」という理由だけで全リソースをpreloadしないでください。

preloadは、本当にcritical pathに存在するリソースへ限定してください。

---

# 25. Prefetch

Next.jsのリンクprefetchについては、ページ数と遷移先の重さを確認してください。

Works詳細ページが多数存在する場合、画面内のすべてのCase Studyへ不要な先読みが発生していないか確認してください。

実際のネットワーク挙動を見て判断してください。

---

# 26. Caching

Profile、Career、Project Experience、Worksなど更新頻度の低い情報は、可能な範囲で静的に生成してください。

更新頻度が低い情報に毎回サーバー処理やAPI取得を発生させないでください。

ただし、キャッシュのために古い情報を永続的に表示しないよう、

- data source
- deployment flow
- revalidation requirement

を明確にしてください。

---

# 27. AWS Amplify Hosting

AWS Amplify Hosting上で、

- caching
- compression
- Next.js image optimization
- static assets
- routing
- server rendering

がどのように動作するかを実環境で確認してください。

ローカル環境で動いた最適化が、Amplify上でも同様に有効とは限りません。

Amplify固有の最適化を行う場合も、表示コンポーネントへ直接AWS固有処理を書かないでください。

---

# 28. Static Assets

以下の静的ファイルには適切なキャッシュが利用できる構成を維持してください。

- images
- fonts
- JavaScript chunks
- CSS
- SVG

ハッシュ付きビルドアセットに対して独自の短いキャッシュ設定を追加するなど、Next.js標準挙動を不用意に壊さないでください。

---

# 29. CLS対策

以下には読み込み前から領域を確保してください。

- Profile image
- Works images
- System Architecture visual
- Canvas
- WebGL canvas
- embeds

Canvas / WebGL初期化後に高さが突然決まる構成にしないでください。

最初からCSSで、

```text
aspect-ratio
height
min-height
```

などを確保してください。

---

# 30. INP対策

特に以下の操作を確認してください。

- Header navigation
- Anchor navigation
- Works hover / tap
- Case Study links
- Contact links
- mobile navigation

pointermoveやmousemoveで大量のstate更新を発生させないでください。

カーソル追従表現を使用する場合も、React stateを毎フレーム更新する設計は避けてください。

DOM style、CSS variables、requestAnimationFrameなど、より適切な方法を検討してください。

---

# 31. Scroll処理とReact State

スクロール位置そのものをReact stateへ毎フレーム保存しないでください。

例えば、

```text
scrollY = 1023
scrollY = 1024
scrollY = 1025
```

のたびにReact treeを再renderする構造は避けてください。

React renderが必要な状態変更と、視覚的な連続値を分離してください。

---

# 32. Reduced Motion

`prefers-reduced-motion`ではアニメーションを軽減してください。

Reduced Motion利用者に対しては、

- parallax
- 3D rotation
- continuous motion
- large translation
- scroll-linked movement

を無効または大幅に簡略化してください。

これはアクセシビリティだけでなく、描画負荷を減らすフォールバックとしても機能します。

ただしReduced Motion時にも、すべてのコンテンツが表示されることを必須とします。

---

# 33. Mobile Performance

モバイル性能をDesktop性能の縮小版として考えないでください。

特に以下はモバイルで負荷を下げることを検討してください。

- WebGL rendering resolution
- number of architecture nodes
- parallax strength
- animation distance
- simultaneous effects
- image resolution

Desktopでは成立する表現でも、モバイルでは簡略版を使用して構いません。

デザインコンセプトを維持しながら、端末性能に適した実装にしてください。

---

# 34. 非表示要素

CSSで非表示にしたDesktop用・Mobile用コンポーネントを両方大量にrenderしないでください。

単純なレイアウト差であればCSSによるレスポンシブを優先します。

コンテンツ量や処理量が大きく異なる場合は、重複renderによるコストを確認してください。

---

# 35. 動画

現時点では動画は主要要件ではありません。

デザイン目的だけで背景動画を追加しないでください。

将来動画を追加する場合は、

- file size
- autoplay
- muted
- poster
- mobile network
- Reduced Motion

を確認してください。

自動再生動画が必要な場合も、サイト利用の前提にしないでください。

---

# 36. Performance Budget

固定の数値Budgetを根拠なく設定しないでください。

ただし、新しいライブラリや3D機能追加時には最低限、

- JavaScript bundle増加
- network request増加
- CPU cost
- rendering cost

を確認してください。

「ライブラリ追加によるメリット」と「性能コスト」が釣り合っているか判断してください。

---

# 37. 依存パッケージ

アニメーション、3D、utilityライブラリを追加する前に、以下を確認してください。

1. 標準Web APIで実現できないか
2. CSSで実現できないか
3. 既存依存関係に同様の機能がないか
4. Tree Shakingできるか
5. Client Bundleへどの程度影響するか
6. 対象機能以外へ影響しないか

同じ目的のライブラリを複数導入しないでください。

---

# 38. 計測

変更内容に応じて、以下から必要なものを選択してください。

## Network

確認対象:

- request count
- transfer size
- JavaScript
- images
- fonts
- third-party resources

## Performance

確認対象:

- long task
- scripting
- rendering
- layout
- paint
- animation frame

## Lighthouse

確認対象:

- LCP
- CLS
- performance regression
- major accessibility regression

LighthouseのPerformance Scoreだけを評価軸にしないでください。

---

# 39. 重点的に計測する変更

以下を変更した場合は、通常のCSS調整より性能への影響を強く確認してください。

- Hero
- System Architecture
- Canvas
- WebGL
- Three.js
- Scroll-linked Animation
- Typography Motion
- Career Timeline animation
- large image
- local font
- animation library
- third-party script

---

# 40. モバイル相当条件

可能な場合は、

- narrow viewport
- CPU throttling
- slower network
- cold cache

でも確認してください。

高性能PC・高速回線だけで問題がないことを完了条件にしないでください。

---

# 41. 計測前後の比較

性能改善を目的とする変更では、可能な限り同じ条件でBefore / Afterを比較してください。

記録する内容例:

```text
Page:
Viewport:
Network:
CPU:
Cache:
Change:
Before:
After:
```

小さな変更へ過剰な計測作業を課す必要はありません。

変更規模に応じて判断してください。

---

# 42. パフォーマンス問題の修正優先順位

問題を発見した場合は原則として、

```text
1. 不要な処理を削除
2. Client Component範囲を縮小
3. 読み込みタイミングを調整
4. 描画方法を改善
5. リソースを最適化
6. 表現を簡略化
```

の順で検討してください。

最初からデザインや機能そのものを削除しないでください。

---

# 43. 過剰最適化を避ける

以下のような最適化は、実際の問題がない限り導入しないでください。

- 小規模配列のmemo化
- すべてのコンポーネントへのmemo
- 不要なuseMemo
- 不要なuseCallback
- 小規模リストのvirtualization
- 複雑なcustom caching
- 独自のresource loader

最適化自体がコード複雑性を増加させる場合があります。

計測上の問題がある箇所へ限定してください。

---

# 44. Performanceとアクセシビリティ

性能改善のために、

- focus state
- accessible labels
- semantic HTML
- alt text
- Reduced Motion

を削除しないでください。

また、スクリーンリーダー向けの重要情報をClient-side loadへ移動して初期HTMLから削除しないでください。

---

# 45. 実装完了前の確認

性能へ影響する変更では、必要に応じて以下を確認してください。

- Hero textがすぐ表示される
- System Architectureの読み込みがHeroをblockしていない
- WebGLなしでもページが成立する
- Canvas領域でCLSが発生しない
- Scroll時に目立ったカクつきがない
- pointer interactionでReactの過剰renderが発生していない
- Career animationがスクロールを妨げない
- Project Experienceが不要なClient Componentになっていない
- Works画像が適切なサイズで配信されている
- Profile画像を不要にpriority loadしていない
- 不要な第三者scriptがない
- Font読み込みで大きなlayout shiftがない
- Reduced Motionでも利用できる
- MobileでSystem Architectureが過剰に重くない
- Consoleにperformance関連の重大な警告がない

変更規模に応じた、

- lint
- type check
- production build

については`.github/copilot-instructions.md`の検証基準に従ってください。

---

# 46. 完了報告

性能改善または性能に影響する変更を行った場合、必要に応じて以下を完了報告へ含めてください。

- 変更した性能上のポイント
- Client / Server境界への影響
- JavaScript依存関係への影響
- 画像・フォントへの影響
- Animation / WebGLへの影響
- 実施した計測
- 計測条件
- 確認できなかった項目

計測していない値を推測して、

「LCPが改善した」

「60fpsになった」

などと断定しないでください。

---

# 47. 参考資料

実装時は必要に応じて各技術の最新公式ドキュメントを確認してください。

- Web Vitals
- Largest Contentful Paint
- Interaction to Next Paint
- Cumulative Layout Shift
- Next.js Image
- Next.js Font
- Next.js App Router
- Web Performance APIs
- prefers-reduced-motion
- Canvas API
- WebGL
- Three.js（使用する場合）

外部仕様やNext.jsの推奨APIは変更される可能性があるため、このファイルの古い具体例より、利用中バージョンの公式ドキュメントを優先してください。
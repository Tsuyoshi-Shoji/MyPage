# 1. プロジェクト概要

このリポジトリは、フリーランスソフトウェアエンジニア「庄司剛 / Tsuyoshi Shoji」のポートフォリオサイトです。

サイトの主な目的は次のとおりです。

- フリーランスソフトウェアエンジニアとしての人物像、経験、技術、考え方を伝える
- Web制作・Web開発を検討している顧客に、企画・設計から実装まで一貫して対応できることを伝える
- Android、iOS、.NET、Azureなどの実務経験を信頼性の根拠として提示する
- 自身が制作したWebサイト・Webアプリケーション等をWorksとして紹介する
- 実務プロジェクトへの参画経験と、自身の制作実績を明確に分けて伝える
- LINE、メール等から仕事相談・見積もり・問い合わせにつなげる
- 検索エンジン、AI検索、ユーザーの双方に理解しやすい情報を提供する

このサイトでは「安価」を直接的な訴求軸にはしません。

実務経験、設計力、実装力、AIを含む現代的な開発手法によって、

「必要なものを、必要な規模で、高品質に実現できる」

ことを価値として伝えてください。

サイトの中心的なメッセージは次のとおりです。

```text
THINK.
DESIGN.
BUILD.
```

単なる「コードを書くエンジニア」ではなく、

- ビジネスを理解する
- 考える
- 設計する
- 実装する

まで一貫して担当できる人物として表現します。

現在は日本語を主要言語とします。

デザイン上、英語の見出しやラベルは積極的に使用できますが、重要なサービス内容や事実情報を英語表現だけに依存させないでください。

明示的な要求がない限り、多言語ルーティングやi18n基盤を独断で追加しないでください。

---

# 2. 技術構成

基本技術構成は次のとおりです。

- Next.js
- App Router
- React
- TypeScript
- Tailwind CSS
- npm
- AWS Amplify Hosting

既存の技術構成を優先し、明確な必要性がないライブラリやフレームワークを追加しないでください。

アニメーションやHeroのSystem Architecture表現についても、CSS、React、ブラウザ標準APIなどで十分に実装できる場合は追加ライブラリを導入しないでください。

Three.js、React Three Fiber、GSAP、Framer Motionなどを導入する場合は、その表現に明確な必要性があることを確認してください。

---

# 3. 基本原則

- モバイルファーストで実装する
- Server Componentを基本とする
- 状態、イベント、ブラウザAPI、Canvas、WebGL、スクロール連動処理などが必要な場合のみClient Componentを使用する
- Client Componentの範囲を必要以上に広げない
- 型安全性を維持し、`any`は原則使用しない
- セマンティックHTMLを使用する
- UIライブラリは原則導入せず、Tailwind CSSで独自実装する
- 同じ情報やUIを複数箇所へ重複して定義しない
- 小規模サイトに対して過剰な抽象化や複雑な状態管理を導入しない
- 要求されていない機能やページを独断で追加しない
- 実在しない経歴、実績、顧客、成果、数値を生成しない
- 守秘義務に関わる情報を推測して補完しない
- 視覚表現のために情報の意味やアクセシビリティを犠牲にしない

---

# 4. デザイン方針

サイト全体のデザインコンセプトは、

```text
Ultra Minimal
×
Digital Product Designer
×
System Engineering
```

です。

目指す印象は次のとおりです。

- センスが良い
- 無機質
- プロフェッショナル
- 精密
- ミニマル
- 静か
- 現代的
- 技術力が感じられる
- 技術を誇示しすぎない

エンジニア感は5段階中2程度を基準とします。

コード、ターミナル、GitHub風UI、ネオンカラーなどのステレオタイプな「エンジニアらしさ」を主役にしないでください。

技術力は、

- 情報設計
- グリッド
- タイポグラフィー
- System Architecture表現
- Career
- Project Experience
- Works

などから自然に感じられるようにしてください。

このサイトは「エンジニアの履歴書」ではなく、

「設計から実装まで行う個人のデジタルプロダクトスタジオ」

のような印象を目指します。

---

## カラーパレット

メインカラーはグレーです。

黒を主体としたダークテーマではなく、ライトグレー〜ミディアムグレーを中心としたモノクローム構成を使用します。

目安として次の役割を持たせます。

| 用途 | 方針 |
|---|---|
| ページ背景 | Light Gray / Cool Gray |
| セクション背景 | Base Grayまたは微差のあるGray |
| 見出し・主要テキスト | Charcoal |
| 本文 | Dark Gray |
| 補足情報 | Medium Gray |
| 区切り線・罫線 | Silver Gray |
| Hover | CharcoalまたはSilver系の濃淡 |
| アクセント | Silver |

具体的なカラーコードは、実装時にサイト全体の視認性とデザインを確認したうえで定義してください。

色はTailwindのテーマまたはグローバルCSSのCSS変数として一元管理し、コンポーネント内で同じカラーコードを繰り返し直接指定しないでください。

原色、ネオンカラー、多色グラデーションは原則使用しません。

---

## タイポグラフィー

タイポグラフィーはサイトの主要な視覚要素です。

Heroでは、

```text
THINK.
DESIGN.
BUILD.
```

を主要表現として使用します。

巨大な見出しと、

```text
01 / 06
PROJECT / 001
SAPPORO, JP
ROLE
TECHNOLOGY
YEAR
```

などの小さなメタ情報を組み合わせ、大きなサイズ差で情報階層を作ります。

フォントはモダンなSans Serifを中心とし、未来的すぎるTechフォントや装飾性の高い書体は避けてください。

フォントファミリーやウェイトを増やしすぎず、

- font-size
- font-weight
- line-height
- letter-spacing
- whitespace
- placement

によって階層を作ります。

---

## レイアウト

以下を重視してください。

- 大きな余白
- 明確なグリッド
- 非対称構成
- 細い区切り線
- 巨大なタイポグラフィー
- 小さなメタ情報
- 情報密度の強弱
- セクションごとの明確な役割

一般的なSaaSサイトのようなカードの大量配置は避けてください。

以下を過度に使用しないでください。

- border-radius
- box-shadow
- gradient
- floating cards
- glassmorphism

余白、文字、線、画像、構造によってデザインしてください。

---

# 5. トップページ構成

トップページは原則として次の構成とします。

```text
Header
Hero
Profile
Career
Project Experience
Works
Contact
Footer
```

各セクションを単純に縦へ並べるだけではなく、タイポグラフィーやスクロール演出によって一つの作品としてつながる構成を目指してください。

ただし、動きのためにHTML構造やアクセシビリティを複雑化しすぎないでください。

---

# 6. Header

Headerは極めてシンプルにします。

基本構成:

```text
TSUYOSHI SHOJI.

PROFILE
CAREER
EXPERIENCE
WORKS
CONTACT
```

画像ロゴは原則使用せず、

```text
TSUYOSHI SHOJI.
```

という名前そのものをブランドとして扱います。

ナビゲーションはトップページ内の各セクションへのアンカーリンクを基本とします。

不要なハンバーガーUIや複雑なナビゲーションを追加しないでください。

モバイルでは画面幅に応じて適切に再設計してください。

---

# 7. Hero

Heroの主要メッセージは次のとおりです。

```text
THINK.
DESIGN.
BUILD.
```

補助情報として次の内容を表示できます。

```text
TSUYOSHI SHOJI
Freelance Software Engineer
Sapporo, Japan
```

Heroでは、

「ビジネスを理解し、設計から実装まで行う」

という人物像を短いコピーで補足してください。

抽象的なコピーだけでサービス内容を説明したことにはしないでください。

---

## Hero Visual

HeroにはSystem Architectureをモチーフとしたビジュアルを使用します。

単純な抽象3Dオブジェクトではなく、

- User
- Frontend
- API
- Application
- Database
- Infrastructure
- Network
- Module
- Node
- Data Flow

などを抽象化したシステム構造を表現してください。

視覚要素の例:

- 立方体
- レイヤー
- 半透明パネル
- ノード
- 接続線
- グリッド
- モジュール
- データフロー
- 奥行きのある構造

完全なシステム構成図にする必要はありません。

システムアーキテクチャをデザイン表現へ抽象化したものとしてください。

グレーとシルバーを中心にし、Heroのタイポグラフィーより主張させないでください。

3D・Canvas・WebGLを使用する場合も、実装コストとパフォーマンスを考慮してください。

---

# 8. Profile

Profileでは次の情報を扱います。

```text
庄司剛
Tsuyoshi Shoji
Freelance Software Engineer
Sapporo, Japan
```

人物写真は本人から提供された画像を使用します。

提供されていない本人写真を生成・仮設定しないでください。

画像がまだない場合は、レイアウト確認用のシンプルなプレースホルダーを使用してください。

プロフィール文章では、

- ビジネス目的を理解する
- 設計から実装まで一貫して担当できる
- 必要なものを必要な規模で作る
- 実務経験をWeb制作に活かす
- AIなど新しい技術を活用する

という考え方を伝えます。

単なる経歴紹介ではなく、

「どのように仕事をする人物なのか」

が伝わる構成を優先してください。

---

# 9. Experience / Technology

技術スタックは、ロゴアイコンを並べるだけの表示やスキルゲージではなく、スペックシートのような情報設計を使用してください。

現在の公開対象となる技術情報は次のとおりです。

## 実務経験

```text
Android / Java
iOS / Objective-C
.NET / C#
Azure
```

## Web・個人開発

```text
TypeScript
React
Next.js
Android
iOS
```

## AI / Development Tools

```text
ChatGPT
GitHub Copilot
```

実務経験、個人開発、ツール利用を混同しないでください。

以下のような表現は禁止します。

```text
Java 90%
React 85%
```

能力をパーセンテージやゲージで表現しないでください。

---

# 10. Career

Careerでは役割の変化をタイムラインとして表示します。

基本的な流れは次のとおりです。

```text
TESTER
↓
DEVELOPER
↓
TEAM LEADER
↓
FREELANCE
```

Careerは職務上の成長や役割の変化を表すセクションです。

個別プロジェクトの詳細をCareerへ混在させないでください。

スクロールに応じて、

- ラインが伸びる
- 項目がRevealされる
- タイポグラフィーが切り替わる
- 現在地点が強調される

などの演出を使用できます。

ただし情報そのものはJavaScriptが無効でも理解できるHTMLとして保持してください。

---

# 11. Project Experience

Project Experienceでは、実際の業務プロジェクトへの参画経験を表示します。

Careerとは別の役割を持ちます。

Career:

```text
どのような役割を経験してきたか
```

Project Experience:

```text
どのような現場・技術・担当範囲で実務に参画したか
```

Project Experienceでは原則として次の情報を扱います。

```text
PROJECT
ROLE
DOMAIN
RESPONSIBILITY
TECH
```

表示イメージ:

```text
大手企業向けモバイルアプリ開発

ROLE
Android Engineer

DOMAIN
Mobile Application

RESPONSIBILITY
設計 / 実装 / テスト

TECH
Java / Android
```

その他、公開可能な範囲で以下の経験を扱えます。

```text
iOS Application Development
Objective-C / iOS

Web Business System
C# / .NET

Cloud / Infrastructure
Azure
```

実際の業務内容が未確認の場合、担当工程や使用技術を推測して補完しないでください。

顧客名、サービス名、プロジェクト固有名詞など守秘義務に関わる情報を独断で掲載しないでください。

PCでは表・技術資料のような構成を推奨します。

モバイルでは無理に表を縮小せず、行単位またはカードに近い縦積み構成へ変更して構いません。

---

# 12. Works

Worksは、自身が制作・設計した公開可能な成果物を紹介するセクションです。

Project Experienceとは混同しないでください。

基本的な情報比率は、

```text
Visual 70%
Information 30%
```

を目安とします。

各Worksでは必要に応じて以下を表示してください。

```text
PROJECT / 001

PROJECT NAME

TYPE
Website / Web Application / Mobile App

ROLE
Design / Development

TECHNOLOGY
Next.js / TypeScript / AWS

YEAR

VIEW CASE →
```

作品画像やUIを主役にしてください。

技術情報は補助的なメタ情報として扱います。

作品画像が提供されていない場合、AI生成した架空の完成画面を実績として表示しないでください。

必要であればシンプルなプレースホルダーを使用してください。

---

## Works詳細ページ

Works詳細ページを作成する場合は、Case Study形式を基本とします。

例:

```text
OVERVIEW
OBJECTIVE
PROBLEM
DESIGN
DEVELOPMENT
TECHNOLOGY
RESULT
```

単なるスクリーンショット集ではなく、

「なぜそう設計したのか」

まで伝えられる構成を優先してください。

結果や成果について、確認できない数字を作らないでください。

---

# 13. Contact

Contactでは風景画像や装飾画像を使用しません。

タイポグラフィーと問い合わせ情報だけで構成します。

主要コピー:

```text
LET'S BUILD SOMETHING.
```

問い合わせ方法は次のとおりです。

- LINE
- Mail
- GitHub
- Phone

主要な仕事相談導線はMailまたはLINEとします。

GitHubは主に、

- 開発履歴
- 公開リポジトリ
- 公開プロジェクト

を見るための補助導線として扱います。

---

## Phone

電話番号はWebサイトへ直接掲載しません。

以下の趣旨の注記を表示してください。

```text
電話番号はメールでお問い合わせいただいた方へ、
返信時にご案内します。
```

電話番号が存在していても、この要件が変更されない限り`tel:`リンクを追加しないでください。

---

# 14. モーション・インタラクション

ページ全体を一つの作品として感じられるモーションを使用できます。

特にタイポグラフィーを主要なモーション要素として扱います。

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

使用可能な表現:

- Scroll-linked animation
- Typography animation
- Reveal
- Fade
- Mask
- Clip
- Parallax
- Subtle 3D
- Mouse interaction

モーションのためだけに不要な要素を追加しないでください。

アニメーションは、

- 情報の理解
- セクション間の連続性
- ブランド表現

を高める目的で使用してください。

`prefers-reduced-motion`に対応してください。

Reduced Motionの場合でも、情報や操作が欠落しないようにしてください。

---

# 15. レスポンシブ

モバイルではデスクトップデザインを単純に縮小しないでください。

特に以下はモバイル用に再設計してください。

- Hero Typography
- System Architecture Visual
- Career Timeline
- Project Experience
- Works
- Contact

PCの複数列レイアウトをそのまま小さく押し込まないでください。

モバイルでも、

- タイポグラフィーの階層
- 余白
- 情報の順序
- 世界観

を維持してください。

---

# 16. ディレクトリと責務

実際の構成が異なる場合は既存構成を優先してください。

App Routerのルートは`app`配下に置き、`app/pages`のような独自のページ格納階層は作らないでください。

基本構成の例:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── works/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Profile.tsx
│   │   ├── Career.tsx
│   │   ├── ProjectExperience.tsx
│   │   ├── Works.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│
├── data/
│   ├── profile.ts
│   ├── career.ts
│   ├── projectExperience.ts
│   ├── works.ts
│   └── contact.ts
│
├── lib/
│
└── styles/
```

これは責務の目安です。

実装前にすべてのディレクトリ・ファイルを作成しないでください。

必要になったものから追加してください。

小さな要素まで過剰にコンポーネント分割しないでください。

共有型だけを格納する`types/`なども、複数箇所で必要になるまでは作成しないでください。

---

# 17. ポートフォリオデータ管理

以下のような静的情報は、必要に応じて`src/data`配下の型付きデータへ集約してください。

- Profile
- Career
- Project Experience
- Works
- Navigation
- Contact
- GitHub URL
- LINE URL
- Mail address

同じ情報を複数コンポーネントに重複して定義しないでください。

特に、

```text
Career
Project Experience
Works
```

は意味の異なるデータとして管理してください。

同一配列へ混在させないでください。

変更頻度が低い静的情報に、不要なCMSやデータベースを導入しないでください。

---

# 18. 画像・アセット管理

画像は`public/images`配下で用途ごとに整理してください。

例:

```text
public/
└── images/
    ├── profile/
    ├── works/
    └── system/
```

本人写真、Works画像など提供されたアセットを優先してください。

提供されていない本人写真や実績画像を独断で生成しないでください。

HeroのSystem Architectureについては、デザイン上必要であれば、

- SVG
- CSS
- Canvas
- WebGL

などによる抽象表現を実装して構いません。

System Architectureは実在するシステム構成を意味するものではなく、ブランド表現として扱ってください。

---

# 19. 外部リンクと問い合わせ導線

実際に提供されているものだけを掲載してください。

メールは`mailto:`を使用します。

LINE、GitHubなど外部URLは実際のURLが提供されてから設定してください。

新しいタブで外部ページを開く場合は、

```html
rel="noopener noreferrer"
```

を設定してください。

外部URLや連絡先を複数箇所で利用する場合は`src/data`等へ集約してください。

Phoneについては番号を直接掲載しないため、`tel:`を使用しません。

---

# 20. SEOとAIO

SEOについては、

```text
.github/instructions/seo.instructions.md
```

を優先してください。

AI検索・生成検索・AIクローラー・回答エンジン向けの情報設計については、

```text
.github/instructions/aio.instructions.md
```

を参照してください。

App RouterのMetadata APIを使用し、ページ内容に即した`title`と`description`を設定してください。

本番ドメインを基準とした、

- metadataBase
- canonical
- OGP

を適切に設定してください。

ドメインなど環境によって異なる値は設定または環境変数で管理し、未設定時に誤った本番URLへフォールバックさせないでください。

`robots.ts`と`sitemap.ts`は公開対象ページを反映してください。

構造化データを追加する場合は、実態に合うschema.orgの型だけを使用してください。

ページ上に存在しない経歴・スキル・サービス・実績を構造化データだけへ追加しないでください。

重要な情報を、

- Canvas
- WebGL
- SVG内テキスト
- 画像
- Client-side JavaScript

だけに依存させないでください。

HTML本文としても取得できる状態を維持してください。

---

# 21. セマンティックHTMLとアクセシビリティ

適切なHTML要素を使用してください。

例:

```text
header
nav
main
section
article
footer
h1-h6
time
address
```

見た目の都合だけで見出しレベルを飛ばさないでください。

インタラクティブ要素には、

- keyboard operation
- focus state
- accessible name

を確保してください。

DecorativeなSystem Architecture表現は、スクリーンリーダーへ不要な情報を大量に読み上げさせないよう適切に処理してください。

十分なコントラストを確保してください。

---

# 22. パフォーマンス

ポートフォリオとしてデザイン性を重視しますが、表示速度を大きく犠牲にしないでください。

特にHeroの3D表現やスクロールアニメーションでは、

- JavaScript bundle size
- hydration
- main-thread blocking
- CLS
- LCP
- GPU負荷
- モバイル性能

を考慮してください。

初期表示に不要な重い処理はLazy Loadしてください。

CSSで十分な表現にWebGLを使用しないでください。

---

# 23. AWS Amplify

AWS Amplify Hostingでのビルドとデプロイを前提とします。

- AWS固有の設定や処理を表示コンポーネントへ直接書かない
- 本番URLなど環境ごとに異なる値は設定または環境変数で管理する
- 秘密情報に`NEXT_PUBLIC_`を付けない
- `NEXT_PUBLIC_`はブラウザへ公開してよい値に限定する
- 環境変数が未設定の場合に誤った本番値へフォールバックさせない

---

# 24. 依存関係

パッケージ管理はnpmに統一します。

- `package-lock.json`を維持する
- `yarn.lock`を追加しない
- `pnpm-lock.yaml`を追加しない
- パッケージ追加前に標準機能または既存依存関係で実現できないか確認する
- 同じ目的のライブラリを重複して導入しない
- runtime dependencyとdev dependencyを適切に分ける

アニメーションライブラリや3Dライブラリについても、表現上の必要性が明確な場合だけ追加してください。

---

# 25. 実装時の禁止事項

以下を独断で追加しないでください。

- 実在しない実績
- 架空の顧客
- 架空のレビュー
- 架空の成果数値
- スキルパーセンテージ
- スキルゲージ
- ネオンカラー
- Terminal UI
- コード雨のような背景
- GitHub UIの模倣
- 不要なグラスモーフィズム
- 大量の角丸カード
- 不要な装飾3D
- Contactの風景画像
- 公開されていない電話番号
- 要求されていないSNS
- 不要なページ
- 不要なCMS
- 不要な状態管理ライブラリ

---

# 26. 検証と完了条件

変更内容と影響範囲に応じて、必要な検証のみ実行してください。

変更行数ではなく、機能への影響と壊れやすさを基準に判断してください。

## 軽微な変更

次のような変更では、原則としてプロジェクト全体のlint、型チェック、ビルドは実行不要です。

- 文言などの静的データ変更
- Project ExperienceやCareerの公開済み情報の修正
- 画像やfaviconなどの静的アセット変更
- 局所的なTailwind CSSクラスの調整
- レイアウトや見た目だけの小規模な変更
- Metadataの文言やURLなどの単純な変更
- コメントやドキュメントのみの変更

変更したファイルのエラー診断を行い、UI変更では必要に応じてPCとモバイルの表示を確認してください。

---

## 中規模な変更

次のような変更では原則として以下を実行してください。

- コンポーネントのロジック変更
- Propsの変更
- 型定義の変更
- データ構造の変更
- 条件分岐の変更
- イベント処理の変更
- 状態管理の変更
- Scroll Animationの変更
- 複数ファイルにまたがる機能変更

```bash
npm run lint
npx tsc --noEmit
```

---

## 大規模または基盤に関わる変更

次のいずれかに該当する場合は以下をすべて実行してください。

- 新規ページ追加
- Works詳細ページ基盤追加
- 主要機能追加
- 共通コンポーネントの大幅変更
- 共通データ構造の大幅変更
- ルーティング変更
- Root Layout変更
- Server ComponentとClient Componentの境界変更
- Three.js等の3D基盤導入
- 大規模なScroll Animation基盤導入
- `next.config.ts`変更
- `tsconfig.json`変更
- ESLint設定変更
- `package.json`変更
- 依存関係追加・削除
- 環境変数変更
- AWS Amplify設定変更
- SEO基盤変更
- AIOに関係するサイト全体の情報構造変更
- 構造化データ変更
- 広範囲なリファクタリング
- 本番ビルドでのみ確認できる挙動変更

```bash
npm run lint
npx tsc --noEmit
npm run build
```

判断が難しい場合は、一段階上の検証を選択してください。

---

# 27. エラーへの対応

検証でエラーが発生した場合は、変更内容に関係するエラーか確認してください。

エラーを隠すためにESLintルールを無効化しないでください。

型エラー回避のために以下を使用しないでください。

```text
any
@ts-ignore
不要な型アサーション
```

既存コード由来で今回の変更と無関係なエラーがある場合は、勝手に広範囲を修正せず、その旨を完了報告へ記載してください。

---

# 28. 完了報告

作業完了時は、簡潔に次を報告してください。

- 変更した内容
- 変更した主要ファイル
- UIへの影響
- PC / モバイルの確認状況
- 実行した検証
- 実行しなかった検証
- 残っている問題がある場合はその内容

UI変更では、可能な範囲で対象となる画面サイズも記載してください。

要求されていない変更を「改善」として追加しないでください。
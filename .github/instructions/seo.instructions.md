---
name: SEO Guidelines
description: "Use when planning or implementing search engine optimization, page content, metadata, canonical URLs, structured data, robots, sitemaps, image indexing, internal links, or Search Console for Tsuyoshi Shoji's freelance software engineer portfolio."
---

# SEO・検索品質ガイドライン

## 1. 目的と適用範囲

この指示は、フリーランスソフトウェアエンジニア「庄司剛 / Tsuyoshi Shoji」のポートフォリオサイトにおける、通常の検索エンジン向けSEOを扱います。

AI検索・生成AI・回答エンジンへの情報設計については、

`.github/instructions/aio.instructions.md`

を参照してください。

SEOは検索順位を操作するためではなく、

- Web制作を依頼したい人
- Web開発を相談したい人
- エンジニアの実務経験を確認したい人
- 制作実績を確認したい人
- 庄司剛 / Tsuyoshi Shojiについて調べている人

へ、正確で役立つ情報を届けるために行います。

クロール、インデックス、順位、検索結果の表示、リッチリザルトは保証されません。

このサイトでは特に、

```text
Person
↓
Experience
↓
Project Experience
↓
Works
↓
Contact
```

という情報構造を検索エンジンにも理解しやすくすることを重視します。

---

## 2. サイトの主要Entity

このサイトの中心となるEntityは、

```text
庄司剛 / Tsuyoshi Shoji
```

です。

主要な属性として、公開可能な範囲で以下を一貫して扱います。

```text
Name
Tsuyoshi Shoji / 庄司剛

Occupation
Freelance Software Engineer

Location
Sapporo, Hokkaido, Japan

Services
Web Development
Website Development
Software Development
Digital Product Development
```

ページごとに、

- 名前
- 職種
- 所在地
- 提供内容

の表記が矛盾しないようにしてください。

「Web Designer」「Software Engineer」「Web Developer」など複数の表現を使用する場合も、別人物・別事業として認識されないよう文脈を明確にしてください。

---

## 3. SEO上の主要な検索意図

このサイトでは、主に以下の検索意図を想定します。

### Person

例:

```text
庄司剛
Tsuyoshi Shoji
庄司剛 エンジニア
Tsuyoshi Shoji engineer
```

対応情報:

- Profile
- Career
- Project Experience

---

### Web制作・開発相談

例:

```text
札幌 Web制作 フリーランス
札幌 Webエンジニア
Webサイト制作 エンジニア
Web開発 フリーランス
Next.js Web制作
```

これらは検索キーワードとして本文へ機械的に挿入するものではありません。

実際の提供内容として自然に説明できる場合のみ使用してください。

対応情報:

- Profile
- Works
- Project Experience
- Contact

---

### 技術・経験確認

例:

```text
Android Java エンジニア
Objective-C エンジニア
C# .NET エンジニア
Next.js フリーランス
React Web制作
Azure エンジニア
```

対応情報:

- Experience
- Project Experience
- Works

---

### 信頼性確認

例:

```text
実務経験
開発経験
制作実績
プロジェクト参画実績
```

対応情報:

- Career
- Project Experience
- Works

検索キーワードありきでページを作るのではなく、利用者が判断するために必要な情報を提供した結果として検索意図へ対応する構成を優先してください。

---

## 4. コンテンツの基本原則

ページ・セクションごとに、

「誰に、何を伝えるのか」

を明確にしてください。

本人の、

- 経験
- 担当業務
- 技術
- 制作物
- 設計思想
- 提供サービス

などの一次情報を優先します。

固定の最低文字数を設定しないでください。

文章量を増やすこと自体をSEO対策にしないでください。

以下を避けてください。

- 検索キーワードの不自然な反復
- 同じ意味の文章の量産
- 地域名だけ変更したページ
- 実体のないサービスページ
- 内容の薄い技術ページ
- AI生成しただけの一般論コンテンツ
- 実績の水増し

---

# 5. Profile

Profileでは検索エンジンと利用者の双方が、

```text
誰なのか
何をしているのか
どこを拠点としているのか
何を依頼できるのか
```

を理解できる状態にしてください。

例えば、

```text
庄司剛は札幌を拠点に活動するフリーランスソフトウェアエンジニアです。
```

のような具体的な説明を本文中に自然に含めることができます。

ただし、

```text
札幌 Web制作 フリーランス Next.js エンジニア
```

のような検索語列挙は行わないでください。

---

# 6. Career / Project Experience / Works

SEO上でもこの3種類を混同しないでください。

## Career

Careerは、

```text
Tester
Developer
Team Leader
Freelance
```

など、職務上の役割・経験の変化を示します。

Careerを作品一覧として扱わないでください。

---

## Project Experience

Project Experienceは、実務プロジェクトへの参画経験です。

公開可能な範囲で、

```text
Project Type
Role
Domain
Responsibility
Technology
```

を記載してください。

検索エンジン向けに顧客名やプロジェクト名を推測して追加しないでください。

NDA・守秘義務に関わる情報は公開しません。

例えば、

```text
大手企業向けAndroidアプリ開発
Android Engineer
Java / Android
```

程度の粒度で公開する場合も、本人が公開可能と確認した情報だけを使用してください。

---

## Works

Worksは、自身が公開可能な制作・設計成果物です。

以下を可能な範囲で説明します。

```text
Project Name
Type
Objective
Role
Technology
Design
Development
Year
Result
```

Project ExperienceとWorksを同一実績として検索エンジンへ伝えないでください。

---

# 7. Works詳細ページ

公開可能なWorksについては、必要に応じて個別詳細ページを作成できます。

URL例:

```text
/works/water-seven
/works/project-name
```

slugは、

- 英小文字
- 数字
- ハイフン

を基本とし、公開後に理由なく変更しないでください。

Works詳細では、単なる画像一覧ではなく、可能な範囲で以下を説明してください。

```text
Overview
Objective
Problem
Design
Development
Technology
Result
```

検索エンジン向けに文章を増やすのではなく、利用者が制作内容を理解するために必要な情報を提供してください。

---

# 8. 実績と成果の記述

実績、経歴、担当範囲、成果、数字は確認可能なものだけを掲載してください。

例えば、

```text
CVRが30%改善
アクセス数が2倍
売上が向上
```

などの成果を、確認できない場合は記載しないでください。

「高品質」「高速」「SEOに強い」などの評価的表現を使用する場合も、根拠なく断定しないでください。

設計思想や本人の方針として書くことと、測定済みの成果を区別してください。

---

# 9. ページ構造

App Routerの各ページは意味のあるHTMLで構成してください。

トップページでは、

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

という視覚構造とHTML構造を可能な範囲で一致させてください。

適切に、

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

などを使用します。

---

# 10. 見出し

ページの主見出しは原則1つの`h1`とします。

トップページでは、

```text
THINK.
DESIGN.
BUILD.
```

を視覚的なメインコピーとして使用する場合でも、HTML上の主題が利用者と検索エンジンに理解できる構造にしてください。

巨大な文字だからという理由だけで`h1`を使用しないでください。

見出しは、

```text
h1
↓
h2
↓
h3
```

の意味階層で使用してください。

文字サイズ調整のために見出しレベルを変更しないでください。

---

# 11. HeroコピーとSEO

Heroではデザイン上、

```text
THINK.
DESIGN.
BUILD.
```

という抽象コピーを使用します。

このコピーだけでは、

```text
誰なのか
何を提供するのか
```

が十分伝わらないため、HTML本文または近接するコンテンツに、

```text
Tsuyoshi Shoji
Freelance Software Engineer
Web Development
Sapporo, Japan
```

などの具体的情報を含めてください。

検索キーワードのためにHeroデザインを崩さないでください。

Profileなど別セクションで具体的に説明しても構いません。

---

# 12. 内部リンク

主要なコンテンツは通常のリンクで到達可能にしてください。

Next.jsではページ遷移に`Link`を使用してください。

クリックイベントだけでページ遷移を実装しないでください。

例えば、

```text
VIEW CASE →
```

はWorks詳細ページへの通常リンクとしてください。

リンク文言は可能な範囲で遷移先を理解できるものにしてください。

「こちら」のような文言だけを大量に使用しないでください。

---

# 13. 1ページ構成とアンカーリンク

トップページ内の、

```text
Profile
Career
Project Experience
Works
Contact
```

はアンカーリンクで移動できます。

例:

```text
#profile
#career
#experience
#works
#contact
```

JavaScriptだけに依存したスクロール処理にせず、通常のアンカーリンクとしても機能する構造を維持してください。

アニメーションを追加する場合も、URL fragmentと基本ナビゲーションを壊さないでください。

---

# 14. Metadata

Next.js App RouterのMetadata APIを使用してください。

公開ページごとに固有で、内容に即した、

```text
title
description
```

を設定してください。

例えばトップページでは、

```text
庄司剛 | Freelance Software Engineer
```

のような人物名と役割を中心にできます。

ただし、実際のサイトコンテンツとタイトルを一致させてください。

タイトルへ検索語を不自然に詰め込まないでください。

悪い例:

```text
札幌 Web制作 格安 React Next.js フリーランス エンジニア 庄司剛
```

---

# 15. Title

各ページのtitleは、

- 固有
- 簡潔
- 内容を正確に表現
- 他ページと識別可能

であることを優先してください。

Works詳細では、

```text
Project Name | Tsuyoshi Shoji
```

などの形式を使用できます。

全ページで完全に同じtitleを使用しないでください。

---

# 16. Description

`description`にはページ内容を自然な文章で説明してください。

検索順位を上げる目的でキーワードを羅列しないでください。

本文と異なるサービス内容をdescriptionへ追加しないでください。

descriptionが検索結果へ必ずそのまま表示されるとは扱わないでください。

---

# 17. metadataBaseと本番URL

`metadataBase`、canonical、OGP URLでは正規の本番ドメインを使用してください。

本番ドメインをソースコード内の複数箇所へ直接記述しないでください。

環境ごとに異なる値は設定または環境変数から取得してください。

環境変数が未設定の場合に、無関係な本番URLへ自動的にフォールバックさせないでください。

---

# 18. Canonical

各インデックス対象ページには、原則として自己参照canonicalを設定してください。

例えば、

```text
/
/works/water-seven
```

それぞれが正規ページなら、それぞれ自身をcanonicalとします。

異なる内容のページをSEO目的で1つのcanonicalへ集約しないでください。

---

# 19. URL方針

以下についてサイト全体で統一してください。

- HTTPS
- www有無
- trailing slash
- lowercase
- slug

内部リンク、canonical、sitemap、OGPで異なる形式を混在させないでください。

---

# 20. 多言語対応

現在、日本語を主要言語とします。

実際に英語・中国語などの翻訳ページを公開するまでは、

- `[locale]`
- `hreflang`
- 翻訳ページ
- 言語切り替え

をSEO目的だけで追加しないでください。

将来、多言語対応する場合は、

- 各言語の本文
- Metadata
- Navigation
- Works説明
- Contact情報

を確認済みの翻訳として用意してください。

未翻訳または実質同一内容のページを機械的に大量公開しないでください。

言語別URLを採用する場合は、実在する対応ページ間だけ`hreflang`を設定してください。

---

# 21. Robots

必要に応じて、

```text
src/app/robots.ts
```

を使用してください。

公開ページや重要なCSS / JavaScript / 画像を誤ってブロックしないでください。

robots.txtでクロール拒否したことを、インデックス削除の保証として扱わないでください。

検索結果へ表示させたくない公開URLについては、適切な`noindex`を検討してください。

---

# 22. Sitemap

必要に応じて、

```text
src/app/sitemap.ts
```

を使用してください。

sitemapには原則として、

- 正規URL
- インデックス対象ページ
- 公開中ページ

だけを含めてください。

404、redirect、noindexページを含めないでください。

`lastModified`は実質的なコンテンツ変更があった場合に更新してください。

ビルド日時を全ページの更新日時として機械的に設定しないでください。

---

# 23. 404とリダイレクト

削除・移動したWorks詳細ページなどについて、必要に応じて適切なredirectを設定してください。

存在しないURLをすべてトップページへredirectしないでください。

本当に存在しないページは適切な404として扱ってください。

slugを変更する場合は、既に公開・インデックスされている可能性を確認してください。

---

# 24. 画像SEO

画像は主に、

- Profile
- Works
- UI screenshot

で使用します。

ローカル画像は`next/image`を基本としてください。

`alt`には画像の内容・意味を自然に記載してください。

例えばWorks画像では、

```text
WATER SEVENのトップページデザイン
```

など、実際に画像が示している内容を説明できます。

以下は避けてください。

```text
札幌 Web制作 Next.js React SEO 格安 制作会社
```

のようなキーワード詰め込み。

装飾画像は空の`alt`を使用してください。

---

# 25. System Architecture Visual

HeroのSystem Architecture表現が装飾目的の場合、SEO用テキストとして扱わないでください。

画像・Canvas・SVG内へ、

```text
Frontend
API
Database
Infrastructure
```

などが存在していても、それだけで本人のスキル情報を説明したことにはしません。

重要な技術・サービス情報はHTML本文として別途記載してください。

System Architectureの内部テキストを検索エンジン対策目的で大量に追加しないでください。

---

# 26. JavaScript依存

重要な本文とリンクをクライアント側JavaScriptでしか生成しない構成を避けてください。

以下は可能な限り初期HTMLへ含めてください。

- 名前
- 職種
- Profile
- Career
- Project Experience
- Works metadata
- Contact

Server Componentを基本としてください。

スクロールアニメーションが有効になるまで本文がDOM上に存在しない実装は避けてください。

---

# 27. 構造化データ

JSON-LDは、ページ上に表示される確認可能な情報を機械可読にする必要がある場合のみ追加してください。

構造化データ自体をランキング施策として扱わないでください。

ページ本文と一致する情報のみ使用します。

---

# 28. Person構造化データ

トップページまたはProfile情報に対して`Person`を使用する場合は、確認済みの情報だけを含めてください。

例として扱える情報:

```text
name
alternateName
url
jobTitle
address / location
sameAs
```

ただし、実際に公開していない情報をJSON-LDだけへ追加しないでください。

`sameAs`には本人が管理する公式プロフィールだけを使用してください。

---

# 29. WebSite / WebPage

必要に応じて、

```text
WebSite
WebPage
```

を使用できます。

ただし、schema.orgの型を大量に追加すること自体を目的にしないでください。

検索エンジンが理解するために明確な価値がある場合だけ使用します。

---

# 30. Worksの構造化データ

Worksについて、内容に応じて`CreativeWork`などを検討できます。

ただし、

「Web制作物だから必ずCreativeWorkを付ける」

という運用にはしないでください。

利用する型が実態に合っているか確認してください。

実際には存在しない、

- rating
- review
- award
- client
- aggregateRating

などを追加しないでください。

---

# 31. Service情報

提供サービスについて構造化データを追加する場合も、サイト上で実際に説明しているサービスだけを使用してください。

例えば、

```text
Web Development
Website Development
Software Development
```

など。

実際には提供していない、

- SEO consulting
- Marketing
- Photography
- EC management

などを検索対象を広げる目的で追加しないでください。

---

# 32. Local SEO

札幌を拠点としていることは、利用者に有益な範囲で自然に明記できます。

ただし、

```text
札幌
北海道
中央区
すすきの
小樽
旭川
函館
```

など地域名を検索流入目的で羅列しないでください。

全国・リモート対応が可能であれば、その実態を自然な文章で説明してください。

「札幌のWeb制作」専用ページを作る場合も、単に地域名を含めただけの薄いページは作成しないでください。

---

# 33. LocalBusiness等の使用

フリーランス個人サイトだからという理由だけで、`LocalBusiness`や特定の店舗型schemaを自動的に使用しないでください。

公開している事業形態、所在地、サービス実態とschema.orgの定義を確認して選択してください。

所在地の詳細を公開していない場合、検索エンジン向けに住所を推測して追加しないでください。

---

# 34. Contact

Contactでは、

- LINE
- Mail
- GitHub
- Phoneに関する案内

を表示します。

主要な仕事相談導線はMailまたはLINEです。

電話番号はWeb上へ直接掲載しません。

そのため、検索エンジン向けMetadataや構造化データにも、非公開電話番号を追加しないでください。

以下の趣旨だけを公開します。

```text
電話番号はメールでお問い合わせいただいた方へ、
返信時にご案内します。
```

---

# 35. GitHub

GitHubプロフィールへのリンクは、

- 開発履歴
- 公開リポジトリ
- 技術活動

を確認する補助情報として扱います。

GitHub上のすべてのリポジトリがこのサイトのWorksであるとは扱わないでください。

GitHub情報を自動取得して検索向け本文を生成する必要はありません。

---

# 36. OGP

公開ページには必要に応じて、

```text
og:title
og:description
og:url
og:image
```

を設定してください。

OGPの内容と実際のページ内容を一致させてください。

存在しないOG画像パスを設定しないでください。

OG画像が用意されていない場合に、架空の画像URLを生成しないでください。

---

# 37. Social Metadata

X / Twitter等の専用Metadataを追加する場合、実際に必要か確認してください。

存在しないSNSアカウントをMetadataへ追加しないでください。

SNSアカウントがないことをSEO上の欠点として扱わないでください。

---

# 38. Core Web Vitals

Core Web Vitalsについては、

`.github/instructions/performance.instructions.md`

を詳細な実装基準としてください。

SEO上も、実ユーザーデータの75パーセンタイルで以下を目標とします。

| 指標 | 目標 |
|---|---:|
| LCP | 2.5秒以内 |
| INP | 200ms未満 |
| CLS | 0.1未満 |

ただし、この数値だけで検索順位が決まるとは扱わないでください。

---

# 39. モバイル

モバイル版でも、

- 本文
- Navigation
- Career
- Project Experience
- Works
- Contact

が利用できることを確認してください。

Desktopでは存在する重要情報を、モバイルではSEOの都合なく完全に削除しないでください。

表示方法を変えることは問題ありません。

---

# 40. アクセシビリティとSEO

セマンティックHTML、リンク、見出し、画像altなど、アクセシビリティ上良い実装はSEO上の理解にも有効です。

ただし、SEOのためにARIA属性を追加しないでください。

ARIAはアクセシビリティ上必要な場合だけ使用してください。

---

# 41. AIOとの責務分離

AI検索対策として、

- Q&A大量生成
- AI向けキーワード
- 非表示テキスト

などをSEO実装へ追加しないでください。

AI検索・回答エンジン向けの詳細方針は、

`.github/instructions/aio.instructions.md`

を参照してください。

通常SEOとAIOの双方で、

```text
正確な一次情報
明確なページ構造
意味のあるHTML
検証可能な実績
```

を共通基盤とします。

---

# 42. 重複コンテンツ

ほぼ同じ内容のページを複数作成しないでください。

例えば、

```text
札幌 Web制作
北海道 Web制作
札幌 Next.js制作
札幌 React制作
```

というページを、本文の一部だけ変えて量産しないでください。

検索意図・サービス内容・ユーザー価値が明確に異なる場合のみ別ページ化を検討してください。

---

# 43. 技術記事・Blog

現在、Blogや技術記事は必須要件ではありません。

SEO目的だけでBlog機能を追加しないでください。

将来、

- 本人の実務知見
- 技術検証
- 制作ノウハウ
- 設計判断

など継続的に発信する目的が生まれた場合は検討できます。

一般的なAI生成記事を検索流入目的で量産しないでください。

---

# 44. Keywords Meta Tag

`meta keywords`は使用しないでください。

検索キーワード一覧をHTMLへ非表示で埋め込まないでください。

---

# 45. hidden text

SEO目的で以下を行わないでください。

- `display:none`でキーワードを隠す
- viewport外へ大量のSEO文章を配置する
- 透明文字を配置する
- AI / 検索エンジン専用文章をユーザーから隠す

ユーザーが確認できないSEO情報を作らないでください。

---

# 46. Search Console

公開後はGoogle Search Consoleを使用して、必要に応じて以下を確認します。

- Indexing
- Search queries
- Impressions
- Clicks
- CTR
- Average position
- Core Web Vitals
- Sitemap
- 404
- Crawl issues

単一の検索クエリや短期間の順位変動だけを見て、大規模なページ変更を行わないでください。

---

# 47. アクセス解析との併用

Search Consoleのクリックだけではなく、可能な場合はアクセス解析と合わせて、

```text
検索流入
↓
Works閲覧
↓
Contact
↓
問い合わせ
```

などの利用行動を確認してください。

SEOの目的を単なるアクセス数増加にしないでください。

このサイトにおける最終的な価値は、

「適切なユーザーが内容を理解し、仕事相談につながること」

です。

---

# 48. 公開前チェック

公開前に最低限以下を確認してください。

### Content

- 名前が正しい
- 職種が正しい
- 所在地が正しい
- Careerが正しい
- Project Experienceが正しい
- Works情報が正しい
- 公開許可のない情報がない
- Contact情報が正しい

### HTML

- h1が適切
- h2 / h3の階層が正しい
- 内部リンクが通常リンクとして機能する
- JavaScriptなしでも重要情報がHTMLに存在する

### Metadata

- title
- description
- canonical
- OGP
- metadataBase

### Indexing

- robots
- sitemap
- noindex
- redirects
- 404

### Images

- alt
- aspect ratio
- 実在する画像パス
- OGP image

### Structured Data

- 本文と一致している
- 架空の情報がない
- syntax errorがない

---

# 49. 公開後チェック

公開後は、

- Google Search Console
- 実際のGoogle検索結果
- 本番canonical
- sitemap
- robots.txt
- OGP
- Indexing
- Core Web Vitals

を必要に応じて確認してください。

構造化データを使用している場合は、Googleまたはschema.org等の適切な検証手段を使用してください。

---

# 50. SEO変更の記録

SEOへ影響する大きな変更では、可能な範囲で以下を記録してください。

```text
Date:
Page:
Change:
Reason:
Expected impact:
```

例えば、

- title変更
- URL変更
- redirect追加
- Works詳細追加
- structured data変更
- canonical変更
- robots変更

など。

順位変化と施策を後から混同しないようにします。

---

# 51. 実装時の禁止事項

以下をSEO目的で実施しないでください。

- キーワード詰め込み
- 架空の顧客実績
- 架空のレビュー
- 架空の受賞歴
- 架空の対応地域
- 架空の技術経験
- 非表示SEOテキスト
- 地域ページ大量生成
- 内容の薄いWorksページ
- 内容の薄い技術ページ
- AI生成記事の大量公開
- meta keywords
- 無意味なschema.org大量追加
- 非公開電話番号の構造化データ追加
- 存在しないSNSプロフィールのsameAs追加

---

# 52. SEO実装時の優先順位

迷った場合は次の順番で判断してください。

```text
1. 正確な情報
2. ユーザーにとっての価値
3. 明確なHTML構造
4. クロール・インデックス可能性
5. Metadata
6. Internal Link
7. Structured Data
8. 個別最適化
```

Structured Dataや細かなMetadata調整より先に、本文そのものが明確か確認してください。

---

# 53. 参考資料

実装時は必要に応じて最新の公式ドキュメントを確認してください。

- Google Search Essentials
- Google SEO Starter Guide
- Creating helpful, reliable, people-first content
- Core Web Vitals
- Title links
- Snippets / meta descriptions
- Canonical URLs
- Robots.txt
- Sitemaps
- JavaScript SEO
- Image SEO
- Structured Data
- Google Search Console
- Schema.org Person
- Schema.org WebSite
- Schema.org WebPage
- Schema.org CreativeWork
- Schema.org Service

GoogleやNext.jsの仕様は変更される可能性があるため、このファイルにある過去の具体的な実装方法より、実装時点の公式仕様を優先してください。
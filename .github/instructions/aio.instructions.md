---
name: AIO Guidelines
description: "Use when addressing AI search, generative search, answer engines, AI crawler access, source attribution, or how Tsuyoshi Shoji's freelance software engineer portfolio may be understood and represented in AI-generated answers."
---

# AIO・AI検索向けガイドライン

## 1. 目的と境界

AIO（AI Optimization）は、AI検索・生成検索・回答サービスが、このサイトと「庄司剛 / Tsuyoshi Shoji」に関する情報を正確に理解し、必要に応じて参照・引用できる可能性を高めるための情報設計として扱います。

AI検索への掲載、引用、推薦、順位上昇を保証する手法として扱ってはいけません。

このサイトでは特に、AIが以下を誤解なく理解できる状態を目指します。

- 誰が運営しているサイトなのか
- 何を提供している人物なのか
- どのような実務経験・技術経験があるのか
- どのようなWeb制作・開発を依頼できるのか
- どのような考え方で設計・開発しているのか
- 実務経験と個人制作実績の違い
- どのように問い合わせできるのか

通常の検索エンジン向けSEOの実装規則（Metadata、canonical、sitemap、robots、Core Web Vitals、構造化データ等）は `.github/instructions/seo.instructions.md` を参照してください。

このファイルでは主に、AI回答・AI検索・AIクローラーに対して情報を正確に伝えるための設計を扱います。

---

## 2. 基本Entity

サイト全体で中心となるEntityは以下です。

### Person

庄司剛 / Tsuyoshi Shoji

属性として、公開可能な範囲で以下を一貫して表現します。

- Name: Tsuyoshi Shoji
- Japanese Name: 庄司剛
- Occupation: Freelance Software Engineer
- Location: Sapporo, Japan
- Service: Web Development / Software Development / Digital Product Development

ページによって名前、職種、所在地、サービス内容の表現が矛盾しないようにしてください。

例えば、

- Software Engineer
- Freelance Software Engineer
- Web Developer
- Web Designer

など複数の表現を使用する場合でも、別人物・別事業のように認識されないよう文脈を明確にします。

---

## 3. サイトで伝える中心的なFacts

AIが推測する必要がないよう、重要な情報は本文として明示します。

### 提供価値

以下の内容を中心に表現します。

- ビジネス上の目的を理解したうえで設計・開発する
- 設計から実装まで一貫して対応できる
- 必要な機能を必要な規模で実現する
- 実務開発経験をWeb制作にも活かしている
- AIや新しい開発技術を活用して開発効率を高める
- 過剰な体制や機能を避け、ミニマムな構成で品質を確保する

「安い」「格安」などを中心的な価値として表現しないでください。

価格競争ではなく、

「経験・技術・AI活用によって無駄を減らし、必要なものを効率よく実現できる」

という因果関係が伝わる文章にします。

---

## 4. 経験・技術情報

技術情報は、実務経験と個人開発・現在利用している技術を混同しないでください。

### 実務経験

公開可能な範囲で以下を扱います。

- Android / Java
- iOS / Objective-C
- .NET / C#
- Azure

### Web・個人開発

- TypeScript
- React
- Next.js
- Android
- iOS

### AI / Development Tools

- ChatGPT
- GitHub Copilot

AIが「すべての技術について同等の実務経験がある」と誤認しないよう、

- 実務経験
- 個人開発経験
- 利用ツール

を情報設計上も区別してください。

技術名をSEO・AIO目的で大量に列挙しないでください。

---

## 5. Career / Project Experience / Worksを区別する

このサイトでは以下の3種類の情報を明確に区別します。

### Career

本人がどのような役割を経験してきたかを示します。

例:

Tester  
→ Developer  
→ Team Leader  
→ Freelance

Careerは「職務上の成長・役割の変化」を示す情報です。

### Project Experience

実際の業務プロジェクトへの参画経験を示します。

公開可能な範囲で以下を明示します。

- Project Type
- Domain
- Role
- Responsibility
- Technology

例:

PROJECT  
大手企業向けモバイルアプリ開発

ROLE  
Android Engineer

RESPONSIBILITY  
設計 / 実装 / テスト

TECH  
Java / Android

顧客名、サービス名、機密情報など、公開許可のない情報は記載しません。

### Works

本人が公開可能な制作物・個人制作・Web制作実績などを示します。

Worksでは以下のような情報を可能な範囲で明示します。

- Project Name
- Type
- Objective
- Role
- Design
- Development
- Technology
- Year
- Result

AIがProject ExperienceとWorksを同一の実績として誤認しないようにしてください。

---

## 6. Intentを意識した情報設計

AI検索では単純なキーワードだけではなく、ユーザーが何を知りたいかというIntentに対応できる情報構造を意識します。

このサイトで想定する主要Intentは以下です。

### Person Intent

例:

- 庄司剛とは誰？
- Tsuyoshi Shojiは何をしている人？
- 札幌のエンジニア？
- どんな経歴がある？

対応するEvidence:

- Profile
- Career
- Project Experience

### Service Intent

例:

- Webサイト制作を依頼できる？
- Web開発を相談できる？
- 設計から実装まで対応できる？
- 小規模なWebサービスを作れる？
- モバイル開発経験のあるWebエンジニア？

対応するEvidence:

- Profile
- Service説明
- Project Experience
- Works
- Contact

### Technology Intent

例:

- Next.jsで制作できる？
- Reactを扱える？
- Android開発経験はある？
- iOS開発経験はある？
- .NETの経験はある？
- Azureを扱った経験はある？
- AIを開発に利用している？

対応するEvidence:

- Experience / Selected Tools
- Project Experience
- Works

### Trust Intent

例:

- 実務経験はある？
- どんなプロジェクトに参加した？
- エンジニアとしてどのくらい経験がある？
- Web制作だけの経験なのか？

対応するEvidence:

- Career
- Project Experience
- Profile

### Contact Intent

例:

- 制作を依頼したい
- 見積もりを相談したい
- 連絡方法を知りたい
- LINEで問い合わせできる？
- メールで相談できる？
- 電話で相談できる？

対応するEvidence:

- Contact

---

## 7. AI回答につながる問い合わせ情報

Contact情報は、AIが問い合わせ方法を回答できる程度に明確に記載します。

現在想定する問い合わせ手段は以下です。

- LINE
- Mail
- GitHub
- Phone

ただし電話番号はサイト上に直接掲載しません。

以下の趣旨を明示します。

「電話番号はメールでお問い合わせいただいた方へ、返信時にご案内します。」

AIが電話番号を推測・生成できるような曖昧な記述をしないでください。

GitHubは原則として問い合わせの主要導線ではなく、

- 開発履歴
- 公開プロジェクト
- 技術的な活動

を確認するための補助的な情報源として扱います。

主要な問い合わせ導線はMailまたはLINEとします。

---

## 8. Evidenceを必ず持たせる

重要な主張には、その内容を確認できるEvidenceをサイト内に用意します。

例えば、

「Android開発の実務経験がある」

と記載する場合、

Project ExperienceまたはCareerにも、それを裏付ける情報が存在する状態を推奨します。

同様に、

「設計から実装まで対応できる」

という主張に対しては、

- Project Experience
- Works
- Case Study

などから担当範囲を確認できるようにします。

基本構造は以下として考えます。

Entity  
↓  
Facts  
↓  
Evidence

AI向けだけにEvidenceのない主張を追加してはいけません。

---

## 9. ページ本文の書き方

- ページ冒頭で、そのページが何についてのページなのか理解できる文章を置く
- 見出しと本文の意味を一致させる
- 意味のあるHTML構造を使用する
- 重要情報を画像内の文字だけで提供しない
- デザイン上英語見出しを使用しても、必要に応じて本文で意味を補足する
- 抽象的なコピーだけで重要なFactsを伝えようとしない
- 段落、見出し、リスト、表を情報の意味に合わせて使用する
- AIに引用させるためだけの不自然な文章やQ&Aを大量生成しない
- 同じ意味のキーワードを不自然に繰り返さない

例えばHeroで、

THINK.  
DESIGN.  
BUILD.

という抽象的コピーを使用しても、それだけでサービス内容を説明したことにはしません。

Profileや本文で、

「ビジネス上の目的を整理し、設計から実装まで一貫してWebサイト・Webサービスを制作する」

など、具体的な説明を別途提供してください。

---

## 10. Works / Case Study

Worksではスクリーンショットだけを掲載せず、その制作物についてAIが理解できるテキスト情報を提供します。

可能な場合は以下を含めます。

- 何を制作したのか
- 何のために制作したのか
- どの範囲を担当したのか
- どの技術を利用したのか
- どのような設計判断をしたのか
- どのような結果・改善につながったのか

Case Studyページでは、

Problem  
→ Objective  
→ Design  
→ Development  
→ Technology  
→ Result

のように、制作物が生まれた背景まで理解できる構成を推奨します。

結果を記載する場合、確認できない数値や成果を作らないでください。

---

## 11. AIに理解させるためだけの非表示情報を作らない

AI向け情報とユーザー向け情報を分離しすぎないでください。

以下は禁止します。

- ユーザーには表示しない大量のAIOキーワード
- CSS等で非表示にした説明文
- AIクローラー向けだけの実績情報
- ページ本文と異なるJSON-LD
- 実態のないFAQ
- 存在しないサービス・対応地域・技術経験
- 実態より広い対応範囲の記載

AIが理解してほしい内容は、原則としてユーザーにも確認できる形で掲載します。

---

## 12. 情報源と信頼性

- 実績、経歴、担当範囲、利用技術は本人が確認してから公開する
- 顧客名・プロジェクト名・サービス名は公開許可がある場合のみ使用する
- NDAや守秘義務に関わる情報は掲載しない
- 実務経験と個人開発を明確に区別する
- 実在しない顧客、制作実績、レビュー、推薦コメントを作らない
- 第三者による評価を本人の主張として書き換えない
- 外部サイトの紹介やレビューを作為的に増やさない
- 生成AIによる文章は事実関係を本人が確認してから公開する

サイト内情報と、本人が管理するGitHubやその他公式プロフィールの内容は、可能な範囲で整合させてください。

---

## 13. 構造化データとの整合性

JSON-LDなどの構造化データはSEO instructionsに従います。

AIOのためだけに、ページに存在しない情報を構造化データへ追加しないでください。

特に以下を一致させます。

- Name
- Occupation
- Location
- URL
- SameAs
- Service
- Works
- Contact information

Person、WebSite、WebPage、CreativeWork等を利用する場合も、実際のページ内容と対応させてください。

---

## 14. AIクローラーと権利への配慮

- AIクローラーを許可するかは各事業者の最新仕様・利用条件を確認して判断する
- Web検索用クローラー、AI検索用クローラー、学習用クローラーを同一視しない
- robots.txtだけでアクセスや学習利用を完全に制御できると説明しない
- robots.txtやその他の制御を変更する場合は、利用するサービスの公式ドキュメントを確認する
- NDA対象情報、個人情報、認証情報、非公開リポジトリ情報などを公開しない

---

## 15. AIOのためにUXを犠牲にしない

AIOを理由にデザイン品質やユーザー体験を低下させてはいけません。

このサイトではタイポグラフィー、アニメーション、System Architecture表現などを重要なデザイン要素として使用します。

ただし重要なFactsは、

- Canvas
- WebGL
- 画像
- アニメーション
- SVG内部の文字

だけに依存させないでください。

人間が閲覧でき、HTML上でも意味を取得できるテキストとして提供します。

デザイン上のコピーと、機械が理解しやすい具体的説明を両立してください。

---

## 16. 効果の確認

- AI回答への掲載・引用・順位を完了条件にしない
- AI検索からのアクセスや問い合わせは、解析で確認できる範囲だけ評価する
- AIサービス上で回答を確認する場合は、サービス名、確認日、質問内容、言語、地域などの条件を記録する
- 1回の回答結果からAIサービス全体の評価を判断しない
- AI回答に誤った情報が表示された場合、まず自サイトの一次情報が十分明確か確認する
- サイト内の矛盾・古い情報・曖昧な表現を優先して修正する
- 外部AIサービスの回答内容を完全に制御できるとは考えない

---

## 17. 実装時の基本確認

新規ページやコンテンツを追加する場合、以下を確認してください。

1. このページのEntityは何か
2. ユーザーが知りたいFactsは何か
3. そのFactsを裏付けるEvidenceはあるか
4. どのIntentに回答するページなのか
5. 実務経験・個人制作・推測を混同していないか
6. 人間が読んでも自然な文章になっているか
7. 重要情報が画像・アニメーションだけに閉じ込められていないか
8. Contactなど次のActionにつながる情報が明確か
9. SEO構造化データと本文が矛盾していないか
10. 公開できない情報を含んでいないか

AIOのための独立した文章を大量に追加するのではなく、既存コンテンツそのものを明確・具体的・検証可能にすることを優先してください。

## 18. 参考資料

実装・クローラー制御を変更する際は、各サービスの最新公式ドキュメントを確認してください。

- Google Search documentation for AI features
- OpenAI crawler documentation
- Schema.org Person
- Schema.org WebSite
- Schema.org CreativeWork

外部仕様は変更される可能性があるため、このファイルに記載された過去の仕様より公式ドキュメントを優先してください。
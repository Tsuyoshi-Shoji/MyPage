import { useState, useEffect } from "react"
import styles from "@/styles/profile_body.module.css"

const HISTORY_PARAGRAPHS = [
  "1996年2月26日、東京生まれ。\n1歳半頃に札幌へ移り住み、東京での記憶はほとんどなく、札幌で育つ。",
  "2008年3月に札幌市立澄川南小学校を卒業。\n札幌市立澄川中学校、私立北海高校を経て、\n2018年3月に北海学園大学経営学部経営学科を卒業。",
  "新卒では建築営業として社会人生活をスタートするも、約8ヶ月で退職。\n自分のキャリアを見つめ直し、2019年6月に独立系SIerへ転職。\n以降、約7年間にわたりシステム開発業務に携わる。",
  "そして2026年4月、個人事業主として独立。エンジニアとして、新たな挑戦をスタート。",
  "札幌を拠点に活動中。"
]

export default function HistoryContents() {
  const [displayedText, setDisplayedText] = useState(
    HISTORY_PARAGRAPHS.map(() => "")
  )
  const [currentParagraph, setCurrentParagraph] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentParagraph >= HISTORY_PARAGRAPHS.length) {
      return // すべての段落の表示が完了
    }

    const currentText = HISTORY_PARAGRAPHS[currentParagraph]

    if (currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev]
          newText[currentParagraph] = currentText.substring(0, currentIndex + 1)
          return newText
        })
        setCurrentIndex(currentIndex + 1)
      }, 50) // タイピング速度を50msに設定

      return () => clearTimeout(timer)
    } else {
      // 現在の段落が完了したら次の段落へ
      if (currentParagraph < HISTORY_PARAGRAPHS.length - 1) {
        const timer = setTimeout(() => {
          setCurrentParagraph(currentParagraph + 1)
          setCurrentIndex(0)
        }, 500) // 次の段落まで500ms待機

        return () => clearTimeout(timer)
      }
    }
  }, [currentParagraph, currentIndex])

  return (
    <div className={styles.history_container}>
      {displayedText.map((text, index) => (
        <p key={index} className={styles.history_text}>
          {text}
          {index === currentParagraph && currentIndex < HISTORY_PARAGRAPHS[index].length && (
            <span className={styles.typing_cursor}>|</span>
          )}
        </p>
      ))}
    </div>
  )
}

import styles from "@/styles/locate_contents.module.css"
import { useState, useEffect, useRef } from "react"

export default function LocateBody() {
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    // Leafletライブラリをスクリプトで読み込む
    if (!window.L) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css'
      document.head.appendChild(link)

      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js'
      script.async = true
      script.onload = () => {
        setMapLoaded(true)
        initializeMap()
      }
      document.head.appendChild(script)
    } else {
      setMapLoaded(true)
      initializeMap()
    }
  }, [])

  const initializeMap = () => {
    if (!mapContainer.current || map.current) return

    //札幌の座標: 北緯43.0642, 東経141.3469
    const sapporoCoords = [43.0642, 141.3469]

    map.current = window.L.map(mapContainer.current).setView(sapporoCoords, 11)

    // OpenStreetMap タイル層を追加
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current)

    // 札幌にマーカーを追加
    window.L.marker(sapporoCoords).addTo(map.current)
      .bindPopup('<div class="' + styles.popup + '"><strong>札幌</strong><br>北海道</div>')
  }

  return (
    <div className={styles.locate_body}>
      <div className={styles.locate_container}>
        <h2 className={styles.locate_title}>拠点：札幌（北海道）</h2>
        <div className={styles.map_wrapper}>
          <div ref={mapContainer} className={styles.map_container} />
        </div>
      </div>
    </div>
  )
}

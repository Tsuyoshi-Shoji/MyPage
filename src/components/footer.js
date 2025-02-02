import styles from "@/styles/footer.module.css"
import Social from "@/components/social"

export default function Footer() {
    return (
        <footer className= {styles.footer}>
            <Social />
            <p>© 2025 Tsuyoshi Shoji</p> 
        </footer>
    )
  }
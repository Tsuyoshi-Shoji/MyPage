import styles from "@/styles/Home.module.css";
import Header from "@/components/header"
import ProfileBody from "@/components/profile_body"
import Footer from "@/components/footer"


export default function Profile() {
  return (
    <div>
      <Header />

      <ProfileBody />

      <Footer />
    </div>
  )
}
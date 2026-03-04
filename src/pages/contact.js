import Head from "next/head"
import Contact_body from "@/components/contact_body"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Tsuyoshi Shoji</title>
        <meta name="description" content="Contact me" />
      </Head>
      <Contact_body />
    </>
  )
}

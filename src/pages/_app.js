import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={router.pathname}
        initial={{ opacity: 0, x: 100}}
        animate={{ opacity: 1, x: 0}}
        exit={{ opacity: 0, x: -100}}
        transition={{ duration: 0.5, ease: "easeInOut"}}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

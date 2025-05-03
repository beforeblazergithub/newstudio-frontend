import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Faq />
      <Footer/>
    </main>
  );
}
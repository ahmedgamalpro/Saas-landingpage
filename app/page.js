import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import First from "./components/first/First";
import Second from "./components/second/Second";
import Footer from "./components/Footer/Footer";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saas Landing</title>
      </Head>
      <Navbar />
      <Hero />
      <First />
      <Second />
      <Footer />
    </>
  )
}

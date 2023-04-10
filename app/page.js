import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Form from "@/components/Form";
import Perks from "@/components/Perks";
import Faq from "@/components/Faq";
import { faq } from "../constant/faq.constant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Perks />
      <Faq data={faq} />
      <Form />
      <Footer />
    </>
  );
}

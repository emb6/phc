import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Form from "@/components/Form";
import Perks from "@/components/Perks";
import Faq from "@/components/Faq";
import Talks from "@/components/Talks";
import Clients from "@/components/Clients";
import { faq, clients } from "@/constant/home.constant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Perks />
      <Talks />
      <Faq data={faq} />
      <Clients data={clients} />
      <Form />
      <Footer />
    </>
  );
}

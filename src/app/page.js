import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Join from "./components/Join";
import Faq from "./components/Faq";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
  <div>
    <NavBar />
    <Hero />
    <Body />
    <Join />
    <Faq />
    <ContactUs />
    <Footer />  
  </div>
  );
}

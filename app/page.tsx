import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SubscriptionForm from "./components/SubscriptionForm";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Main />
      <SubscriptionForm/>
      <Footer />
    </div>
  );
}

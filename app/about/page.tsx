import AboutPage from "../components/AboutPage"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SubscriptionForm from "../components/SubscriptionForm"

const page = () => {
  return (
    <div className="dark:bg-gray-950 overflow-hidden">
    <Navbar />
    <AboutPage />
    <SubscriptionForm />
    <Footer />
    </div>
  )
}

export default page
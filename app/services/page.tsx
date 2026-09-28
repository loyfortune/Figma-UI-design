import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ServicePage from "../components/ServicePage"
import SubscriptionForm from "../components/SubscriptionForm"

const page = () => {
  return (
    <div className="dark:bg-gray-950 overflow-hidden">
    <Navbar />
    <ServicePage />
    <SubscriptionForm />
    <Footer />
    </div>
  )
}

export default page
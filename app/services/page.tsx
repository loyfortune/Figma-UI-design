import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ServicePage from "../components/ServicePage"
import SubscriptionForm from "../components/SubscriptionForm"

const page = () => {
  return (
    <>
    <Navbar />
    <ServicePage />
    <SubscriptionForm />
    <Footer />
    </>
  )
}

export default page
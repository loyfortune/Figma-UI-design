import BlogMain from "../components/BlogMain"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SubscriptionForm from "../components/SubscriptionForm"

const page = () => {
  return (
    <>
    <Navbar />
    <BlogMain />
    <SubscriptionForm />
    <Footer />
    </>
  )
}

export default page
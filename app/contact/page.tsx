import ContactMain from "../components/ContactMain"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const page = () => {
  return (
    <div className="dark:bg-gray-950 overflow-hidden">
    <Navbar />
    <ContactMain />
    <Footer />
    </div>
    
  )
}

export default page
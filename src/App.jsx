import { Outlet } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import Navbar from "global/Navbar";
import Footer from "global/Footer";

function App() {
  return (
    <main className="font-raleway text-blue-primary">
      {/* Navbar */}
      <Navbar />
      {/* Outlet */}
      <ScrollToTop />
      <div className="mt-20">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  )
}

export default App
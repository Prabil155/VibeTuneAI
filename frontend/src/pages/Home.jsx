import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      <Hero />
      <UploadBox />
      <Footer />
    </div>
  );
}

export default Home;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ImageUploader from "../components/ImageUploader";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white">

      <Navbar />

      <Hero />
      

      <ImageUploader />


      <Footer />

    </div>
  );
}

export default Home;
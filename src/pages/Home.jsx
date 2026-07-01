import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Locations from "../components/Locations";
import Hospitals from "../components/Hospitals";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import Booking from "../components/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Locations />
      <Hospitals />
      <Blog />
      <FAQ />
      <Booking />
    </main>
  );
}

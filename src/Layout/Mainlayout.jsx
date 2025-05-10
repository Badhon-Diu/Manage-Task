import Footer from "../Components/Footer";
import Fulltable from "../Components/Fulltable";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
export default function Mainlayout() {
  return (
    <>
      <Navbar></Navbar>

      <Hero></Hero>
      <Fulltable></Fulltable>
      <Footer></Footer>
    </>
  );
}

import Header from "../components/Header/header.jsx";
import Section from "../components/section.jsx";
import OtherSection from "../components/otherSection.jsx";
import Footer from "../components/footer/footer.jsx";
import video from '../assets/orchid2.mp4'

const pText = "At Elenorchid, orchids are more than just flowers; they are the essence of beauty and tranquility, perfect for adding a touch of nature to your home or sharing with loved ones.";
const pText1 = "Welcome to Elenorchid – your premier online destination for exquisite orchids and exceptional floral experiences!";

function Introduction() {

  return (
    <>

      <video autoPlay muted src={video}></video>

      <Header />

      <OtherSection
        title="Welcome to ELENORCHID"
        text="Discover Exquisite Orchids for Every Occasion"
      />

      <Section
        text1={pText1}
        text2={pText} title="About Us"
        className="about"
        id="about-us"
      />

      <Section
        text1={pText}
        text2={pText}
        title="Our Mission"
        className="about"
        id="about"
      />

      <Section
        text1={pText}
        text2={pText}
        title="Our Mission"
        className="about"
        id="shop"
      />

      <OtherSection
        title="Ready to Dive into Orchid Elegance?"
        button={true}
      />

      <Footer />
    </>
  );
}

export default Introduction;

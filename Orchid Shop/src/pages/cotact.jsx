import Navbar from "../components/Navbar"
import video from '../assets/orchid2.mp4'
function Contact() {
  return (
    <>
      <p>contact</p>
      <Navbar></Navbar>

      <video autoPlay muted src={video}></video>
    </>
  )
}

export default Contact
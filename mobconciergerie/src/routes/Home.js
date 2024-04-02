import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../assets/1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import  Contact  from "../routes/Contact";

function Home () {
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        HeroImg={HomeImg}
        title="L'art de savoir faire voyages "
        text=" Votre conciergerie exclusive à Dubai pour un voyage d'exception"
        buttonText="Contactez-Nous"
        url="/contact" element= {<Contact/>}
        btnClass="show"
        />
        <Destination/>
        <Trip />
        
        <Footer />
        </>
    );
}


export default Home ;
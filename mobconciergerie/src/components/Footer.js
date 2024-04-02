import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () =>{
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>
                        MobConcergerie
                    </h1>
                    <p>Voyager avec nous</p>
                </div>
                <div>
                    <a href="https://www.tiktok.com/@mobconciergerie">
                        <i className="fa-brands fa-tiktok "></i>
                    </a>
                    <a href="https://www.instagram.com/mobconciergerie">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://t.snapchat.com/Q0kHFTxK">
                        <i className="fa-brands fa-snapchat"></i>
                    </a>
                    <a href="https://wa.me/+33652574318">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <a href="/"> Accueil </a>
                </div>
                <div>
                <a href="/about"> A propos de nous </a>
                </div>
                <div>
                <a href="/service"> Nos Services </a>
                </div>
                <div>
                <a href="/links"> Nos réseaux</a>
                </div>
                <div>
                <a href="/contact"> Contact </a>
                </div>
            </div>
            <div className="copy">
                <p>&copy; 2024  MobConciergerie. Tous droits réservés. Site réaliser pas  <a href="/" target="_blank">EnidWeb</a>.</p>
            </div>
        </div>
    )
}

export default Footer; 
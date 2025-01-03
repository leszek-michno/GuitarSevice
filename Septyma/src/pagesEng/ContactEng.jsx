import ContactForm from "../components/ContactFormEng";
import "../assets/styles/_Contact.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";

export const ContactEng = () => {
  return (
    <div className="contact">
      <h1>Contact with us</h1>
      <div className="social">
        <div className="media">
          <h2>Phone number</h2>
          <p>+48 733 726 591</p>
          <div className="links">
            <a
              href={"https://www.facebook.com/septymaguitars"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href={"https://www.instagram.com/septymaguitars/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a href={"mailto: serwis@septyma.com.pl"}>
              <AiOutlineMail />
            </a>
          </div>
          <h2>Address</h2>
          <p> Filarecka str. 9/1, 30-110 Krakow</p>
          <iframe
            title="Septyma Guitars"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5396.695397117517!2d19.914306798427067!3d50.055215737910366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b75ba8bb777%3A0x8f746e9c1b974e6e!2sFilarecka%209%2F1%2C%2030-110%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1734708457309!5m2!1spl!2spl"
          ></iframe>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

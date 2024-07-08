import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <h2
        className="conatct-title"
        style={{ marginLeft: "5%", marginTop: "30px" }}
      >
        Contact To Me
      </h2>
      <div data-aos="fade-down" className="contact">
        <section data-aos="fade-down" id="contact-details" class="section-p1">
          <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Contact Me today</h2>
            <h3>Happy To Viste My Protofolio </h3>
            <div>
              <li>
                <i class="fa-brands fa-linkedin"></i>
                <p>https://www.linkedin.com/in/mohamed-hamed-9b2655225/</p>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <p>mh674281@gmail.com</p>
              </li>
              <li>
                <i class="fa-brands fa-github"></i>
                <p>https://github.com/Mohamed-Hamed-20</p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <p>0115-234-7186 </p>
              </li>
              <li>
                <i class="fa-solid fa-clock"></i>
                <p>Every Day From 9.00am to 11.59pm</p>
              </li>
            </div>
          </div>
          <div class="map">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109964.86477580789!2d31.251190199999996!3d30.537943700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1720440741974!5m2!1sar!2seg"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
export default Contact;

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer-Container">
          <div className="Footer-Top">
            <h2> Mohamed Hamed</h2>
            <p>Thank You For Visiting My Portfolio</p>
            <div className="Footer-links">
              <ul>
                <li>
                  <a href="#l">About Me</a>
                </li>
                <li>
                  <a href="#l">Services</a>
                </li>
                <li>
                  <a href="#l">Tools</a>
                </li>
                <li>
                  <a href="#l">Experience</a>
                </li>
                <li>
                  <a href="#l">Projects</a>
                </li>
                <li>
                  <a href="#l">Education</a>
                </li>
                <li>
                  <a href="#l">Courses</a>
                </li>
                <li>
                  <a href="#l">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="Footer-Line"></div>
          <div className="Footer-icon">
            <i
              onClick={() => {
                window.location.href =
                  "https://www.facebook.com/profile.php?id=100018451944807";
              }}
              className="fa-brands fa-square-facebook"
            ></i>
            <i
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/mohamed-hamed-9b2655225/";
              }}
              className="fa-brands fa-linkedin"
            ></i>

            <i
              onClick={() => {
                window.location.href =
                  "https://www.instagram.com/mohamed_hmed_20/";
              }}
              className="fa-brands fa-square-instagram"
            ></i>
            <i
              onClick={() => {
                window.location.href =
                  "https://myaccount.google.com/?hl=ar&utm_source=OGB&utm_medium=act";
              }}
              className="fa-solid fa-envelope"
            ></i>
            <i
              onClick={() => {
                window.location.href = "https://wa.me/01152347186";
              }}
              className="fa-brands fa-square-whatsapp"
            ></i>
          </div>
          <p style={{ marginTop: "10px" }}>CopyRight@MohamedHamed.2024</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

import "./Hero.css";
import Pro_Img from "../../Assets/profolio.jpg";
function Hero() {
  return (
    <>
      <div className="hero">
        <div data-aos="fade-up-right" className="left">
          <h5>Welcom To My Protfolio</h5>
          <h1>
            Hi! I'am Mohamed Hamed <span> back End Developer</span>
          </h1>
          <p>
            I am a Back-end developer specializing in server-side logic,
            Database Management, and build Restfull API to secure and
            Performance Fast Application, with technologies like Node.js Express
            MongoDB Java JavaScript and basic knowledge about docker and
            container with the AWS like (S3 , EC2 , AMI).
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 600, 
                  behavior: "smooth", 
                });
              }}
              className="animate__animated animate__bounceInLeft explore"
            >
              Explore
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://mohamed-files.s3.amazonaws.com/Mohamed--Hamed+.cv+Main__1.pdf",
                  "_blank"
                );
              }}
              className="animate__animated animate__bounceInRight cv"
            >
              Download CV{" "}
              <i style={{ color: "brown " }} class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
        <div data-aos="fade-up-left" className="right">
          <img src={Pro_Img} alt="" />
        </div>
      </div>
    </>
  );
}
export default Hero;

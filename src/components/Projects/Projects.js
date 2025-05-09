import "./Projects.css";
import studentportalimg from "../../Assets/Api seacrh.png";
import StaticEcommerce from "../../Assets/ecommerce.png";
import FullStackEcommerce from "../../Assets/full stack ecommerce.png";
import ChatGPT from "../../Assets/animtions.webp";
import APISearch from "../../Assets/Api seacrh.png";
import Cruds from "../../Assets/Cruds.png";
import ecommerceByjs from "../../Assets/Ecommerce js.png";
import Tourism from "../../Assets/Tourism.png";
import Eductions from "../../Assets/Education platdorm.png";
import Honey from "../../Assets/honey.png";
import Template1 from "../../Assets/Template1.png";
import Landing from "../../Assets/Landing Page.png";

function Projects() {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        <div className="projectcontainer">
          <div data-aos="fade-up-right" className="project">
            <img src={studentportalimg} alt=""></img>
            <h3>Student Portal </h3>
            <p>
              Full Stack graduation Project for University , build To facilitate
              the student's academic life by registering subjects and viewing
              grades easily{" "}
            </p>
            <div className="protools">
              <p>MERN Stack</p>
              <p>Node.js</p>
              <p>Restfull API</p>
              <p>JS</p>
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Express</p>
              <p>Mongo DB</p>
              <p>React.JS</p>
              <p>more ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://graduation-project-beryl-seven.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/Mohamed-Hamed-20/university-backend",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>

          <div data-aos="fade-up-right" className="project">
            <img src={FullStackEcommerce} alt=""></img>
            <h3> E-commerce </h3>
            <p>
              This full-stack ecommerce project provides a comprehensive
              dashboard for admins to manage clients, orders, categories,
              products, and coupons efficiently
            </p>
            <div className="protools">
              <p>MERN Stack</p>
              <p>Node.js</p>
              <p>Restfull API</p>
              <p>JS</p>
              <p>Html</p>
              <p>Css</p>
              <p>Express</p>
              <p>Mongo DB</p>
              <p>React.JS</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://frontend-e-commerce-pi.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>{" "}
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/Mohamed-Hamed-20/E-commerce-v2",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={StaticEcommerce} alt=""></img>
            <h3>Trello API</h3>
            <p>
              this project Show More Category Of Clothing For Mens ,Wommens ,
              Childrens And Smart Cart You Add Prodct In It.
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Saas</p>
              <p>Routes</p>
              <p>Restful Api</p>
              <p>React.JS</p>
              <p>Node.js</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://e-commerce-react-project-green.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/Mohamed-Hamed-20/trello_backend.Node.js_project",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={ChatGPT} alt=""></img>
            <h3>ChatGPT </h3>
            <p>
              this project Made for developing learning in colleges and provide
              more servicie for student & doctor & affairs{" "}
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Saas</p>
              <p>Routes</p>
              <p>Restful Api</p>
              <p>React.JS</p>
              <p>Node.js</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://chat-bot-jade-nine.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/ChatBot",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={APISearch} alt=""></img>
            <h3>Image Search App</h3>
            <p>
              this project Provide Fast And Easy Serach For Any Things Like Cats
              , Dogs , Players , Clubs , Flowers , Balls And Diffrent Things
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p>
              <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://api-search-app-pi.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Api-Search-App",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={Cruds} alt=""></img>
            <h3>Cruds Project </h3>
            <p>
              this project Provide The Cruds Operatons Create , Update , Read ,
              Delete for any products and Other Services
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p> <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://cruds-operations-beryl.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/CRUDS-Operations",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={ecommerceByjs} alt=""></img>
            <h3>Ecommerce By JS </h3>
            <p>
              this project Made Provide Alot Of Types Of Clothes High Quality ,
              Alot of Services To Show Single Page Of Any Product
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p> <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://e-commerce-of-clothes.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/E-commerce-Of-Clothes",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={Tourism} alt=""></img>
            <h3>Tourism In Egypt </h3>
            <p>
              this project Provides Services For Tourists And Provide Best
              Places In Egypt To Visite It And Enjoy in Egypt Vibes
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p> <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://tourism-rho-ochre.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Tourism",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={Eductions} alt=""></img>
            <h3>Education platform </h3>
            <p>
              this project Provides Services For Student And Instructors Show
              the Profile , Settings , Projects , Files , Friends , Dashboard
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://eductaion-plateform.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Eductaion-Plateform",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={Honey} alt=""></img>
            <h3>Honey Shop </h3>
            <p>
              this project Provides Services For Customers Need Best Type Of
              Honey Look Like Honey With Queen bee , Rosemary honey
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://e-commerce-of-honey.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/E-commerce-Of-Honey",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={Template1} alt=""></img>
            <h3>Buty Template </h3>
            <p>
              this Template Provides Alot Of Services And Some Photes of Natural
              And Can Contact With US By Form Easy
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://template-by-html-css.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Template_by_html_css",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={Landing} alt=""></img>
            <h3>Landing Page </h3>
            <p>
              this Landing Page Provides Many Sections Shows My Skills In Html &
              CSS & bootstrap And More Skills By Animations , Media Query
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://landing-page-huai.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Landing-Page",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;

import "./Tools&experience.css";
function ToolsExperience() {
  return (
    <>
      <div className="toolsandexperience">
        <div data-aos="fade-up-right" className="ToolContainer">
          <h2>Tools</h2>
          <div className="tools">
            {/* nodejs -->*/}
            <div className="tool">
              <div className="i">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                />
              </div>
              <p>Node.js</p>
            </div>

            {/*  <!-- Javascript --> */}
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "yellow" }}
                  class="fa-brands fa-square-js"
                ></i>
              </div>
              <p>JS</p>
            </div>
            {/* <!--  Express --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                />
              </div>
              <p>Express</p>
            </div>
            {/* <!--  MongoDB --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                />
              </div>
              <p>MongoDB</p>
            </div>
            {/* <!--  database --> */}
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "rgb(194, 197, 196)" }}
                  class="fa-solid fa-database"
                ></i>
              </div>
              <p style={{ width: "90px", overflow: "clip" }}>Database</p>
            </div>

            {/*  <!-- postman --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                />
              </div>
              <p>Postman</p>
            </div>
            {/*  <!-- typescript --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                />
              </div>
              <p>TypeScript</p>
            </div>
            {/* <!--  docker --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="docker"
                />
              </div>
              <p>Docker</p>
            </div>
            {/* <!-- Java --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg"
                  alt="java"
                />
              </div>
              <p>Java</p>
            </div>

            {/* <!-- RESTful API --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png"
                  alt="restful-api"
                />
              </div>
              <p>RESTful API</p>
            </div>

            {/* <!-- AWS --> */}
            <div className="tool">
              <div className="i">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  alt="aws"
                />
              </div>
              <p>AWS</p>
            </div>

            {/* <!-- Server Side --> */}
            <div className="tool">
              <div className="i">
                <i
                  class="fa-solid fa-server"
                  style={{ color: "whitesmoke" }}
                ></i>
              </div>
              <p>Server Side</p>
            </div>

            {/*  <!-- html5 --> */}
            <div className="tool">
              <div className="i">
                <i class="fa-brands fa-html5"></i>
              </div>
              <p>HTML 5</p>
            </div>
            {/* <!--  css --> */}
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "rgb(89, 159, 250)" }}
                  class="fa-brands fa-css3-alt"
                ></i>
              </div>
              <p>CSS </p>
            </div>
            {/* <-- Git & github --> */}
            <div className="tool">
              <div className="i">
                <i style={{ color: "white" }} class="fa-brands fa-github"></i>
              </div>

              <p>Git/Hub</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left" className="experienceContainer">
          <h2>Experience</h2>
          <div className="expreiences">
            <div className="expreience">
              <i class="fa-brands fa-square-upwork"></i>
              <div className="up-details">
                <h3>MERN Stack Developer</h3>
                <p>Digital Egypt Pioneers Initiative - DEPI · Internship</p>
                <p>May 2024 - Present </p>
                <h5> 1-Learn user Experience </h5>
                <h5> 2-Make High Responsive </h5>
                <h5> 3-Interact With APIS </h5>
                <h5> 4-Integration Payment Method </h5>
              </div>
            </div>
            <div className="expreience">
              <i class="fa-brands fa-square-upwork"></i>
              <div className="up-details">
                <h3> Web Based Information System For Stdent Portal Project</h3>
                <p>Jan,2024-mar,2024</p>
                <h5> 1-Make More Interactive </h5>
                <h5> 2-Make High Responsive </h5>
                <h5> 3-Make Real Time Chat </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToolsExperience;

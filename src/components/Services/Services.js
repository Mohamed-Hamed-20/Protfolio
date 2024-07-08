import "./Services.css";
import ServerSide from "../../Assets/Server-Side-Logic.png";
import db_Manage from "../../Assets/database.png";
import restfullApi from "../../Assets/restfullapi.png";
import AWS_Integration from "../../Assets/aws_integration.png";
import performance from "../../Assets/performance_optimization.png";
import Third_Party from "../../Assets/Third_Party_Module.png";
import docker from "../../Assets/Docker_Containerization.png";
import documentaion from "../../Assets/Documentation_Api.png";

function Services() {
  return (
    <>
      <div className="Services">
        <div className="ser-title">
          <h2>Services</h2>
        </div>
        <div className="Services-container">
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <img src={ServerSide} alt="" />
              {/* 1 */}
            </div>
            <div className="service-details">
              <h3>Server-Side Logic</h3>
              <p>
                I specialize in designing and implementing the core logic of
                server-side applications, ensuring they are secure, efficient,
                and scalable.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <img src={db_Manage} alt="" />
            </div>
            <div className="service-details">
              <h3>Database Management </h3>
              <p>
                Efficiently manage and interact with databases, ensuring data
                integrity, security, and optimal performance using technologies
                like MongoDB and MySql.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <img src={restfullApi} alt="" />
            </div>
            <div className="service-details">
              <h3>Building RESTful APIs</h3>
              <p>
                Develop robust and secure RESTful APIs that provide seamless
                communication between the server and client applications
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <img src={AWS_Integration} alt="" />
            </div>
            <div className="service-details">
              <h3>AWS Integration</h3>
              <p>
                Integrate AWS services such as S3 for storage and EC2 for server
                hosting, ensuring high availability and scalability.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <img src={performance} alt="" />
            </div>
            <div className="service-details">
              <h3>Performance Optimization</h3>
              <p>
                Focus on optimizing server performance, ensuring fast response
                times and efficient resource usage
              </p>
            </div>
          </div>
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <img src={Third_Party} alt="" />
            </div>
            <div className="service-details">
              <h3>Third-Party Module Integration</h3>
              <p>
                Implement and integrate third-party modules like email services,
                payment gateways, and authentication systems (including Google
                Auth) to enhance application functionality.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <img src={docker} alt="" />
            </div>
            <div className="service-details">
              <h3>Docker and Containerization</h3>
              <p>
                Utilize Docker and containerization technologies to create
                portable and consistent environments for application deployment
                and development.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <img src={documentaion} alt="" />
            </div>
            <div className="service-details">
              <h3>Documentation</h3>
              <p>
                Write clear and comprehensive documentation for code and system
                processes, and provide training and support to ensure smooth
                transitions and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;

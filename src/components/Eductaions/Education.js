import "./Eductaion.css";
function Education() {
  return (
    <>
      <div className="Education">
        <div className="education-title">
          <h2>Educations & Courses</h2>
        </div>
        <div className="edu-conatiner">
          <div data-aos="fade-up-right" className="edu">
            <div className="lines-style">
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
            </div>
            <div className="edu-details">
              <div data-aos="fade-down" className="courses">
                <p> 05-2023 - 10-2023</p>
                <h4> Route Academy</h4>
                <p>
                  I'm learning Express.js to enhance my backend Node.js skills,
                  focusing on building robust APIs and web applications.
                  Currently, I'm developing a project inspired by Trello, aimed
                  at implementing task management and collaborative features
                  effectively
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "5px" }}
              >
                <p>2020-2024</p>
                <h4>Bachelor's Degree In computer Science</h4>
                <p>
                  I Studied 4 Years Of Computer Science And Got Alot Of Skills
                  And Knowledge Of Launguages Programming & Technologies
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "-15px" }}
              >
                <p>08-2023</p>
                <h4>Mahara-Tech Certificate Javascript Course</h4>
                <p>
                  Learned fundamental concepts of JavaScript, including if
                  conditions, loops, and basic logic. Explored Object-Oriented
                  Programming (OOP) principles and their application in
                  JavaScript.
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up-left" className="edu">
            <div className="lines-style">
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
            </div>
            <div className="edu-details">
              <div data-aos="fade-down" className="courses">
                <p>2022-2023</p>
                <h4>Digital Egypt Pioneers Initiative - DEPI</h4>
                <p>
                  I Studied Front End Tools Very Good "HTML & CSS & BOOTSTRAP &
                  JAVA SCRIPT" To Make Very Interactivity Websites & Resposives
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "-20px" }}
              >
                <p> 08-2023 - 11-2022</p>
                <h4>Jonas Courses </h4>
                <p>
                  I Spend half Years Of Jounas Courses Of Js & Node.Js And Got
                  Alot Of Skills And Knowledge Of Launguages Programming &
                  Technologies
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "-20px" }}
              >
                <p>2020-2023</p>
                <h4>English Language </h4>
                <p>
                  I Studied English And My Level Is Middle , I will Develop
                  Myself In The Near Future , I developed my English language
                  skills by watching a lot of YouTube videos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;

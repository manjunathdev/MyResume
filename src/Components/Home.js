import { Link } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Container from "react-bootstrap/Container";

const Home = ({ loggedIn, username }) => {
  return (
    <Container>
      {loggedIn ? (
        <div className="mb-5">
          <NavbarComponent username={username} />
          <h1 className="text-center mt-4 mb-3">Software Engineer</h1>
          <h3>Summary</h3>
          <ul>
            <li>
              10 years of experience in{" "}
              <span class="fw-semibold">
                Web Application development and Front-end GUI using JavaScript
                frameworks
              </span>
              .
            </li>
            <li>
              Extensive background in{" "}
              <span class="fw-semibold">
                Software Development Life Cycle, Continuous Integration
              </span>
              .
            </li>
            <li>
              <span class="fw-semibold">Mentoring juniors</span> in their
              development along with the project development.
            </li>
          </ul>

          <h3>Experience</h3>
          <div className="row">
            <div className="col fw-bold">
              LittleBig Connection India Pvt Ltd
            </div>
            <div className="col text-end">Bengaluru</div>
          </div>
          <div className="row">
            <div className="col fw-bold">Software Engineer</div>
            <div className="col text-end">2016-2024</div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                Worked extensively in SPA migration, designing, prototyping and
                building interactive user interfaces.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  Using AI tools as VS Co-Pilot for faster coding and creating
                  Unit Test Cases.
                </li>
                <li>
                  Implemented Vue JS, Vuex, Vuetify to build interactive single
                  page applications
                </li>
                <li>
                  Completed successful migration from cshtml application to SPA
                  - VueJS within specified timeframe.
                </li>
                <li>
                  <span class="fw-semibold">Rebuilt 10+ web applications</span>{" "}
                  for operational efficiency increasing productivity.
                </li>
                <li>
                  <span class="fw-semibold">Azure Devops</span> to plan, track,
                  and discuss work across teams, build, test, and deploy with
                  CI/CD.
                </li>
                <li>Created api’s and integrated with front-end.</li>
                <li>
                  Collaborated with design and product teams to define feature
                  specifications and develop high quality deliverables.
                </li>
                <li>
                  <span class="fw-semibold">Agile Methodology</span> (Sprint,
                  Scrum, Retrospective, Scrum Master Role)
                </li>
                <li>
                  <span class="fw-semibold">Taking ownership</span> of projects
                  for support activities, interacting with intra and support
                  teams located across different time zones to resolve issues.
                </li>
                <li>
                  <span class="fw-semibold">Mentored junior developers</span>{" "}
                  and provide technical guidance.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col fw-bold">EDS Technologies Pvt. Ltd</div>
            <div className="col text-end">Bengaluru</div>
          </div>
          <div className="row">
            <div className="col fw-bold">Developer–UI</div>
            <div className="col text-end">2015-2016</div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                Worked extensively in designing, prototyping and building
                interactive user interfaces.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  Utilized Jquery, Bootstrap, CSS and HTML5 to create visually
                  appealing and responsive designs.
                </li>
                <li>
                  Collaborated with design and product teams to define feature
                  specifications and develop high quality deliverables.
                </li>
                <li>
                  Mentoring new hires and providing technical guidance to other
                  team members.
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col fw-bold">4th Dymension Teknocrats</div>
            <div className="col text-end">Bengaluru</div>
          </div>
          <div className="row">
            <div className="col fw-bold">Software Engineer</div>
            <div className="col text-end">2014-2015</div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                Played key role in team of developers to build and optimize web
                applications.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  Developed front-end features using JSF 2.0, Primefaces, HTML
                  5, CSS 3, Bootstrap, Javascript, improving website
                  accessibility.
                </li>
                <li>
                  Worked closely with backend developers to ensure seamless
                  integration of new UI components.
                </li>
                <li>
                  Participated in regular code reviews, maintaining high code
                  quality and consistency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <Link to="/">Login</Link>
        </div>
      )}
    </Container>
  );
};

export default Home;

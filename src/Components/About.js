import { Link } from "react-router-dom";
import NavbarComponent from "./Navbar";
import Container from "react-bootstrap/Container";

const About = ({ loggedIn, username }) => {
  return (
    <Container>
      {loggedIn ? (
        <div className="mb-5">
          <NavbarComponent username={username} />
          <h3 className="mt-4">Recent Projects</h3>
          <div className="row">
            <div className="col">
              <p>
                <span class="fw-semibold">ABC</span> is a business application
                that helps users to create, update and maintain information
                regarding business leads, convert them into opportunities by
                providing information related to any account and their contacts,
                and helps in the planning activities to convert leads to an
                opportunity and finally into a Project.
              </p>
              <p>
                <span class="fw-semibold">Matters</span> - Insurance/Certificate
                and Claims management tool.
              </p>
              <p>
                <span class="fw-semibold">LegalDashboard</span> - Dashboard for
                Legal applications where corporate and commercial data related
                to requests, Documents expiring, timeline are shown.
              </p>
              <p>
                <span class="fw-semibold">Requests</span> - Application which
                manages the Corporate Requests and Litigations.
              </p>
              <p>
                <span class="fw-semibold">CRM</span> - Customer Relationship
                Management Application.
              </p>
              <p>
                <span class="fw-semibold">Ariane</span> - Deals with functions,
                roles, Governance, Departments and scopes - Applications used by
                Managers and HR team.
              </p>
              <p class="fw-semibold">Responsibility:</p>
              <ul>
                <li>
                  <span class="fw-semibold">Independent Contributor</span> for
                  building business feature considering all scenarios.
                </li>
                <li>
                  Involved in{" "}
                  <span class="fw-semibold">
                    requirements gathering, design discussion, brainstorming,
                    development, testing
                  </span>
                  .
                </li>
                <li>
                  Understanding visual designs,{" "}
                  <span class="fw-semibold">
                    style guides from the UX team, interacting with clients
                  </span>
                  , users to align accordingly.
                </li>
                <li>
                  Integration, end-to-end testing, Unit testing & making sure
                  zero-defect standards are maintained.
                </li>
                <li>
                  <span class="fw-semibold">Scrum methodology</span> is
                  implemented for better development and efficiency.
                </li>
                <li>
                  <span class="fw-semibold">Documentation</span> – create wiki’s
                  so new users/developers can refer them.
                </li>
                <li>
                  <span class="fw-semibold">Manage Junior Developers</span> in
                  the team, guide them to deliver the features on time.
                </li>
              </ul>
            </div>
          </div>

          <h3>Skills</h3>
          <div className="row">
            <div className="col">
              <p class="fw-semibold">
                Azure Devops, Agile Scrum, ReactJS, VueJS, Vuex, Vuetify,
                Jquery, Javascript, Bootstrap, HTML5, CSS3, SASS, Highcharts,
                JSON, converting PSD files into real time web pages, SQL.
              </p>
            </div>
          </div>

          <h3>Strengths</h3>
          <div className="row">
            <div className="col">
              <p class="fw-semibold mb-1">Innovative Problem-Solving</p>
              <p>
                Excelled in identifying and resolving complex UI issues,
                improving user experience in my current role.
              </p>
              <p class="fw-semibold mb-1">Effective Team Collaboration</p>
              <p>
                Led cross-functional teams in major projects, enhancing team
                productivity and project efficiency.
              </p>
              <p class="fw-semibold mb-1">
                Adaptability in Fast-Paced Environments
              </p>
              <p>
                Quickly adapted to new technologies and workflows, contributing
                to increase in project delivery speed.
              </p>
            </div>
          </div>

          <h3>Education</h3>
          <div className="row">
            <div className="col">
              <p>
                <span class="fw-semibold">BE</span> in Information Science
                Engineering from CMR Institute of Technology, Bengaluru in the
                year 2013.
              </p>
              <p>
                <span class="fw-semibold">PUC</span> from S.M.S.G.J College,
                Bengaluru in the year 2009.
              </p>
              <p>
                <span class="fw-semibold">10th I.C.S.E</span> from Bangalore
                Public School, Bengaluru in the year 2007.
              </p>
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

export default About;

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../projectCard/projectCard";
import appImg1 from "../../assets/img/todo.png";
import appImg2 from "../../assets/img/alpha.png";
import appImg3 from "../../assets/img/weather.png";
import websiteImg1 from "../../assets/img/movibes.png"
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const apps = [
    {
      title: "Todo",
      description:
        "Offline, secure, To-Do and Notes app with encrypted storage",
      imgUrl: appImg1,
      githubUrl:"https://github.com/KerlosGirgis/Todo",
      fdroidUrl:"https://f-droid.org/en/packages/com.k.todo/"
    },
    {
      title: "Alpha",
      description: "Simple Bookstore Application",
      imgUrl: appImg2,
      githubUrl:"https://github.com/KerlosGirgis/alpha"
    },
    {
      title: "Weather",
      description: "Simple Weather Forcast App",
      imgUrl: appImg3,
      githubUrl:"https://github.com/KerlosGirgis/Weather"
    },
  ];


    const websites = [
    {
      title: "Movibes",
      description:
        "Movibes is a sleek and modern movie browsing website",
      imgUrl: websiteImg1,
      githubUrl:"https://github.com/KerlosGirgis/Movibes",
      websiteUrl:"https://kerlosgirgis.github.io/Movibes/movies"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Things I've built so far</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Websites</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {apps.map((apps, index) => {
                            return <ProjectCard key={index} {...apps} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="second">
                        <Row>
                          {websites.map((websites, index) => {
                            return <ProjectCard key={index} {...websites} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../projectCard/projectCard";
import appImg1 from "../../assets/img/todo.png";
import appImg11 from "../../assets/img/todo1.png";
import appImg12 from "../../assets/img/todo2.png";
import appImg13 from "../../assets/img/todo3.png";
import appImg14 from "../../assets/img/todo4.png";
import appImg15 from "../../assets/img/todo5.png";
import appImg2 from "../../assets/img/alpha.png";
import appImg3 from "../../assets/img/weather.png";
import appImg4 from "../../assets/img/shoppy.png";
import websiteImg1 from "../../assets/img/movibes.png"
import websiteImg2 from "../../assets/img/store.png"
import "animate.css";
import TrackVisibility from "react-on-screen";

type ProjectData = {
  title: string;
  description: string;
  imgUrl: string;
  screenshots: string[];
  githubUrl?: string;
  fdroidUrl?: string;
  websiteUrl?: string;
};

export const Projects = () => {
  const apps: ProjectData[] = [
    {
      title: "Todo",
      description:
        "Offline, secure, To-Do and Notes app with encrypted storage",
      imgUrl: appImg1,
      screenshots: [appImg11, appImg12, appImg13, appImg14, appImg15],
      githubUrl: "https://github.com/KerlosGirgis/Todo",
      fdroidUrl: "https://f-droid.org/en/packages/com.k.todo/"
    },
    {
      title: "Alpha",
      description: "Simple Bookstore Application",
      imgUrl: appImg2,
      screenshots: [appImg2],
      githubUrl: "https://github.com/KerlosGirgis/alpha"
    },
    {
      title: "Weather",
      description: "Simple Weather Forcast App",
      imgUrl: appImg3,
      screenshots: [appImg3],
      githubUrl: "https://github.com/KerlosGirgis/Weather"
    },
    {
      title: "Shoppy",
      description: "Flutter-based e-commerce app",
      imgUrl: appImg4,
      screenshots: [appImg4],
      githubUrl: "https://github.com/KerlosGirgis/Shoppy"
    },
  ];


  const websites = [
    {
      title: "Movibes",
      description:
        "Movibes is a sleek and modern movie browsing website",
      imgUrl: websiteImg1,
      screenshots: [websiteImg1],
      githubUrl: "https://github.com/KerlosGirgis/Movibes",
      websiteUrl: "https://kerlosgirgis.github.io/Movibes/movies"
    },
    {
      title: "Store",
      description:
        "E-commerce website with modern UI",
      imgUrl: websiteImg2,
      screenshots: [websiteImg2],
      githubUrl: "https://github.com/KerlosGirgis/Store",
      websiteUrl: "https://kerlosgirgis.github.io/store/"
    },
  ];

  const renderProjectRows = (projects: ProjectData[]) => {
    return projects.map((project, index) => (
      <div key={index} className="project-row">
        <div className="project-card-wrapper">
          <ProjectCard {...project} />
        </div>
        <div className="project-screenshots">
          <div className="screenshot-track">
            {project.screenshots?.map((screenshot: string, screenshotIndex: number) => (
              <div key={screenshotIndex} className="screenshot-item">
                <img src={screenshot} alt={`${project.title} screenshot ${screenshotIndex + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
                <div
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
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <div className="project-list">{renderProjectRows(apps)}</div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="project-list">{renderProjectRows(websites)}</div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

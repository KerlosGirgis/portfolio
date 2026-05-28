import { useState, useRef } from "react";
import type { KeyboardEvent } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../projectCard/projectCard";
import appImg1 from "../../assets/img/todo.png";
import appImg11 from "../../assets/img/todo1.png";
import appImg12 from "../../assets/img/todo2.png";
import appImg13 from "../../assets/img/todo3.png";
import appImg14 from "../../assets/img/todo4.png";
import appImg15 from "../../assets/img/todo5.png";
import appImg2 from "../../assets/img/alpha.png";
import appImg21 from "../../assets/img/alpha1.png";
import appImg22 from "../../assets/img/alpha2.png";
import appImg23 from "../../assets/img/alpha3.png";
import appImg24 from "../../assets/img/alpha4.png";
import appImg25 from "../../assets/img/alpha5.png";
import appImg26 from "../../assets/img/alpha6.png";
import appImg3 from "../../assets/img/weather.png";
import appImg31 from "../../assets/img/weather1.png";
import appImg32 from "../../assets/img/weather2.png";
import appImg33 from "../../assets/img/weather3.png";
import appImg4 from "../../assets/img/shoppy.png";
import appImg41 from "../../assets/img/shoppy1.png";
import appImg42 from "../../assets/img/shoppy2.png";
import appImg43 from "../../assets/img/shoppy3.png";
import appImg44 from "../../assets/img/shoppy4.png";
import appImg45 from "../../assets/img/shoppy5.png";
import appImg46 from "../../assets/img/shoppy6.png";
import appImg47 from "../../assets/img/shoppy7.png";
import appImg48 from "../../assets/img/shoppy8.png";
import appImg49 from "../../assets/img/shoppy9.png";
import appImg410 from "../../assets/img/shoppy10.png";
import appImg5 from "../../assets/img/exam.png";
import appImg51 from "../../assets/img/exam1.png";
import appImg52 from "../../assets/img/exam2.png";
import appImg53 from "../../assets/img/exam3.png";
import appImg54 from "../../assets/img/exam4.png";
import appImg55 from "../../assets/img/exam5.png";
import appImg56 from "../../assets/img/exam6.png";
import websiteImg1 from "../../assets/img/movibes.png";
import websiteImg11 from "../../assets/img/movibes1.png";
import websiteImg12 from "../../assets/img/movibes2.png";
import websiteImg13 from "../../assets/img/movibes3.png";
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

type OverlayState = {
  title: string;
  screenshots: string[];
  index: number;
};

export const Projects = () => {
  const apps: ProjectData[] = [
    {
      title: "Shoppy",
      description: "Flutter-based e-commerce app",
      imgUrl: appImg4,
      screenshots: [appImg41, appImg42, appImg43, appImg44, appImg45, appImg46, appImg47, appImg48, appImg49, appImg410],
      githubUrl: "https://github.com/KerlosGirgis/Shoppy",
    },
        {
      title: "Exam",
      description: "A polished Flutter exam-preparation app",
      imgUrl: appImg5,
      screenshots: [appImg51, appImg52, appImg53, appImg54, appImg55, appImg56],
      githubUrl: "https://github.com/KerlosGirgis/ExamApp",
    },
    {
      title: "Alpha",
      description: "Simple Bookstore Application",
      imgUrl: appImg2,
      screenshots: [appImg21, appImg22, appImg23, appImg24, appImg25, appImg26],
      githubUrl: "https://github.com/KerlosGirgis/alpha",
    },
    {
      title: "Todo",
      description:
        "Offline, secure, To-Do and Notes app with encrypted storage",
      imgUrl: appImg1,
      screenshots: [appImg11, appImg12, appImg13, appImg14, appImg15],
      githubUrl: "https://github.com/KerlosGirgis/Todo",
      fdroidUrl: "https://f-droid.org/en/packages/com.k.todo/",
    },
    {
      title: "Weather",
      description: "Simple Weather Forcast App",
      imgUrl: appImg3,
      screenshots: [appImg31, appImg32, appImg33],
      githubUrl: "https://github.com/KerlosGirgis/Weather",
    },
  ];

  const websites = [
    {
      title: "Movibes",
      description: "Movibes is a sleek and modern movie browsing website",
      imgUrl: websiteImg1,
      screenshots: [websiteImg11, websiteImg12, websiteImg13],
      githubUrl: "https://github.com/KerlosGirgis/Movibes",
      websiteUrl: "https://kerlosgirgis.github.io/Movibes/movies",
    },
  ];

  const [overlayState, setOverlayState] = useState<OverlayState | null>(null);
  const previewCloseTimer = useRef<number | null>(null);

  const clearPreviewTimer = () => {
    if (previewCloseTimer.current) {
      window.clearTimeout(previewCloseTimer.current);
      previewCloseTimer.current = null;
    }
  };

  const openScreenshotPreview = (
    screenshots: string[],
    index: number,
    title: string,
  ) => {
    clearPreviewTimer();
    setOverlayState({ screenshots, index, title });
  };

  const handleOverlayClose = () => {
    clearPreviewTimer();
    setOverlayState(null);
  };

  const handlePrevScreenshot = () => {
    if (!overlayState) return;
    const prevIndex =
      (overlayState.index - 1 + overlayState.screenshots.length) %
      overlayState.screenshots.length;
    setOverlayState({ ...overlayState, index: prevIndex });
  };

  const handleNextScreenshot = () => {
    if (!overlayState) return;
    const nextIndex =
      (overlayState.index + 1) % overlayState.screenshots.length;
    setOverlayState({ ...overlayState, index: nextIndex });
  };

  const handleOverlayKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!overlayState) return;
    if (event.key === "Escape") {
      handleOverlayClose();
    }
    if (event.key === "ArrowLeft") {
      handlePrevScreenshot();
    }
    if (event.key === "ArrowRight") {
      handleNextScreenshot();
    }
  };

  const renderProjectRows = (projects: ProjectData[]) => {
    return projects.map((project, index) => (
      <div key={index} className="project-row">
        <div className="project-card-wrapper">
          <ProjectCard {...project} />
        </div>
        <div className="project-screenshots">
          <div className="screenshot-track">
            {project.screenshots?.map(
              (screenshot: string, screenshotIndex: number) => (
                <div
                  key={screenshotIndex}
                  className="screenshot-item"
                  tabIndex={0}
                  onClick={() =>
                    openScreenshotPreview(
                      project.screenshots,
                      screenshotIndex,
                      project.title,
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      openScreenshotPreview(
                        project.screenshots,
                        screenshotIndex,
                        project.title,
                      );
                    }
                  }}
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${screenshotIndex + 1}`}
                  />
                </div>
              ),
            )}
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
              <div>
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
                      <div className="project-list">
                        {renderProjectRows(apps)}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="project-list">
                        {renderProjectRows(websites)}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {overlayState && (
        <div
          className="screenshot-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${overlayState.title} screenshot preview`}
          onClick={handleOverlayClose}
          onKeyDown={handleOverlayKeyDown}
          tabIndex={-1}
        >
          <div
            className="screenshot-overlay-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="overlay-close-button"
              type="button"
              aria-label="Close preview"
              onClick={handleOverlayClose}
            >
              ×
            </button>
            <div className="overlay-header">
              <span>{overlayState.title}</span>
              <span>
                {overlayState.index + 1}/{overlayState.screenshots.length}
              </span>
            </div>
            <img
              className="overlay-image"
              src={overlayState.screenshots[overlayState.index]}
              alt={`${overlayState.title} screenshot ${overlayState.index + 1}`}
            />
            {overlayState.screenshots.length > 1 && (
              <div className="overlay-nav">
                <button
                  type="button"
                  className="overlay-nav-button"
                  onClick={handlePrevScreenshot}
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="overlay-nav-button"
                  onClick={handleNextScreenshot}
                  aria-label="Next screenshot"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubUrl,
  fdroidUrl,
  websiteUrl,
}: any) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mt-2 d-inline-block me-2"
              style={{ textDecoration: "none", fontWeight: "500" }}
            >
              <i className="bi bi-github me-1"></i>
              GitHub
            </a>
          )}
          {fdroidUrl && (
            <a
              href={fdroidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mt-2 d-inline-block"
              style={{ textDecoration: "none", fontWeight: "500" }}
            >
              <i className="bi bi-android me-1"></i>
              F-Droid
            </a>
          )}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mt-2 d-inline-block"
              style={{ textDecoration: "none", fontWeight: "500" }}
            >
              <i className="bi bi-globe me-1"></i>
              Website
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};

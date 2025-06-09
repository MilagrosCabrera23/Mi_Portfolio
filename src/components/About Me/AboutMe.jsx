import "../About Me/AboutMe.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDjango,
  SiTestinglibrary,
  SiBootstrap,
  SiAngular,
  SiSpring,
  SiUml,
  SiScrumalliance,
  SiTrello,
  SiMysql,
  SiPostgresql,
  SiFastapi,
  SiSass,
  SiJira,
} from "react-icons/si";
import perfilAnime from "../../assets/perfilAnime.png";

const AboutMeComponent = () => {
  return (
    <Container className="about-container" id="sobre-mi">
      <Row className="row-about flex-column flex-md-row">
          <h2 className="title-about">Sobre Mi</h2>
        {/* Imagen: primero en mobile, segundo en desktop */}
        <Col
          xs={12}
          md={6}
          className="text-center order-1 order-md-2"
        >
          <img
            src={perfilAnime}
            className="imagen-about d-flex"
            alt="foto de perfil animada"
          />
        </Col>

        {/* Texto: segundo en mobile, primero en desktop */}
        <Col
          xs={12}
          md={6}
          className="text-start order-2 order-md-1"
        >
        
          <p className="subtitle-about">
            Soy una desarrolladora de software en formación con enfoque en el
            desarrollo Full Stack. Me encanta transformar ideas en aplicaciones
            funcionales, interactivas y escalables.
          </p>
          <h3 className="title-tecnologias text-center">
            Habilidades y Tecnologías
          </h3>

          <Row className="mt-4 g-3 row-about">
            {/* Lenguajes */}
            <Col md={6}>
              <div className="tech-card p-3 shadow-sm rounded border bg-white">
                <h5 className="fw-bold text-success mb-2 text-center">
                  Lenguajes
                </h5>
                <div className="d-flex flex-wrap gap-3 justify-content-center mb-3">
                  <FaReact title="React.js" className="tech-icon" />
                  <FaJsSquare title="JavaScript" className="tech-icon" />
                  <SiAngular title="Angular" className="tech-icon" />
                </div>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <FaHtml5 title="HTML" className="tech-icon" />
                  <FaCss3Alt title="CSS" className="tech-icon" />
                  <SiBootstrap title="Bootstrap" className="tech-icon" />
                  <SiSass title="SASS" className="tech-icon" />
                </div>
              </div>
            </Col>

            {/* Backend y bases de datos */}
            <Col md={6}>
              <div className="tech-card p-3 shadow-sm rounded border bg-white">
                <h5 className="fw-bold text-warning mb-2 text-center">
                  Bases de Datos y Backend
                </h5>
                <div className="d-flex gap-3 flex-wrap justify-content-center m-3">
                  <SiMysql title="MySQL" className="tech-icon" />
                  <SiPostgresql title="PostgreSQL" className="tech-icon" />
                  <FaPython title="Python" className="tech-icon" />
                  <SiDjango title="Django" className="tech-icon" />
                  <SiFastapi title="FastAPI" className="tech-icon" />
                </div>
              </div>
            </Col>

            {/* Herramientas */}
            <Col md={6}>
              <div className="tech-card p-3 shadow-sm rounded border bg-white">
                <h5 className="fw-bold text-danger mb-4 text-center">
                  Herramientas
                </h5>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <FaGitAlt title="Git" className="tech-icon" />
                  <FaGithub title="GitHub" className="tech-icon" />
                  <SiTrello title="Trello" className="tech-icon" />
                  <SiJira title="Jira" className="tech-icon" />
                </div>
              </div>
            </Col>

            {/* Arquitectura y metodologías */}
            <Col md={6}>
              <div className="tech-card p-3 shadow-sm rounded border bg-white">
                <h5 className="fw-bold text-primary text-center">
                  Arquitectura y Metodologías
                </h5>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <SiSpring title="Patrones de Diseño" className="tech-icon" />
                  <SiUml title="Modelado de Clases (UML)" className="tech-icon" />
                  <SiScrumalliance title="Scrum" className="tech-icon" />
                  <SiTestinglibrary title="TDD" className="tech-icon" />
                </div>
              </div>
            </Col>
          </Row>

          <p className="subtitle-about mt-3">
            También podés conocer más sobre mí en mis redes profesionales o
            descargar mi CV:
          </p>

          <div className="button-redes gap-3 d-flex flex-wrap justify-content-center">
            <a
              href="https://github.com/MilagrosCabrera23"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <FaGithub className="me-2" /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/milagros-cabrera-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaLinkedin className="me-2" /> LinkedIn
            </a>

            <a href="/cv-milagros-cabrera.docx" download className="btn btn-cv">
              <FaDownload className="me-2" /> Descargar mi CV
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeComponent;

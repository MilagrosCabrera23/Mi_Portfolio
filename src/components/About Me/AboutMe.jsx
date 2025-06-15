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
import { motion } from "framer-motion";
import perfilAnime from "../../assets/img/perfilanime.png";

const AboutMeComponent = () => {
  return (
    <Container className="about-container" id="sobre-mi">
      <Row className="row-about align-items-center flex-column flex-md-row">
        <Col className="text-start ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="title-about">Sobre Mi</h2>
            <p className="subtitle-about">
              Soy una desarrolladora de software en formación con enfoque en el
              desarrollo Full Stack. Me encanta transformar ideas en
              aplicaciones funcionales, interactivas y escalables.
            </p>
            <h3 className="title-tecnologias text-center">
              Habilidades y Tecnologías
            </h3>
          </motion.div>
          <Row className="g-3 row-about">
            {/* Lenguajes */}
            <Col md={6}>
              <div className="tech-card p-3 shadow-sm rounded">
                <h5 className="fw-bold text-success mb-2 text-center">
                  Lenguajes
                </h5>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <div className="tech-item">
                    <FaReact className="tech-icon-circle" />
                    <small className="tech-label">React.js</small>
                  </div>
                  <div className="tech-item">
                    <FaJsSquare className="tech-icon-circle" />
                    <small className="tech-label">JavaScript</small>
                  </div>
                  <div className="tech-item">
                    <SiAngular className="tech-icon-circle" />
                    <small className="tech-label">Angular</small>
                  </div>
                  <div className="tech-item">
                    <FaHtml5 className="tech-icon-circle" />
                    <small className="tech-label">HTML</small>
                  </div>
                  <div className="tech-item">
                    <FaCss3Alt className="tech-icon-circle" />
                    <small className="tech-label">CSS</small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Bases de Datos y Backend */}
            <Col md={6}>
              <div className="tech-card p-3 shadow-sm rounded">
                <h5 className="fw-bold text-warning mb-2 text-center">
                  Bases de Datos y Backend
                </h5>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <div className="tech-item">
                    <SiMysql className="tech-icon-circle" />
                    <small className="tech-label">MySQL</small>
                  </div>
                  <div className="tech-item">
                    <SiPostgresql className="tech-icon-circle" />
                    <small className="tech-label">PostgreSQL</small>
                  </div>
                  <div className="tech-item">
                    <FaPython className="tech-icon-circle" />
                    <small className="tech-label">Python</small>
                  </div>
                  <div className="tech-item">
                    <SiDjango className="tech-icon-circle" />
                    <small className="tech-label">Django</small>
                  </div>
                  <div className="tech-item">
                    <SiFastapi className="tech-icon-circle" />
                    <small className="tech-label">FastAPI</small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Herramientas */}
            <Col md={6}>
              <div className="tech-card p-3 shadow-sm rounded">
                <h5 className="fw-bold text-danger mb-2 text-center">
                  Herramientas
                </h5>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <div className="tech-item">
                    <FaGitAlt className="tech-icon-circle" />
                    <small className="tech-label">Git</small>
                  </div>
                  <div className="tech-item">
                    <FaGithub className="tech-icon-circle" />
                    <small className="tech-label">GitHub</small>
                  </div>
                  <div className="tech-item">
                    <SiBootstrap className="tech-icon-circle" />
                    <small className="tech-label">Bootstrap</small>
                  </div>
                </div>
              </div>
            </Col>

            {/* Arquitectura y Metodologías */}
            <Col md={6}>
              <div className="tech-card me-3 shadow-sm rounded">
                <h5 className="fw-bold text-primary text-center">
                  Arquitectura y Metodologías
                </h5>
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                  <div className="tech-item">
                    <SiSpring className="tech-icon-circle" />
                    <small className="tech-label">Patrones</small>
                  </div>
                  <div className="tech-item">
                    <SiUml className="tech-icon-circle" />
                    <small className="tech-label">UML</small>
                  </div>
                  <div className="tech-item">
                    <SiScrumalliance className="tech-icon-circle" />
                    <small className="tech-label">Scrum</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-home mt-3"
          >
            <p className="subtitle-about mt-2">
              También podés conocer más sobre mí en mis redes profesionales o
              descargar mi CV:
            </p>
          </motion.p>

          <div className="button-redes gap-3 d-flex">
            <a
              href="https://github.com/MilagrosCabrera23"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="me-2">
                <FaGithub />
              </i>{" "}
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/milagros-cabrera-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="me-2">
                <FaLinkedin />
              </i>{" "}
              LinkedIn
            </a>

            <a
              href="/cv-milagros-cabrera.docx"
              download
              className=" btn btn-cv"
            >
              <i className="me-2">
                <FaDownload />
              </i>
              Descargar mi CV
            </a>
          </div>
        </Col>

        <Col className="text-center">
          <motion.img
            src={perfilAnime}
            alt="foto de perfil animada"
            className="imagen-about text-start"
            initial={false}
            whileHover={{
              scale: [null, 1.1, 1.6],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ["easeInOut", "easeOut"],
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeComponent;

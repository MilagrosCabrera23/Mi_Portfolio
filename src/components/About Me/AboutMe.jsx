import "../About Me/AboutMe.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import perfilAnime from "../../assets/perfilAnime.png";

const AboutMeComponent = () => {
  return (
    <Container className="about-container" id="sobre-mi">
      <Row className="row-about">
        <Col className="text-start">
          <h2 className="title-about">Sobre Mi</h2>
          <p className="subtitle-about">
            ¡Hola! Soy Milagros, desarrolladora de software en formación con
            enfoque en el desarrollo Full Stack.
          </p>

          <p className="subtitle-about">
            Me encanta transformar ideas en aplicaciones funcionales,
            interactivas y escalables.
          </p>

          <h3 className="title-tecnologias text-start">
            Habilidades y Tecnologías
          </h3>
          <p className="subtitle-about">
            <strong className="tecnologias-bg">Backend:</strong> Python, Django, Flask, Node.js
            <br />
            <strong className="tecnologias-bg">Frontend:</strong> React.js, HTML, CSS, JavaScript
            <br />
            <strong className="tecnologias-bg">Bases de Datos:</strong> MySQL, PostgreSQL
            <br />
            <strong className="tecnologias-bg">Herramientas:</strong> Git, GitHub, Trello, Scrum, Jira
          </p>

          <p className="subtitle-about mt-2">
            También podés conocer más sobre mí en mis redes profesionales o
            descargar mi CV:
          </p>

          <div className=" button-redes gap-2 d-flex">
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
              href="https://www.codewars.com/users/milagrosmagaly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              <i className="me-2">
                <SiCodewars />
              </i>{" "}
              Codewars
            </a>

            <a
              href="/cv-milagros-cabrera.docx"
              download
              className="btn btn-success"
            >
              <i className="me-2">
                <FaDownload />
              </i>
              Descargar mi CV
            </a>
          </div>
        </Col>

        <Col className="text-center">
          <img
            src={perfilAnime}
            className="imagen-about text-start"
            alt="foto de perfil animada"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMeComponent;

import "../Projects/Projects.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import Card from "react-bootstrap/Card";

const ProjectsComponent = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/proyectos")
      .then((res) => setProyectos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="about-projects" id="proyecto">
      <Row className="row-projects">
        <Col className="text-start">
          <h2 className="text-center title-projects">Mis Proyectos</h2>
          <p className="text-center subtitle-projects">
            A continuación te muestro algunos de los proyectos que he realizado
            en este último tiempo, usando distintas tecnologías.
          </p>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id}>
            <Card border="info" style={{ maxWidth: "18rem" }}>
              <Card.Img
                variant="top"
                src={proyecto.imagen}
                className="img-proyectos"
                alt={proyecto.titulo}
              />
              <Card.Body>
                <Card.Title className="card-title titles-projects text-center mb-2">
                  {proyecto.titulo}
                </Card.Title>
                   <Card.Text className="card-text text-projects text-center">
                  {proyecto.categoria}
                </Card.Text>
                <Card.Text className="card-text text-projects text-center">
                  {proyecto.descripcion}
                </Card.Text>
                <div className="d-flex button-group gap-2 flex-nowrap flex-wrap justify-content-center">
                  {proyecto.tecnologias.split(",").map((tec, i) => (
                    <span key={i} className="badge bg-secondary">
                      {tec.trim()}
                    </span>
                  ))}
                  <a
                    href={proyecto.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <FaGithub />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsComponent;

import "../Projects/Projects.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
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
          <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ duration: 1, type: "spring", stiffness: 80 }}
                  >
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 2 }}
                      className="text-center title-projects"
                    >
          <h2 className="text-center title-projects">Mis Proyectos</h2>
          </motion.h1>
            <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay:2 }}
                        className="text-center subtitle-projects"
                      >
          <p className="text-center subtitle-projects">
            A continuación te muestro algunos de los proyectos que he realizado
            en este último tiempo, usando distintas tecnologías.
          </p></motion.h1>
           </motion.div> 
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
  {proyectos.map((proyecto) => (
    <Col key={proyecto.id}>
      <Card>
        <Card.Img
          variant="top"
          src={proyecto.imagen}
          className="img-proyectos"
          alt={proyecto.titulo}
        />
        <Card.Body>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="card-title titles-projects text-center"
          >
            <Card.Title className="card-title titles-projects text-center">
              {proyecto.titulo}
            </Card.Title>
            <Card.Text className="card-text text-projects text-center">
              <strong>Categoría: </strong>
              {proyecto.categoria}
            </Card.Text>
            <Card.Text className="card-text text-projects text-center">
              {proyecto.descripcion}
            </Card.Text>
            <div className="d-flex button-group flex-wrap justify-content-center">
              {proyecto.tecnologias.split(",").map((tec, i) => (
                <span key={i} className="bg-azul-pastel">
                  {tec.trim()}
                </span>
              ))}
              <a
                href={proyecto.linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-github d-flex align-items-center gap-2"
              >
                <FaGithub /> Ver en Github
              </a>
            </div>
          </motion.div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>
  );
};

export default ProjectsComponent;

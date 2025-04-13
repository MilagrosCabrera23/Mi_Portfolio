import "../Projects/Projects.css";
import fotoIot from "../../assets/sistema-iot.jpeg";
// import fotoBroker from "../../assets/arg_broker.jpge"
// import fotoEcommerce from "../../assets/ecommerce.jpge"
import { Container, Row, Col} from "react-bootstrap";

const ProjectsComponent = () => {
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

      <Row className="d-flex flex-column gap-3">
        <Col className="d-flex flex-md-row flex-column align-items-center">
       
       {/* <img src={fotoBroker} className="img-proyectos" alt="imagen de perfil del proyecto 1" /> */}
       <img src={fotoIot} alt="" className="img-proyectos" />

            <div className="project-card">
              <h5 className="card-title titles-projects text-center mb-2">
                Arg Broker – Gestión de Inversiones
              </h5>

              <p className="card-text text-projects text-center">
              Plataforma para gestionar inversiones financieras de forma sencilla. Permite registrarse, comprar y vender acciones, y visualizar el rendimiento del portafolio con gráficos e indicadores. Además, ofrece funcionalidades como recuperación de contraseña, autenticación y seguimiento de ganancias/pérdidas para tomar decisiones informadas.


              </p>

              <div className="d-flex button-group">
                <span className="badge bg-info text">PYTHON</span>
                <span className="badge bg-warning">MySQL</span>
                <span className="badge bg-success">PATRON DAO</span>

                <a
                  href="https://github.com/MilagrosCabrera23/proyecto_integrador_broker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary button-github"
                >
                  Ver proyecto en Github
                </a>
              </div>
            </div>
            </Col>

            <Col className="project-card d-flex flex-md-row flex-column align-items-center">
            <img src={fotoIot} alt="" className="img-proyectos" />
            {/* <img src={fotoEcommerce}className="img-proyectos" alt="imagen de perfil del proyecto 2" /> */}

              <div className="project-content">
                <h5 className="card-title titles-projects text-center mb-2">
                  E-commerce Firebase  – Trendy Threads
                </h5>

                <p className="card-text text-projects text-center">
                Catálogo de ropa online organizado por categorías, diseñado para ofrecer una experiencia de compra cómoda y atractiva. Incluye carrito de compras, detalles completos de productos (imagen, descripción, precio) y navegación intuitiva para facilitar la selección de artículos.
                </p>

                <div className="d-flex button-group">
                  <span className="badge bg-info">REACT</span>
                  <span className="badge bg-warning">FIREBASE</span>
                  <span className="badge bg-dark">HTML</span>
                  <span className="badge bg-success">CSS</span>
                  <span className="badge bg-danger">BOOSTRAP</span>

                  <a
                    href="https://github.com/MilagrosCabrera23/EntregaFinal-React-CabreraMilagros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary button-github"
                  >
                     Ver proyecto en Github
                  </a>
                </div>
              </div>
              </Col>

              <Col className="project-card d-flex flex-md-row flex-column align-items-center">
                  <img src={fotoIot} alt="" className="img-proyectos" />
            
                <div className="project-content">
                  <h5 className="card-title titles-projects text-center mb-2">
                    Sistema IoT con Node-RED
                  </h5>

                  <p className="card-text text-projects text-center">
                  Dashboard web en tiempo real para visualizar datos de sensores IoT (ESP32), integrados con MySQL. Incluye monitoreo continuo, alertas automáticas ante valores fuera de rango y escalabilidad para agregar nuevos dispositivos sin afectar el rendimiento.
                  </p>

                  <div className="d-flex button-group">
                    <span className="badge bg-info ">ESP32</span>
                    <span className="badge bg-warning">NODE RED</span>
                    <span className="badge bg-dark">MYSQL</span>
                    <span className="badge bg-success">MQTT</span>

                    <a
                      href="https://github.com/MilagrosCabrera23/Escalado-de-plataforma-Iot-con-visualizacion-de-datos-en-node-red"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary button-github"
                    >
                      Ver proyecto en Github
                    </a>
                  </div>
                </div>
              </Col>
      </Row>
    </Container>
  );
};

export default ProjectsComponent;

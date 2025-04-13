import "../Contact/Contact.css";
import { Container, Col, Button, Form } from "react-bootstrap";

const ContactComponent = () => {
  return (
    <Container className="about-contacto" id="contacto">
      <Col>
        <h2 className="text-center  title-contacto">Formulario de Contacto</h2>
        <p className="subtitle-contacto">
          ¿Querés contactarme? Enviame un mensaje directamente desde este
          formulario y te respondere a la brevedad.
        </p>
      </Col>
      <Col>
        <Form className="form-contacto">
          <Form.Group controlId="formNombre">
            <Form.Label className="text-forms">Nombre Completo:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Escriba su nombre aqui"
            />
          </Form.Group>

          <Form.Group controlId="formTelefono" className="mb-3">
            <Form.Label className="text-forms">Teléfono:</Form.Label>
            <Form.Control
              type="tel"
              required
              placeholder="Ingrese su número de contacto"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-forms">Gmail: </Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Ingrese su correo"
            />
          </Form.Group>

          <Form.Group controlId="formAsunto" className="mb-3">
            <Form.Label className="text-forms">Asunto:</Form.Label>
            <Form.Control type="text" placeholder="Motivo del mensaje" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-forms">Escribi tu mensaje:</Form.Label>
            <Form.Control required as="textarea" rows={5} />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-3 button-contacto"
          >
            Enviar mensaje
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default ContactComponent;

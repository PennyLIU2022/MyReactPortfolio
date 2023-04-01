import { useState } from "react";
import { Container, Col, Form, Row } from "react-bootstrap";
import { validateEmail } from "../../../utils/validateEmail";
import "./contact.css";

function Contact() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "Name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!Name || !email || !message) {
      alert("Name, Email or Message is missing, please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      alert("Not a valid email address, please try again!");
      return;
    }

    alert(`Thank you for your message, ${Name}!`);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <Container fluid className="contact" id="contact">
      <Container className="contact-container">
        <Row size={12} md={12}>
          <h1> Contact me </h1>
          <p> Feel free to reach me at any time</p>
          <Form className="contact-form">
            <Form.Group className="mb-4">
              <Form.Label>
                <h5>
                  <strong>Name</strong>
                </h5>
              </Form.Label>
              <Form.Control
                className="form-message"
                type="text"
                placeholder="Name"
                name="Name"
                value={Name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                <h5>
                  <strong>Email Address</strong>
                </h5>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>
                  <strong>Message</strong>
                </h5>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={message}
                onChange={handleInputChange}
              />
            </Form.Group>

            <div
              className="submit"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="submit"
                className="submit-btn"
                onClick={handleFormSubmit}
              >
                <span>Submit</span>
              </button>
            </div>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

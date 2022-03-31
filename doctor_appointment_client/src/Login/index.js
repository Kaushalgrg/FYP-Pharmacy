import React, { useContext, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { UserContext } from "../user/context";
import { saveLoginInfo } from "../services/db";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastHeader, setToastHeader] = useState("");
  const [toastBg, setToastBg] = useState("danger");
  const { login } = useContext(UserContext);
  return (
    <Container fluid="sm">
      <h1>Admin Login</h1>
      <Form>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
        </Row>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            login({ email, password }).then((res) => {
              console.log(res);
              if (res.error) {
                setToastMessage(res.message);
                setToastHeader("Login Failed");
                setToastBg("danger");
                setToast(true);
              } else {
                saveLoginInfo(res.data.data).then((db_res) => {
                  if (db_res.success) {
                    setToastMessage("Login Successfull");
                    setToastHeader("Success");
                    setToastBg("success");
                    window.location.reload();
                  } else {
                    setToastMessage(res.message);
                    setToastHeader("Login Failed");
                    setToastBg("danger");
                  }
                });
                setToast(true);
              }
            });
          }}
        >
          Submit
        </Button>{" "}
        <Button
          variant="primary"
          onClick={(e) => {
            setEmail("");
            setPassword("");
          }}
        >
          Reset
        </Button>
      </Form>
      <ToastContainer className="p-3" position="top-end">
        <Toast show={showToast} onClose={() => setToast(false)} bg={toastBg}>
          <Toast.Header>
            <strong className="me-auto">{toastHeader}</strong>
          </Toast.Header>
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};
export default Login;

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import app from "../firebase.init";

const auth = getAuth(app);
const ReactBootstrapReg = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="pass" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ReactBootstrapReg;

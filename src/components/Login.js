import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const auth = getAuth();

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);

    const form = event.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPass = () => {
    sendPasswordResetEmail(auth, userEmail);
  };
  return (
    <div className="w-50 mx-auto">
      <p>Please Log In</p>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleBlur}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="pass" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {success && <p>Login Success</p>}
      <p>
        New to this website ? please <Link to="/register">Register Here</Link>
      </p>
      <p>
        Forget PassWord ? Please Reset{" "}
        <Button
          onClick={handleForgetPass}
          variant="primary"
          type="submit"
          className="btn btn-link"
        >
          Please Reset
        </Button>
      </p>
    </div>
  );
};

export default Login;

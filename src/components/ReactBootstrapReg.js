import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import app from "../firebase.init";

const auth = getAuth(app);
const ReactBootstrapReg = () => {
  const [passError, setPassError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    if (!/(?=.*[a-zA-Z])/.test(pass)) {
      setPassError("Please Atleast Two Uppecase");
      return;
    }
    if (pass.length < 6) {
      setPassError("Enter atleast 6 character");
      return;
    }
    if (!/(?=.*[!#$%&? "])/.test(pass)) {
      setPassError("Please add atlest 1 special Character");
      return;
    }
    setPassError("");
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        form.reset();
        verifyEmail();

        console.log(user);
      })
      .then((error) => {
        setPassError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("plese check emal and verify");
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
        <p>{passError}</p>
        {success && <p>User Created Successfully</p>}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account ? Login <Link to="/login">Login Here</Link>
      </p>
    </div>
  );
};

export default ReactBootstrapReg;

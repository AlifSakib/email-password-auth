import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "./App.css";
import ReactBootstrapReg from "./components/ReactBootstrapReg";
import app from "./firebase.init";
function App() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
  };
  const handlePassChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="">
      <form onSubmit={(event) => handleRegister(event)}>
        <input
          onChange={(e) => handleEmailChange(e)}
          type="email"
          placeholder="Your Email"
          name="email"
          id=""
        />
        <br />
        <input
          onChange={(e) => handlePassChange(e)}
          type="password"
          placeholder="Your PassWord"
          name="password"
          id=""
        />
        <br />
        <button type="submit">Register</button>
      </form>
      <ReactBootstrapReg></ReactBootstrapReg>
    </div>
  );
}

export default App;

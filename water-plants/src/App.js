import { useState } from "react";
import SignupForm from "./components/common/signupForm";

function App() {
  const [user, setUser] = useState({
    username: "",
    phoneNumber: "",
    password: "",
  });

  const [error, setError] = useState("");

  const SignUp = (details) => {
    console.log(details);
  };

  return (
    <div className="App">
      <SignupForm SignUp={SignUp} error={error} />
    </div>
  );
}

export default App;

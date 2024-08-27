import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const handleLogin = (username) => {
    setUsername(username);
    setLoggedIn(true);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/home"
            element={<Home loggedIn={loggedIn} username={username} />}
          />
          <Route
            path="/about"
            element={<About loggedIn={loggedIn} username={username} />}
          />
          <Route
            path="/contact"
            element={<Contact loggedIn={loggedIn} username={username} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

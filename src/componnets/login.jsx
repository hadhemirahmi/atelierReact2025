import { useState } from "react";
import Swal from "sweetalert2";
import ProtectedRoute from "../ProtectedRoute";
import { useNavigate } from "react-router";
function LoginRegister({ onLogin,redirectPath }) {
  const [userLogin, setUserLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [userReg, setUserReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passReg, setPassReg] = useState("");
  const [confirmReg, setConfirmReg] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userLogin === "user" && passLogin === "password") {
      Swal.fire({ icon: "success", text: "Connexion réussie" });
      onLogin(); 
      navigate(redirectPath || "/services");
    } else {
      Swal.fire({ icon: "error", text: "Identifiants invalides" });
      navigate("/login");
      
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (passReg !== confirmReg) {
      Swal.fire({ icon: "error", text: "Mots de passe différents" });
    } else {
      Swal.fire({ icon: "success", text: "Inscription réussie" });
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f3f3f3;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          gap: 40px;
        }

        .card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          width: 500px;
          text-align: center;
        }

        .card h2 {
          margin-bottom: 20px;
        }

        .card input {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .card button {
          width: 100%;
          padding: 10px;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        .card button:hover {
          background-color: #0056b3;
        }
      `}</style>

      <div className="container">
        <div className="card login">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={userLogin}
              onChange={(e) => setUserLogin(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={passLogin}
              onChange={(e) => setPassLogin(e.target.value)}
              required
            />
            <button type="submit">Se connecter</button>
          </form>
        </div>

        <div className="card register">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={userReg}
              onChange={(e) => setUserReg(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={emailReg}
              onChange={(e) => setEmailReg(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={passReg}
              onChange={(e) => setPassReg(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirmer mot de passe"
              value={confirmReg}
              onChange={(e) => setConfirmReg(e.target.value)}
              required
            />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;

import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";

const Register = () => {
  const { register } = useAuth();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return;
    }

    const newUser = {
      username,
      email,
      password,
      name: {
        firstname: "Jonh",
        lastname: "Doe"
      },
      address: {
        city: "Buenos Aires",
        street: "Calle falsa",
        number: 123,
        zipcode: "1000",
        geolocation: {
          lat: "-34.6037",
          long: "-58.3816"
        }
      },
      phone: "123456789"
    };


    try {
      await register(newUser);
      setSuccess("Usuario registrado con exito");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Hubo un problema al registrarse")
    }
  };

  return (
    <Layout>
      <div className="card-container">
        <div className="card-register">
          <h1>Registrate</h1>

          <section>
            <h2>Hola, bienvenido</h2>
            <form className="form-register" onSubmit={handleSubmit}>
              <div className="user-register">
                <input className="input-register" placeholder="Nombre de usuario"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className="email-register">
                <input className="input-register" placeholder="Correo electrónico"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="password-register">
                <input className="input-register" placeholder="Contraseña"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <button className="button-register">Ingresar</button>
            </form>

            {
              error && <p style={{ color: "red", fontWeight: "bolder", textTransform: "uppercase" }}>{error}</p>
            }
            {
              success && <p style={{ color: "green", fontWeight: "bolder", textTransform: "uppercase" }}>{success}</p>
            }
          </section>
        </div>
      </div>
    </Layout >
  )
}

export { Register }
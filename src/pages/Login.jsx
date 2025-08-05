import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const nagivate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ username, password })
    const isLogin = await login(username, password)

    if (isLogin) {
      setUsername("")
      setPassword("")
      nagivate("/")
    }
  }

  return (
    <Layout>
      <div className="card-container">
        <div className="card">
          <h1>Inicia sesión</h1>

          <section>
            <h2>Hola, bienvenido de nuevo</h2>
            <p>johnd, m38rmF$</p>
            <form className="form-login" onSubmit={handleLogin}>
              <div className="user-login">
                <label>Nombre de usuario:</label>
                <input className="input-login"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username} />
              </div>
              <div className="password-login">
                <label>Contraseña:</label>
                <input className="input-login"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} />
              </div>
              <button className="button-login">Ingresar</button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export { Login }
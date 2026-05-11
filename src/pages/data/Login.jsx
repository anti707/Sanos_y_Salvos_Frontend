import { useState } from "react";
import Forms from "../../Components/templates/Forms"
import "../../css/pages/Login.css";
import Navbar from "../../Components/organisms/Navbar";
import Foother from "../../Components/organisms/Foother";


const Login = () => {
    const [form, setForm] = useState({
        correo: "",
        contrasena: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <main className="login-page">

            <div className="login-navbar">
                        <Navbar />
                    </div>
                    <h1>iniciar sesion</h1>
                <div className="login-header">
                    <form onSubmit={handleSubmit} className="login-card">
                        <Forms content={form} />
                        <a href="/registro">¿No tienes cuenta? Regístrate aquí</a>
                    </form>
                    
                </div>

            <div className="login-footer">
                <Foother />
            </div>
        </main>
    );
};


export default Login;
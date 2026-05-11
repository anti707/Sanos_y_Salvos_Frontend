import { useState } from "react";
import Forms from "../../Components/templates/Forms"
import "../../css/pages/Login.css";
import "../../css/Components/organisms/Navbar.css";
import Navbar from "../../Components/organisms/Navbar";
import Foother from "../../Components/organisms/Foother";
//FireBase
import appFirebase from "../../credential";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(appFirebase);

const Login = () => {
    const [form, setForm] = useState({
        correo: "",
        contrasena: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setForm({
            correo: "",
            contrasena: ""
        });
    };

    const [ register, setRegister ] = useState(false);

    const functAuth = async(e) => {
        e.preventDefault();
        const { correo, contrasena } = form;

        if(register){
            try {
                await createUserWithEmailAndPassword(auth, correo, contrasena);
            } catch (error) {
                console.error("Error al crear el usuario:", error);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contrasena);
            } catch (error) {
                console.error("Error al iniciar sesión:", error);
            }
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    };

    return (
        <main className="login-page">

            <div className="login-navbar">
                        <Navbar />
                    </div>
                    <h1>iniciar sesion</h1>
                <div className="login-header">
            <form onSubmit={handleSubmit} className="login-card">
                <Forms content={form} onChange={handleChange} />
                    <button className="btn-account" type="submit" onClick={functAuth}>
                        {register ? "Registrarse" : "Iniciar Sesion"}
                    </button>
                    <h2>
                        {register ? "Si ya tienes cuenta" : "No tienes cuenta"} 
                        <button onClick={() => setRegister(!register)}>
                            {register ? "Inicia Sesion" : "Registrate"}
                        </button>
                    </h2>
            </form>
                    
                </div>

            <div className="login-footer">
                <Foother />
            </div>
        </main>
    );
};


export default Login;
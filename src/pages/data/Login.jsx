import { useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import { auth } from "../../credential"; // Ajusta tu ruta
import { signInWithEmailAndPassword } from "firebase/auth"; //
import Forms from "../../Components/templates/Forms"; //
import "../../css/pages/Login.css"; //

const Login = () => {
    const navigate = useNavigate(); //
    const [form, setForm] = useState({ correo: "", contrasena: "" }); //

    const handleChange = (e) => {
        const { name, value } = e.target; //
        setForm((prev) => ({ ...prev, [name]: value })); //
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { correo, contrasena } = form; //

        try {
            // Firebase autentica las credenciales en el cliente
        const userCredential = await signInWithEmailAndPassword(auth, correo, contrasena); 
        
        // EXTRAEMOS EL ID TOKEN
        const token = await userCredential.user.getIdToken();
        
        // Se guarda el token en el almacenamiento del navegador (localStorage)
        localStorage.setItem("token", token);

        // se le avisa al backend a traves de api gateway que usuario entro
        await fetch(`${API_URL}/api/usuarios/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // Le pasamos el token al "guardián" del Gateway
            },
            body: JSON.stringify({ correo })
        });

        alert("Inicio de sesión exitoso!!!"); 
        navigate("/");
        } catch (error) {
            alert("Error al iniciar sesión: " + error.message); 
            console.error("Error en Login:", error); 
        }
    };

    return (
        <main className="login-page">
            <div className="login-split-container">
                
                {/* LADO IZQUIERDO: Imagen */}
                <div className="login-image">
                    <img 
                        src="https://media.istockphoto.com/id/1845512061/es/foto/lindos-gatos-y-perros-domésticos-de-varios-colores-corren-por-un-prado-soleado-de-verano.jpg?b=1&s=1024x1024&w=0&k=20&c=pzhdxr6SKWpgdZQw8k9fKyp-1YblvI9G2-F578tGlvc=" 
                        alt="Mascotas Sanos y Salvos" 
                    />
                </div>
                
                {/* LADO DERECHO: Formulario */}
                <div className="login-form-side">
                    <div className="login-header">
                        <h1 className="login-title">Iniciar Sesión</h1>
                    </div>

                    <div className="login-card">
                        <form onSubmit={handleLogin}>
                            <Forms content={form} onChange={handleChange} />
                            
                            <button className="btn-account" type="submit">
                                Iniciar Sesión
                            </button>
                            
                            <div className="register-toggle">
                                <span>¿No tienes cuenta? </span>
                                <button 
                                    type="button" 
                                    onClick={() => navigate("/registro")} // Te lleva a la nueva página
                                    className="btn-switch"
                                >
                                    Regístrate
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Login;
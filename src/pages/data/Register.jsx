import { useState } from "react";
import { API_URL } from "../../config"; // 1. IMPORTAMOS LA URL BASE
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../credential"; 
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { doc, setDoc } from "firebase/firestore";
import FormRegister from "../../Components/templates/FormRegister"; 
import "../../css/pages/Register.css"; 

const Register = () => {
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        fechaNacimiento: "",
        direccion: "",
        contrasena: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { correo, contrasena, nombre, apellido, fechaNacimiento, direccion } = form;

        try {
            // A. Registramos al usuario en Firebase Authentication
            const infoUsuario = await createUserWithEmailAndPassword(auth, correo, contrasena);
            
            // B. Extraemos el token del nuevo usuario y lo respaldamos en el navegador
            const token = await infoUsuario.user.getIdToken();
            localStorage.setItem("token", token);

            // C. Guardamos la información detallada en Cloud Firestore
            await setDoc(doc(db, "usuarios", infoUsuario.user.uid), {
                nombre,
                apellido,
                correo,
                fechaNacimiento,
                direccion,
                fechaRegistro: new Date().toLocaleDateString(), 
                foto: "https://via.placeholder.com/150" 
            });

            // D. NUEVO: Enviamos los datos a tu Base de Datos relacional pasando por el Gateway
            await fetch(`${API_URL}/api/usuarios/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // El filtro del Gateway verificará este token
                },
                body: JSON.stringify({
                    uid: infoUsuario.user.uid, // Mantenemos el mismo ID para cruzar datos
                    nombre,
                    apellido,
                    correo,
                    direccion
                })
            });

            alert("¡Usuario registrado con éxito en todo el sistema!");
            navigate("/"); 

        } catch (error) {
            alert("Error al registrarse: " + error.message);
            console.error("Error detallado:", error);
        }
    };

    return (
        <main className="Register-page">
            <div className="Register-split-container">
                
                <div className="Register-image">
                    <img 
                        src="https://seguros.elcorteingles.es/content/dam/eci-seguros/es/blog/blog-julio-2023/incluir-mascota-seguro-hogar.jpg" 
                        alt="Mascotas Sanos y Salvos" 
                    />
                </div>
                
                <div className="Register-form-side">
                    <div className="Register-header">
                        <h1 className="Register-title">Crear Cuenta</h1>
                    </div>

                    <div className="Register-card">
                        <form onSubmit={handleRegister}>
                            <FormRegister content={form} onChange={handleChange} />
                            
                            <button className="btn-accountt" type="submit">
                                Registrarse
                            </button>
                            
                            <div className="register-togglee">
                                <span>¿Ya tienes cuenta? </span>
                                <button 
                                    type="button" 
                                    onClick={() => navigate("/login")} 
                                    className="btn-switchh"
                                >
                                    Inicia Sesión
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Register;
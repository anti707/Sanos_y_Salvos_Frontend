import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../credential"; //
import { createUserWithEmailAndPassword } from "firebase/auth"; //
import { doc, setDoc } from "firebase/firestore";
import FormRegister from "../../Components/templates/FormRegister"; //
import "../../css/pages/Register.css"; //

const Register = () => {
    const navigate = useNavigate();
    
    // Inicializamos el estado con todos los campos solicitados
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
        // Extraemos todas las variables del estado
        const { correo, contrasena, nombre, apellido, fechaNacimiento, direccion } = form;

        try {
            // A. Registramos al usuario en Firebase Authentication
            const infoUsuario = await createUserWithEmailAndPassword(auth, correo, contrasena);
            
            // B. Guardamos toda la información detallada en Cloud Firestore usando su UID único
            await setDoc(doc(db, "usuarios", infoUsuario.user.uid), {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                fechaNacimiento: fechaNacimiento,
                direccion: direccion,
                fechaRegistro: new Date().toLocaleDateString(), // Registra cuándo se unió automáticamente
                foto: "https://via.placeholder.com/150" // Placeholder inicial
            });

            alert("¡Usuario registrado con éxito!");
            navigate("/"); // Redirección al Home

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
                        src="https://statics.launion.digital/2023/12/658e325bd4f16.jpg" 
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
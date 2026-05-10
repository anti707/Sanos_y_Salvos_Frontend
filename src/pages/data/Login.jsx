import { useState } from "react";
import Forms from "../../Components/templates/Forms"
import "../../css/pages/Login.css";

const Login = () => {
    const [form] = useState({
        correo: "",
        contrasena: ""
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <main className="login-page">
            <form onSubmit={handleSubmit} className="login-card">
                <Forms content={form} />
            </form>
        </main>
    );
};


export default Login;
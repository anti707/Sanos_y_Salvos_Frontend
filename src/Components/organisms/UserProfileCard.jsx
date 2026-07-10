import { useState } from "react";
import "../../css/Components/organisms/UserProfileCard.css";

function UserProfileCard({ userData, onBack, onLogout }) {
    const [fotoError, setFotoError] = useState(false);
    const hasFoto = Boolean(userData.foto?.trim());

    if (!userData) return <p className="profile-loading">Cargando datos del perfil...</p>;

    return (
        <div className="profile-card-container">
            
            {/* NOMBRE */}
            <div className="profile-header">
                <div className="avatar-wrapper">
                    {hasFoto && !fotoError ? (
                        <img 
                            src={userData.foto} 
                            alt="Avatar de Usuario" 
                            className="profile-avatar"
                            onError={() => setFotoError(true)}
                        />
                    ) : (
                        <svg viewBox="0 0 24 24" className="profile-avatar-icon" aria-hidden="true">
                            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.33 0-6 1.79-6 4v1h12v-1c0-2.21-2.67-4-6-4Z" />
                        </svg>
                    )}
                </div>
                <h1 className="profile-name">
                    {userData.nombre || "Usuario"} {userData.apellido || ""}
                </h1>
            </div>

            <hr className="profile-divider" />

            {/*INFORMACIÓN*/}
            <div className="profile-info-grid">
                <div className="info-card-item">
                    <span className="item-label">Correo Electrónico</span>
                    <strong className="item-value">{userData.correo || "No registrado"}</strong>
                </div>

                <div className="info-card-item">
                    <span className="item-label">Fecha de Nacimiento</span>
                    <strong className="item-value">{userData.fechaNacimiento || "No especificada"}</strong>
                </div>

                <div className="info-card-item">
                    <span className="item-label">Nombre completo</span>
                    <strong className="item-value">{`${userData.nombre || "Usuario"} ${userData.apellido || ""}`.trim() || "No especificado"}</strong>
                </div>

                <div className="info-card-item">
                    <span className="item-label">Miembro desde</span>
                    <strong className="item-value">{userData.fechaRegistro || userData.fecha || "Recientemente"}</strong>
                </div>
            </div>

            {/*BOTONES INFERIORES */}
            <div className="profile-actions-row">
                <button onClick={onBack} className="btn-profile btn-profile-back">
                    Volver
                </button>
                <button onClick={onLogout} className="btn-profile btn-profile-logout">
                    Cerrar sesión
                </button>
            </div>

        </div>
    );
}

export default UserProfileCard;
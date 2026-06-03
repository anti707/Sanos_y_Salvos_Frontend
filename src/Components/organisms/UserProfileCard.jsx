import "../../css/Components/organisms/UserProfileCard.css";


function UserProfileCard({ userData, onBack, onEdit, onLogout }) {
    if (!userData) return <p className="profile-loading">Cargando datos del perfil...</p>;

    return (
        <div className="profile-card-container">
            
            {/* NOMBRE */}
            <div className="profile-header">
                <div className="avatar-wrapper">
                    <img 
                        src={userData.foto || "https://via.placeholder.com/150"} 
                        alt="Avatar de Usuario" 
                        className="profile-avatar"
                    />
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
                    <strong className="item-value">{userData.correo}</strong>
                </div>

                <div className="info-card-item">
                    <span className="item-label">Fecha de Nacimiento</span>
                    <strong className="item-value">{userData.fechaNacimiento || "No especificada"}</strong>
                </div>

                <div className="info-card-item">
                    <span className="item-label">Direccion</span>
                    <strong className="item-value">{userData.direccion || "No especificada"}</strong>
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
                <button onClick={onEdit} className="btn-profile btn-profile-edit">
                    Editar Mis Datos
                </button>
                <button onClick={onLogout} className="btn-profile btn-profile-logout">
                    Cerrar sesión
                </button>
            </div>

        </div>
    );
}

export default UserProfileCard;
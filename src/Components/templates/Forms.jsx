
 const goToHome = () => {
    navigate("/Home");
  };

function Forms({ content, onChange}) {

  return (
    <div className="Form">
      
        <h3>Correo Electrónico</h3>
      <input
        type="email"
        value={content.correo}
        placeholder="Correo"
        onChange={onChange}
      />

      <h3>Contraseña</h3>
      <input
        type="password"
        value={content.contrasena}
        placeholder="Contraseña"
        onChange={onChange}
      />

      <button className="btn-account" onClick={goToHome}>
              iniciar sesion
            </button>
            
    </div>
  );
}

export default Forms;
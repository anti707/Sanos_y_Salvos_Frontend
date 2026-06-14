function Forms({ content, onChange}) {

  return (
    <div className="Form">
      
        <h3>Correo Electrónico</h3>
      <input
        type="email"
        name="correo"
        value={content.correo}
        placeholder="Correo"
        onChange={onChange}
        required
      />

      <h3>Contraseña</h3>
      <input
        type="password"
        name="contrasena"
        value={content.contrasena}
        placeholder="Contraseña"
        onChange={onChange}
        required
        minLength={6}
        maxLength={25}
      />

            
    </div>
  );
}

export default Forms;
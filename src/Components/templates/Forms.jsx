function Forms({ content, onChange}) {

  return (
    <div className="Form">
      <label className="Form-label" htmlFor="correo">Correo Electrónico</label>
      <input
        id="correo"
        className="Form-input"
        type="email"
        name="correo"
        value={content.correo}
        placeholder="Correo"
        onChange={onChange}
        required
      />

      <label className="Form-label" htmlFor="contrasena">Contraseña</label>
      <input
        id="contrasena"
        className="Form-input"
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
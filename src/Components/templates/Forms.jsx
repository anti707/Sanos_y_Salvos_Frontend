

function Forms({ content, onChange}) {

  return (
    <div>

      <input
        type="email"
        value={content.correo}
        placeholder="Correo"
        onChange={onChange}
      />

      <input
        type="password"
        value={content.contrasena}
        placeholder="Contraseña"
        onChange={onChange}
      />


    </div>
  );
}

export default Forms;